#!/usr/bin/env node

const { spawn } = require('child_process');
const http = require('http');

const PORT = 3000;
const MAX_RETRIES = 5;
let retryCount = 0;
let serverProcess = null;

console.log(`🚀 Starting persistent development server on port ${PORT}...`);

// Function to check if server is responding
function checkServer() {
  return new Promise((resolve) => {
    const req = http.get(`http://localhost:${PORT}`, (res) => {
      resolve(true);
    });
    
    req.on('error', () => {
      resolve(false);
    });
    
    req.setTimeout(5000, () => {
      req.destroy();
      resolve(false);
    });
  });
}

// Function to kill processes on port
function killPort() {
  return new Promise((resolve) => {
    const killProcess = spawn('lsof', ['-ti', `:${PORT}`]);
    let pids = '';
    
    killProcess.stdout.on('data', (data) => {
      pids += data.toString();
    });
    
    killProcess.on('close', (code) => {
      if (pids.trim()) {
        const pidList = pids.trim().split('\n');
        pidList.forEach(pid => {
          try {
            process.kill(pid, 'SIGKILL');
            console.log(`🧹 Killed process ${pid} on port ${PORT}`);
          } catch (e) {
            // Process might already be dead
          }
        });
      }
      setTimeout(resolve, 2000);
    });
    
    killProcess.on('error', () => {
      resolve();
    });
  });
}

// Function to start the development server
async function startServer() {
  console.log('▶️  Starting Next.js development server...');
  
  serverProcess = spawn('npm', ['run', 'dev'], {
    stdio: 'inherit',
    shell: true
  });
  
  serverProcess.on('exit', (code) => {
    console.log(`⚠️  Server exited with code ${code}`);
    
    if (code !== 0) {
      retryCount++;
      console.log(`🔄 Retry attempt ${retryCount}/${MAX_RETRIES}`);
      
      if (retryCount >= MAX_RETRIES) {
        console.log('❌ Max retries reached. Exiting...');
        process.exit(1);
      }
      
      console.log('⏳ Waiting 3 seconds before restart...');
      setTimeout(restartServer, 3000);
    }
  });
  
  // Wait for server to start
  await new Promise(resolve => setTimeout(resolve, 5000));
  
  // Check if server is responding
  const isRunning = await checkServer();
  if (isRunning) {
    console.log(`✅ Server is running successfully on http://localhost:${PORT}`);
    retryCount = 0;
  } else {
    console.log('❌ Server failed to start properly');
    if (serverProcess) {
      serverProcess.kill('SIGKILL');
    }
    setTimeout(restartServer, 3000);
  }
}

// Function to restart the server
async function restartServer() {
  await killPort();
  await startServer();
}

// Handle process termination
process.on('SIGINT', async () => {
  console.log('\n🛑 Shutting down development server...');
  if (serverProcess) {
    serverProcess.kill('SIGKILL');
  }
  await killPort();
  process.exit(0);
});

process.on('SIGTERM', async () => {
  console.log('\n🛑 Shutting down development server...');
  if (serverProcess) {
    serverProcess.kill('SIGKILL');
  }
  await killPort();
  process.exit(0);
});

// Start the server
startServer();
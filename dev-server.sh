#!/bin/bash

# Development server persistence script
# This script ensures the Next.js development server stays running on port 3000

PORT=3000
MAX_RETRIES=5
RETRY_COUNT=0

echo "🚀 Starting persistent development server on port $PORT..."

# Function to kill any existing processes on port 3000
cleanup_port() {
    echo "🧹 Cleaning up port $PORT..."
    lsof -ti:$PORT | xargs kill -9 2>/dev/null || true
    sleep 2
}

# Function to start the development server
start_server() {
    echo "▶️  Starting Next.js development server..."
    npm run dev
}

# Function to check if server is running
check_server() {
    curl -s http://localhost:$PORT > /dev/null 2>&1
    return $?
}

# Main loop
while true; do
    # Clean up any existing processes on the port
    cleanup_port
    
    # Start the server in background
    start_server &
    SERVER_PID=$!
    
    # Wait a bit for server to start
    sleep 5
    
    # Check if server is responding
    if check_server; then
        echo "✅ Server is running successfully on http://localhost:$PORT"
        RETRY_COUNT=0
        
        # Wait for the server process to exit
        wait $SERVER_PID
        EXIT_CODE=$?
        
        echo "⚠️  Server exited with code $EXIT_CODE"
        
        # If server crashed, increment retry count
        if [ $EXIT_CODE -ne 0 ]; then
            RETRY_COUNT=$((RETRY_COUNT + 1))
            echo "🔄 Retry attempt $RETRY_COUNT/$MAX_RETRIES"
            
            if [ $RETRY_COUNT -ge $MAX_RETRIES ]; then
                echo "❌ Max retries reached. Exiting..."
                exit 1
            fi
            
            echo "⏳ Waiting 3 seconds before restart..."
            sleep 3
        fi
    else
        echo "❌ Server failed to start. Retrying..."
        kill $SERVER_PID 2>/dev/null || true
        sleep 3
    fi
done
'use client';

import { useState } from 'react';

export default function EmailSetup() {
  const [testResult, setTestResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const testEmailService = async () => {
    setIsLoading(true);
    setTestResult(null);

    try {
      const response = await fetch('/api/test-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      const result = await response.json();
      setTestResult(result);
    } catch (error) {
      setTestResult({
        success: false,
        message: 'Network error',
        error: error.message
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Email Service Setup
          </h1>
          
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Choose Your Email Service
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              {/* Resend Option */}
              <div className="bg-green-50 dark:bg-green-900/20 border-2 border-green-200 dark:border-green-800 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">✓</span>
                  </div>
                  <h3 className="text-lg font-medium text-green-900 dark:text-green-100">
                    Option 1: Resend (Recommended)
                  </h3>
                </div>
                
                <p className="text-green-800 dark:text-green-200 text-sm mb-4">
                  Modern email API with generous free tier. Much easier setup than Gmail.
                </p>
                
                <div className="space-y-2 text-green-700 dark:text-green-300 text-sm">
                  <p><strong>✅ Pros:</strong></p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>3,000 emails/month free</li>
                    <li>Simple API key setup</li>
                    <li>No 2FA required</li>
                    <li>Better deliverability</li>
                  </ul>
                </div>
                
                <div className="mt-4">
                  <a 
                    href="https://resend.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block bg-green-600 text-white px-4 py-2 rounded text-sm hover:bg-green-700 transition-colors"
                  >
                    Sign up for Resend →
                  </a>
                </div>
              </div>

              {/* Gmail Option */}
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <h3 className="text-lg font-medium text-blue-900 dark:text-blue-100">
                    Option 2: Gmail SMTP
                  </h3>
                </div>
                
                <p className="text-blue-800 dark:text-blue-200 text-sm mb-4">
                  Use your existing Gmail account. Requires app password setup.
                </p>
                
                <div className="space-y-2 text-blue-700 dark:text-blue-300 text-sm">
                  <p><strong>⚠️ Requirements:</strong></p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>2-Factor Authentication</li>
                    <li>App password generation</li>
                    <li>More complex setup</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Resend Setup Instructions */}
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-medium text-green-900 dark:text-green-100 mb-4">
                🚀 Resend Setup (5 minutes):
              </h3>
              
              <ol className="list-decimal list-inside space-y-2 text-green-800 dark:text-green-200 text-sm">
                <li>
                  Go to <a href="https://resend.com" target="_blank" rel="noopener noreferrer" className="underline font-medium">resend.com</a> and create a free account
                </li>
                <li>Verify your email and log in to the dashboard</li>
                <li>Click "API Keys" in the left sidebar</li>
                <li>Click "Create API Key" button</li>
                <li>Give it a name like "The Cyber Signals Newsletter"</li>
                <li>Copy the API key (starts with "re_")</li>
                <li>
                  Add to your <code className="bg-green-200 dark:bg-green-800 px-1 rounded">.env.local</code> file:
                  <br />
                  <code className="bg-green-200 dark:bg-green-800 px-2 py-1 rounded block mt-1">
                    RESEND_API_KEY=re_your_api_key_here
                  </code>
                </li>
                <li>Restart your development server</li>
              </ol>
            </div>

            {/* Gmail Setup Instructions */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-medium text-blue-900 dark:text-blue-100 mb-4">
                📧 Gmail Setup (Alternative):
              </h3>
              
              <ol className="list-decimal list-inside space-y-3 text-blue-800 dark:text-blue-200">
                <li>
                  <strong>Go to Google Account Settings:</strong>
                  <br />
                  <a 
                    href="https://myaccount.google.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 underline ml-4"
                  >
                    https://myaccount.google.com
                  </a>
                </li>
                
                <li>
                  <strong>Enable 2-Factor Authentication:</strong>
                  <br />
                  <span className="ml-4 text-sm">Go to Security → 2-Step Verification (if not already enabled)</span>
                </li>
                
                <li>
                  <strong>Generate App Password (Updated Process):</strong>
                  <br />
                  <span className="ml-4 text-sm">Security → 2-Step Verification → App passwords</span>
                  <br />
                  <span className="ml-4 text-sm">In the "Select app" dropdown, choose "Other (Custom name)"</span>
                  <br />
                  <span className="ml-4 text-sm">Type "The Cyber Signals Newsletter" as the name</span>
                  <br />
                  <span className="ml-4 text-sm">Click "Generate" to get your 16-character password</span>
                </li>
                
                <li>
                  <strong>Alternative Method (if App Passwords not available):</strong>
                  <br />
                  <span className="ml-4 text-sm">Search for "App passwords" in Google Account settings</span>
                  <br />
                  <span className="ml-4 text-sm">Or go directly to: 
                    <a 
                      href="https://myaccount.google.com/apppasswords" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 underline ml-1"
                    >
                      myaccount.google.com/apppasswords
                    </a>
                  </span>
                </li>
                
                <li>
                  <strong>Update Environment File:</strong>
                  <br />
                  <span className="ml-4 text-sm">Add to your <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">.env.local</code> file:</span>
                  <br />
                  <code className="ml-4 bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-sm block mt-1">
                    GMAIL_APP_PASSWORD=your-16-character-password
                  </code>
                </li>
                
                <li>
                  <strong>Restart Development Server:</strong>
                  <br />
                  <span className="ml-4 text-sm">Stop and restart your Next.js development server</span>
                </li>
              </ol>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 mb-6">
              <h4 className="font-medium text-green-800 dark:text-green-200 mb-2">
                💡 Alternative: Use a Different Email Service
              </h4>
              <p className="text-green-700 dark:text-green-300 text-sm mb-2">
                If you're having trouble with Gmail App Passwords, you can use other email services:
              </p>
              <ul className="list-disc list-inside text-green-700 dark:text-green-300 text-sm space-y-1">
                <li><strong>SendGrid:</strong> Free tier with 100 emails/day</li>
                <li><strong>Mailgun:</strong> Free tier with 5,000 emails/month</li>
                <li><strong>AWS SES:</strong> Pay-as-you-go pricing</li>
                <li><strong>Resend:</strong> Modern email API with generous free tier</li>
              </ul>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-6">
              <h4 className="font-medium text-yellow-800 dark:text-yellow-200 mb-2">
                🔍 Troubleshooting Gmail App Passwords:
              </h4>
              <ul className="list-disc list-inside text-yellow-700 dark:text-yellow-300 text-sm space-y-1">
                <li>Make sure 2-Factor Authentication is enabled first</li>
                <li>If "App passwords" doesn't appear, try searching for it in account settings</li>
                <li>Some Google Workspace accounts may have this feature disabled by admin</li>
                <li>Try using "Other (Custom name)" instead of "Mail" in the dropdown</li>
                <li>The password is 16 characters with spaces (copy exactly as shown)</li>
              </ul>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-6">
              <h4 className="font-medium text-yellow-800 dark:text-yellow-200 mb-2">
                ⚠️ Important Security Notes:
              </h4>
              <ul className="list-disc list-inside text-yellow-700 dark:text-yellow-300 text-sm space-y-1">
                <li>Never share your app password publicly</li>
                <li>The .env.local file is already in .gitignore</li>
                <li>Use a dedicated Gmail account for sending emails</li>
                <li>App passwords are 16 characters with spaces (e.g., "abcd efgh ijkl mnop")</li>
              </ul>
            </div>

            <div className="flex gap-4">
              <button
                onClick={testEmailService}
                disabled={isLoading}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isLoading ? 'Testing...' : 'Test Email Service'}
              </button>
            </div>

            {testResult && (
              <div className={`mt-6 p-4 rounded-lg ${
                testResult.success 
                  ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800' 
                  : 'bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800'
              }`}>
                <h4 className={`font-medium mb-2 ${
                  testResult.success 
                    ? 'text-green-800 dark:text-green-200' 
                    : 'text-red-800 dark:text-red-200'
                }`}>
                  {testResult.success ? '✅ Success!' : '❌ Test Failed'}
                </h4>
                
                <p className={`text-sm mb-2 ${
                  testResult.success 
                    ? 'text-green-700 dark:text-green-300' 
                    : 'text-red-700 dark:text-red-300'
                }`}>
                  {testResult.message}
                </p>

                {testResult.error && (
                  <div className="mt-3">
                    <p className="text-red-700 dark:text-red-300 text-sm font-medium">Error:</p>
                    <code className="text-red-600 dark:text-red-400 text-xs bg-red-100 dark:bg-red-900/30 p-2 rounded block mt-1">
                      {testResult.error}
                    </code>
                  </div>
                )}

                {testResult.instructions && (
                  <div className="mt-4">
                    <p className="text-red-700 dark:text-red-300 text-sm font-medium mb-2">
                      Setup Instructions:
                    </p>
                    {testResult.instructions.resend && (
                      <div className="mb-3">
                        <p className="text-red-600 dark:text-red-400 text-sm font-medium mb-1">Resend Setup:</p>
                        <ul className="text-red-600 dark:text-red-400 text-xs space-y-1 ml-4">
                          {testResult.instructions?.resend ? Object.entries(testResult.instructions.resend).map(([key, value]) => (
                            <li key={key}>
                              <strong>{key.replace('step', 'Step ')}:</strong> {value}
                            </li>
                          )) : null}
                        </ul>
                      </div>
                    )}
                    {testResult.instructions.gmail && (
                      <div className="mb-3">
                        <p className="text-red-600 dark:text-red-400 text-sm font-medium mb-1">Gmail Setup:</p>
                        <ul className="text-red-600 dark:text-red-400 text-xs space-y-1 ml-4">
                          {testResult.instructions?.gmail ? Object.entries(testResult.instructions.gmail).map(([key, value]) => (
                            <li key={key}>
                              <strong>{key.replace('step', 'Step ')}:</strong> {value}
                            </li>
                          )) : null}
                        </ul>
                      </div>
                    )}
                    {!testResult.instructions.resend && !testResult.instructions.gmail && (
                      <ul className="text-red-600 dark:text-red-400 text-xs space-y-1">
                        {testResult.instructions ? Object.entries(testResult.instructions).map(([key, value]) => (
                          <li key={key}>
                            <strong>{key.replace('step', 'Step ')}:</strong> {value}
                          </li>
                        )) : null}
                      </ul>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
              Current Configuration Status
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">Gmail User</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {process.env.NEXT_PUBLIC_GMAIL_USER || 'thecybersignals@gmail.com'}
                </p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">App Password</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {process.env.GMAIL_APP_PASSWORD ? '✅ Configured' : '❌ Not Set'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
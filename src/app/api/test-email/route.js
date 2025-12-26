import { NextResponse } from 'next/server';
import { sendSubscriptionNotification } from '@/src/utils/emailService';
import { sendSubscriptionNotificationResend } from '@/src/utils/resendEmailService';

export async function POST(request) {
  try {
    // Test email data
    const testData = {
      email: 'test@example.com',
      name: 'Test User',
      source: 'test-endpoint',
      timestamp: new Date().toISOString()
    };

    console.log('Testing email service...');
    
    let result;
    let service = 'none';
    
    try {
      // Try Resend first, then Gmail
      if (process.env.RESEND_API_KEY) {
        console.log('Testing Resend email service...');
        result = await sendSubscriptionNotificationResend(testData);
        service = 'Resend';
      } else if (process.env.GMAIL_APP_PASSWORD) {
        console.log('Testing Gmail SMTP service...');
        result = await sendSubscriptionNotification(testData);
        service = 'Gmail SMTP';
      } else {
        throw new Error('No email service configured');
      }
    } catch (emailError) {
      console.error('Email service test failed:', emailError);
      throw emailError;
    }
    
    return NextResponse.json({
      success: true,
      message: `Test email sent successfully via ${service}!`,
      service: service,
      result: result
    });

  } catch (error) {
    console.error('Test email failed:', error);
    
    return NextResponse.json({
      success: false,
      message: 'Test email failed',
      error: error.message,
      instructions: {
        resend: {
          step1: 'Go to https://resend.com and sign up (recommended)',
          step2: 'Create an API key in the dashboard',
          step3: 'Add RESEND_API_KEY=your_key to .env.local',
          step4: 'Restart your development server'
        },
        gmail: {
          step1: 'Go to your Google Account settings (myaccount.google.com)',
          step2: 'Enable 2-Factor Authentication if not already enabled',
          step3: 'Go to Security > 2-Step Verification > App passwords',
          step4: 'Generate an app password (use "Other (Custom name)" if "Mail" not available)',
          step5: 'Add GMAIL_APP_PASSWORD=your-16-char-password to .env.local',
          step6: 'Restart your development server'
        }
      }
    }, { status: 500 });
  }
}
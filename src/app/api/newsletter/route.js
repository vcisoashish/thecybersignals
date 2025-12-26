import { NextResponse } from 'next/server';
import { sendSubscriptionNotification, sendWelcomeEmail } from '@/src/utils/emailService';
import { sendSubscriptionNotificationResend, sendWelcomeEmailResend } from '@/src/utils/resendEmailService';

export async function POST(request) {
  try {
    const { email, name = '', source = 'website' } = await request.json();

    if (!email) {
      return NextResponse.json(
        { success: false, message: 'Email is required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Invalid email format' },
        { status: 400 }
      );
    }

    const timestamp = new Date().toISOString();
    const subscriptionData = {
      email,
      name,
      source,
      timestamp,
      ip: request.headers.get('x-forwarded-for') || 'Unknown',
      userAgent: request.headers.get('user-agent') || 'Unknown'
    };

    // Log the subscription
    console.log('Newsletter Subscription:', subscriptionData);

    try {
      // Try Resend first (easier setup), fallback to Gmail
      if (process.env.RESEND_API_KEY) {
        console.log('Using Resend email service...');
        await sendSubscriptionNotificationResend(subscriptionData);
        await sendWelcomeEmailResend(email, name);
      } else if (process.env.GMAIL_APP_PASSWORD) {
        console.log('Using Gmail SMTP service...');
        await sendSubscriptionNotification(subscriptionData);
        await sendWelcomeEmail(email, name);
      } else {
        console.log('No email service configured - logging subscription only');
        // Still log the subscription even if no email service is configured
      }
      
      console.log(`Newsletter subscription processed successfully for ${email}`);
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      // Continue with success response even if email fails
      // In production, you might want to queue this for retry
    }

    return NextResponse.json({
      success: true,
      message: 'Successfully subscribed to newsletter! Check your email for confirmation.'
    });

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}
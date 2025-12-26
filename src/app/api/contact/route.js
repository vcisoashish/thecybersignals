import { NextResponse } from 'next/server';
import { sendSubscriptionNotificationResend } from '@/src/utils/resendEmailService';
import { sendSubscriptionNotification } from '@/src/utils/emailService';

// Contact form email service
const sendContactNotification = async (contactData) => {
  const { name, email, service, details, timestamp } = contactData;
  
  // Get the correct domain based on environment
  const getWebsiteUrl = () => {
    if (process.env.VERCEL_URL) {
      return `https://${process.env.VERCEL_URL}`;
    }
    if (process.env.NODE_ENV === 'production') {
      return 'https://thecybersignals.online';
    }
    return 'http://localhost:3000';
  };

  const websiteUrl = getWebsiteUrl();

  try {
    let resend = null;
    
    // Lazy load Resend only when needed and only on server-side
    const getResend = async () => {
      if (typeof window !== 'undefined') {
        throw new Error('Resend should only be used server-side');
      }
      
      if (!resend) {
        const { Resend } = await import('resend');
        resend = new Resend(process.env.RESEND_API_KEY);
      }
      return resend;
    };

    // If no Resend API key is set, just log the contact
    if (!process.env.RESEND_API_KEY) {
      console.log('Resend API key not configured. Contact form would be sent to: thecybersignals@gmail.com');
      console.log('Contact data:', contactData);
      return { success: true, message: 'Contact form logged (no Resend API key configured)' };
    }

    const resendClient = await getResend();
    
    const { data, error } = await resendClient.emails.send({
      from: 'The Cyber Signals <contact@thecybersignals.online>',
      to: ['thecybersignals@gmail.com'],
      subject: `New Contact Form Submission - ${service}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0; text-align: center;">The Cyber Signals</h1>
            <p style="color: white; margin: 10px 0 0 0; text-align: center; opacity: 0.9;">New Contact Form Submission</p>
          </div>
          
          <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e9ecef;">
            <h2 style="color: #343a40; margin-top: 0;">Contact Details</h2>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #667eea;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #495057; width: 140px;">Name:</td>
                  <td style="padding: 8px 0; color: #6c757d;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #495057;">Email:</td>
                  <td style="padding: 8px 0; color: #6c757d;">${email}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #495057;">Service Interest:</td>
                  <td style="padding: 8px 0; color: #6c757d;">${service}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #495057;">Date:</td>
                  <td style="padding: 8px 0; color: #6c757d;">${new Date(timestamp).toLocaleString()}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #495057;">Website:</td>
                  <td style="padding: 8px 0; color: #6c757d;">${websiteUrl}</td>
                </tr>
              </table>
            </div>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #28a745;">
              <h3 style="color: #343a40; margin-top: 0; margin-bottom: 10px;">Message:</h3>
              <p style="color: #6c757d; line-height: 1.6; margin: 0; white-space: pre-wrap;">${details}</p>
            </div>
            
            <div style="background: #e3f2fd; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 0; color: #1565c0; font-size: 14px;">
                <strong>Action Required:</strong> Respond to this inquiry within 24 hours as promised.
              </p>
            </div>
            
            <div style="text-align: center; margin-top: 30px;">
              <a href="mailto:${email}?subject=Re: Your Cybersecurity Inquiry - ${service}" style="background: #667eea; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block; margin-right: 10px;">
                Reply to Client
              </a>
              <a href="tel:${email}" style="background: #28a745; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
                Schedule Call
              </a>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 20px; color: #6c757d; font-size: 12px;">
            <p>This is an automated notification from The Cyber Signals contact form.</p>
            <p>Visit <a href="${websiteUrl}" style="color: #667eea;">${websiteUrl}</a> to manage your inquiries.</p>
          </div>
        </div>
      `,
      text: `
New Contact Form Submission - The Cyber Signals

Name: ${name}
Email: ${email}
Service Interest: ${service}
Date: ${new Date(timestamp).toLocaleString()}
Website: ${websiteUrl}

Message:
${details}

---
Action Required: Respond to this inquiry within 24 hours as promised.
Reply to: ${email}

This is an automated notification from The Cyber Signals contact form.
      `.trim()
    });

    if (error) {
      console.error('Resend error:', error);
      throw new Error(error.message);
    }

    console.log('Contact form notification sent via Resend:', data.id);
    return { success: true, messageId: data.id };

  } catch (error) {
    console.error('Failed to send contact form notification:', error);
    throw error;
  }
};

export async function POST(request) {
  try {
    const { name, email, service, details } = await request.json();

    // Validation
    if (!name || !email || !service || !details) {
      return NextResponse.json(
        { success: false, message: 'All fields are required' },
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
    const contactData = {
      name,
      email,
      service,
      details,
      timestamp,
      ip: request.headers.get('x-forwarded-for') || 'Unknown',
      userAgent: request.headers.get('user-agent') || 'Unknown'
    };

    // Log the contact form submission
    console.log('Contact Form Submission:', contactData);

    try {
      // Send notification to thecybersignals@gmail.com
      await sendContactNotification(contactData);
      
      console.log(`Contact form processed successfully for ${email}`);
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      // Continue with success response even if email fails
      // In production, you might want to queue this for retry
    }

    return NextResponse.json({
      success: true,
      message: 'Thank you for your inquiry! We\'ll respond within 24 hours.'
    });

  } catch (error) {
    console.error('Contact form submission error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}
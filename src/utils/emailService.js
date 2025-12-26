// Email service utility for handling newsletter subscriptions
import nodemailer from 'nodemailer';

// Create transporter for Gmail SMTP
const createTransporter = () => {
  return nodemailer.createTransporter({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER || 'thecybersignals@gmail.com',
      pass: process.env.GMAIL_APP_PASSWORD || '' // You'll need to set this
    }
  });
};

export const sendSubscriptionNotification = async (subscriptionData) => {
  const { email, name, source, timestamp } = subscriptionData;
  
  // Create email content
  const emailContent = {
    from: process.env.GMAIL_USER || 'thecybersignals@gmail.com',
    to: 'thecybersignals@gmail.com',
    subject: 'New Newsletter Subscription - The Cyber Signals',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; border-radius: 10px 10px 0 0;">
          <h1 style="color: white; margin: 0; text-align: center;">The Cyber Signals</h1>
          <p style="color: white; margin: 10px 0 0 0; text-align: center; opacity: 0.9;">New Newsletter Subscription</p>
        </div>
        
        <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e9ecef;">
          <h2 style="color: #343a40; margin-top: 0;">Subscription Details</h2>
          
          <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #667eea;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #495057; width: 120px;">Email:</td>
                <td style="padding: 8px 0; color: #6c757d;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #495057;">Name:</td>
                <td style="padding: 8px 0; color: #6c757d;">${name || 'Not provided'}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #495057;">Source:</td>
                <td style="padding: 8px 0; color: #6c757d;">${source}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #495057;">Date:</td>
                <td style="padding: 8px 0; color: #6c757d;">${new Date(timestamp).toLocaleString()}</td>
              </tr>
            </table>
          </div>
          
          <div style="background: #e3f2fd; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; color: #1565c0; font-size: 14px;">
              <strong>Action Required:</strong> Add this subscriber to your newsletter list and send a welcome email.
            </p>
          </div>
          
          <div style="text-align: center; margin-top: 30px;">
            <a href="mailto:${email}" style="background: #667eea; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
              Reply to Subscriber
            </a>
          </div>
        </div>
        
        <div style="text-align: center; margin-top: 20px; color: #6c757d; font-size: 12px;">
          <p>This is an automated notification from The Cyber Signals website.</p>
          <p>Visit <a href="https://thecybersignals.com" style="color: #667eea;">thecybersignals.com</a> to manage your newsletter settings.</p>
        </div>
      </div>
    `,
    text: `
New Newsletter Subscription - The Cyber Signals

Email: ${email}
Name: ${name || 'Not provided'}
Source: ${source}
Date: ${new Date(timestamp).toLocaleString()}

This subscriber has requested to join The Cyber Signals newsletter. Please add them to your mailing list and send a welcome email.

---
This is an automated notification from The Cyber Signals website.
    `.trim()
  };

  try {
    // If no Gmail app password is set, just log the email
    if (!process.env.GMAIL_APP_PASSWORD) {
      console.log('Gmail App Password not configured. Email would be sent to:', emailContent.to);
      console.log('Email content:', emailContent);
      return { success: true, message: 'Email logged (no SMTP configured)' };
    }

    const transporter = createTransporter();
    const result = await transporter.sendMail(emailContent);
    console.log('Subscription notification sent successfully:', result.messageId);
    return { success: true, messageId: result.messageId };
  } catch (error) {
    console.error('Failed to send subscription notification:', error);
    throw error;
  }
};

export const sendWelcomeEmail = async (email, name) => {
  const welcomeEmail = {
    from: process.env.GMAIL_USER || 'thecybersignals@gmail.com',
    to: email,
    subject: 'Welcome to The Cyber Signals Newsletter!',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 28px;">Welcome to The Cyber Signals!</h1>
          <p style="color: white; margin: 15px 0 0 0; opacity: 0.9; font-size: 16px;">Your cybersecurity intelligence starts here</p>
        </div>
        
        <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e9ecef;">
          <h2 style="color: #343a40; margin-top: 0;">Thank you for subscribing${name ? `, ${name}` : ''}!</h2>
          
          <p style="color: #6c757d; line-height: 1.6;">
            You've successfully joined our community of cybersecurity professionals. Here's what you can expect:
          </p>
          
          <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <ul style="color: #495057; line-height: 1.8; padding-left: 20px;">
              <li><strong>Weekly Threat Intelligence:</strong> Latest cybersecurity threats and vulnerabilities</li>
              <li><strong>Expert Analysis:</strong> In-depth analysis of security incidents and trends</li>
              <li><strong>Best Practices:</strong> Actionable security recommendations for your organization</li>
              <li><strong>Industry Updates:</strong> News and updates from the cybersecurity world</li>
              <li><strong>Exclusive Content:</strong> Premium insights and early access to new resources</li>
            </ul>
          </div>
          
          <div style="background: #e8f5e8; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #28a745;">
            <p style="margin: 0; color: #155724;">
              <strong>🎯 Pro Tip:</strong> Add thecybersignals@gmail.com to your contacts to ensure our emails reach your inbox.
            </p>
          </div>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="https://thecybersignals.com" style="background: #667eea; color: white; padding: 15px 30px; text-decoration: none; border-radius: 6px; display: inline-block; font-weight: bold;">
              Explore Our Content
            </a>
          </div>
          
          <p style="color: #6c757d; font-size: 14px; text-align: center;">
            Questions? Reply to this email or visit our <a href="https://thecybersignals.com/contact" style="color: #667eea;">contact page</a>.
          </p>
        </div>
        
        <div style="text-align: center; margin-top: 20px; color: #6c757d; font-size: 12px;">
          <p>You're receiving this because you subscribed to The Cyber Signals newsletter.</p>
          <p><a href="#" style="color: #667eea;">Unsubscribe</a> | <a href="https://thecybersignals.com" style="color: #667eea;">Visit Website</a></p>
        </div>
      </div>
    `,
    text: `
Welcome to The Cyber Signals Newsletter!

Thank you for subscribing${name ? `, ${name}` : ''}!

You've successfully joined our community of cybersecurity professionals. Here's what you can expect:

• Weekly Threat Intelligence: Latest cybersecurity threats and vulnerabilities
• Expert Analysis: In-depth analysis of security incidents and trends  
• Best Practices: Actionable security recommendations for your organization
• Industry Updates: News and updates from the cybersecurity world
• Exclusive Content: Premium insights and early access to new resources

Pro Tip: Add thecybersignals@gmail.com to your contacts to ensure our emails reach your inbox.

Visit our website: https://thecybersignals.com
Questions? Reply to this email or visit: https://thecybersignals.com/contact

---
You're receiving this because you subscribed to The Cyber Signals newsletter.
    `.trim()
  };

  try {
    // If no Gmail app password is set, just log the email
    if (!process.env.GMAIL_APP_PASSWORD) {
      console.log('Gmail App Password not configured. Welcome email would be sent to:', email);
      console.log('Welcome email content:', welcomeEmail);
      return { success: true, message: 'Email logged (no SMTP configured)' };
    }

    const transporter = createTransporter();
    const result = await transporter.sendMail(welcomeEmail);
    console.log('Welcome email sent successfully:', result.messageId);
    return { success: true, messageId: result.messageId };
  } catch (error) {
    console.error('Failed to send welcome email:', error);
    throw error;
  }
};
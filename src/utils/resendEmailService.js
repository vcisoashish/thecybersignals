// Alternative email service using Resend (easier setup than Gmail)
// This file should only be used server-side

let resend = null;

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

export const sendSubscriptionNotificationResend = async (subscriptionData) => {
  const { email, name, source, timestamp } = subscriptionData;
  const websiteUrl = getWebsiteUrl();
  
  try {
    // If no Resend API key is set, just log the email
    if (!process.env.RESEND_API_KEY) {
      console.log('Resend API key not configured. Email would be sent to: thecybersignals@gmail.com');
      console.log('Subscription data:', subscriptionData);
      return { success: true, message: 'Email logged (no Resend API key configured)' };
    }

    const resendClient = await getResend();
    
    const { data, error } = await resendClient.emails.send({
      from: 'The Cyber Signals <newsletter@thecybersignals.online>', // Using your verified domain
      to: ['thecybersignals@gmail.com'],
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
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #495057;">Website:</td>
                  <td style="padding: 8px 0; color: #6c757d;">${websiteUrl}</td>
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
            <p>Visit <a href="${websiteUrl}" style="color: #667eea;">${websiteUrl}</a> to manage your newsletter settings.</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      throw new Error(error.message);
    }

    console.log('Subscription notification sent via Resend:', data.id);
    return { success: true, messageId: data.id };

  } catch (error) {
    console.error('Failed to send subscription notification via Resend:', error);
    throw error;
  }
};

export const sendWelcomeEmailResend = async (email, name) => {
  const websiteUrl = getWebsiteUrl();
  
  try {
    // If no Resend API key is set, just log the email
    if (!process.env.RESEND_API_KEY) {
      console.log('Resend API key not configured. Welcome email would be sent to:', email);
      return { success: true, message: 'Email logged (no Resend API key configured)' };
    }

    const resendClient = await getResend();
    
    const { data, error } = await resendClient.emails.send({
      from: 'The Cyber Signals <newsletter@thecybersignals.online>', // Using your verified domain
      to: [email],
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
              <a href="${websiteUrl}" style="background: #667eea; color: white; padding: 15px 30px; text-decoration: none; border-radius: 6px; display: inline-block; font-weight: bold;">
                Explore Our Content
              </a>
            </div>
            
            <p style="color: #6c757d; font-size: 14px; text-align: center;">
              Questions? Reply to this email or visit our <a href="${websiteUrl}/contact" style="color: #667eea;">contact page</a>.
            </p>
          </div>
          
          <div style="text-align: center; margin-top: 20px; color: #6c757d; font-size: 12px;">
            <p>You're receiving this because you subscribed to The Cyber Signals newsletter.</p>
            <p><a href="#" style="color: #667eea;">Unsubscribe</a> | <a href="${websiteUrl}" style="color: #667eea;">Visit Website</a></p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      throw new Error(error.message);
    }

    console.log('Welcome email sent via Resend:', data.id);
    return { success: true, messageId: data.id };

  } catch (error) {
    console.error('Failed to send welcome email via Resend:', error);
    throw error;
  }
};
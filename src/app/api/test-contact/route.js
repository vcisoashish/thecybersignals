import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    // Test contact form data
    const testData = {
      name: 'John Doe',
      email: 'john.doe@example.com',
      service: 'Security Assessment',
      details: 'We need a comprehensive security assessment for our enterprise infrastructure. Please provide information about your services and pricing.'
    };

    console.log('Testing contact form API...');
    
    // Send test contact form submission
    const response = await fetch(`${request.url.replace('/test-contact', '/contact')}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData),
    });

    const result = await response.json();
    
    return NextResponse.json({
      success: true,
      message: 'Test contact form sent successfully!',
      result: result
    });

  } catch (error) {
    console.error('Test contact form failed:', error);
    
    return NextResponse.json({
      success: false,
      message: 'Test contact form failed',
      error: error.message
    }, { status: 500 });
  }
}
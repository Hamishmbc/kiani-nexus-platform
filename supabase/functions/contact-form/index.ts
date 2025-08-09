import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')

serve(async (req) => {
  // Handle CORS
  if (req.method === 'OPTIONS') {
    return new Response('ok', {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
      },
    })
  }

  try {
    const { firstName, lastName, email, phone, company, serviceInterest, message } = await req.json()

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { 
          status: 400,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
          }
        }
      )
    }

    // Send email notification to hamish@seankiani.co.uk
    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Sean Kiani Contact Form <noreply@seankiani.co.uk>',
        to: ['hamish@seankiani.co.uk'],
        subject: `New Contact Form Submission from ${firstName} ${lastName}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
          ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
          ${serviceInterest ? `<p><strong>Service Interest:</strong> ${serviceInterest}</p>` : ''}
          <p><strong>Message:</strong></p>
          <p style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">${message}</p>
          
          <hr style="margin: 20px 0;">
          <p style="font-size: 12px; color: #666;">
            This email was sent from the Sean Kiani contact form at ${new Date().toLocaleString()}
          </p>
        `,
      }),
    })

    if (!emailResponse.ok) {
      console.error('Failed to send email:', await emailResponse.text())
      return new Response(
        JSON.stringify({ error: 'Failed to send email notification' }),
        { 
          status: 500,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
          }
        }
      )
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Contact form submitted successfully and notification sent' 
      }),
      {
        status: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
      }
    )

  } catch (error) {
    console.error('Error processing contact form:', error)
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { 
        status: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        }
      }
    )
  }
})
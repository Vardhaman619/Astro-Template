import sgMail from '@sendgrid/mail';
import { z } from 'zod';

// Email validation schema
const emailSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  message: z.string().min(1, "Message is required"),
  service: z.string().min(1, "Service is required")
});

export type EmailFormData = z.infer<typeof emailSchema>;

// Initialize SendGrid
const apiKey = import.meta.env.SENDGRID_API_KEY;
if (!apiKey) {
  throw new Error('SENDGRID_API_KEY environment variable is not set');
}
sgMail.setApiKey(apiKey);

export async function sendEmail(data: EmailFormData) {
  try {
    // Validate form data
    const validatedData = emailSchema.parse(data);

    // Create email content
    const emailContent = `
      New Quote Request
      -----------------
      Name: ${validatedData.firstName} ${validatedData.lastName}
      Email: ${validatedData.email}
      Phone: ${validatedData.phone}
      Service: ${validatedData.service}
      
      Message:
      ${validatedData.message}
    `;

    // Send email using SendGrid
    await sgMail.send({
      to: import.meta.env.ADMIN_EMAIL,
      from: import.meta.env.SITE_EMAIL, // Must be verified in SendGrid
      subject: 'New Quote Request - Foundation Repair Adelaide',
      text: emailContent,
      html: emailContent.replace(/\n/g, '<br>')
    });

    return { success: true };
  } catch (error) {
    console.error('Email error:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Failed to send email' 
    };
  }
}
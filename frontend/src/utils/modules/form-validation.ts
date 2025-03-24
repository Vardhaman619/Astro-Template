import { z } from 'zod';

export const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  message: z.string().min(1, "Message is required"),
  service: z.string().min(1, "Service is required")
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export function validateForm(data: unknown): ContactFormData {
  return contactFormSchema.parse(data);
}
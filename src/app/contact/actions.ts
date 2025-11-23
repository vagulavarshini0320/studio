"use server";

import * as z from 'zod';

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  mobile: z.string().optional(),
  message: z.string().min(10),
});

export async function submitContactForm(values: z.infer<typeof formSchema>) {
  const parsed = formSchema.safeParse(values);

  if (!parsed.success) {
    return { success: false, error: "Invalid form data." };
  }

  // Here you would typically:
  // 1. Send an email notification
  // 2. Save the data to a database
  
  console.log("New contact form submission:", parsed.data);

  // Simulate a network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  return { success: true };
}

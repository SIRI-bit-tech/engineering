import { Resend } from "resend";

if (!process.env.RESEND_API_KEY) {
  // In a production environment, this will throw an error if the key is missing.
  // For development, we'll log a warning.
  console.warn("RESEND_API_KEY is missing from environment variables.");
}

export const resend = new Resend(process.env.RESEND_API_KEY);

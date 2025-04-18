// make this dynamic api endpoint
export const prerender = false;
import type { APIRoute } from "astro";
import { sendEmail, type EmailFormData } from "../../utils/email";

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData: EmailFormData = await request.json();
    const result = await sendEmail(formData);

    if (!result.success) {
      return new Response(JSON.stringify({ error: result.error }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(
      JSON.stringify({ message: "Email sent successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: "Failed to process request" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};

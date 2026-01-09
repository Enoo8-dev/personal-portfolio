import type { APIRoute } from "astro";
import { sendEmail } from "../../lib/email-sender"; 
export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();
  const name = data.get("name") as string;
  const email = data.get("email") as string;
  const message = data.get("message") as string;

  if (!name || !email || !message) {
    return new Response(
      JSON.stringify({ message: "Compila tutti i campi" }),
      { status: 400 }
    );
  }

  try {
    await sendEmail(name, email, message);
    
    return new Response(
      JSON.stringify({ message: "Email inviata con successo!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ message: "Errore nell'invio della mail." }),
      { status: 500 }
    );
  }
};
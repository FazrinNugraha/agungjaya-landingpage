import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ redirect }) => {
  // Ganti nomor WhatsApp dengan nomor asli Anda
  const WA_URL =
    "https://api.whatsapp.com/send?phone=6282261018391&text=Halo%20Agung%20Jaya%20Aluminium,%20saya%20mau%20tanya%20jasa%20pemasangannya.";

  // Gunakan fungsi bawaan Astro untuk redirect HTTP 301
  return redirect(WA_URL, 301);
};

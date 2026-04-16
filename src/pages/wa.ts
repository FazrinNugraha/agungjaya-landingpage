import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  // Ganti nomor WhatsApp dengan nomor asli Anda
  const WA_URL =
    "https://api.whatsapp.com/send?phone=6282261018391&text=Halo%20Agung%20Jaya%20Aluminium,%20saya%20mau%20tanya%20jasa%20pemasangannya.";

  // Mengembalikan HTTP Status 301 Moved Permanently dengan header Location
  // Response ini sangat ringan karena bodynya kosong (null)
  return new Response(null, {
    status: 301,
    headers: {
      Location: WA_URL,
      // Opsional: hindari caching dari browser/in-app browser jika Anda sering mengubah nomor/pesan
      "Cache-Control": "no-store, max-age=0",
    },
  });
};

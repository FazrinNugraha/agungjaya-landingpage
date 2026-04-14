# Agungjaya Aluminium — Landing Page & Katalog Produk

![Astro](https://img.shields.io/badge/Astro-4.2.6-FF5D01?style=flat-square&logo=astro&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.1-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-blue?style=flat-square&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-20.11.0-339933?style=flat-square&logo=node.js&logoColor=white)

Landing page dan katalog produk digital untuk **Agungjaya Aluminium**. Website ini dirancang untuk menampilkan produk dan layanan aluminium premium, menjawab pertanyaan umum pelanggan (FAQ), serta mengarahkan pengunjung untuk melakukan pemesanan.

---

## 🚀 Teknologi yang Digunakan

| Kategori | Teknologi |
|---|---|
| Framework Utama | Astro.js 4.2.6 |
| Styling | Tailwind CSS 3.4.1 |
| Bahasa Pemrograman | TypeScript |
| Runtime | Node.js 20.11.0 *(via Volta)* |

---

## 🌟 Fitur Utama & Struktur Halaman

Halaman utama (`index.astro`) disusun secara terstruktur untuk memberikan pengalaman pengguna yang optimal:

| Section | Deskripsi |
|---|---|
| **Hero & Who We Are** | Perkenalan bisnis Agungjaya Aluminium |
| **Katalog Produk** | Pintu Lipat Aluminium, Jendela Casement, Partisi Kaca Frameless, Kitchen Set Aluminium, dan produk custom lainnya |
| **FAQ** | Cakupan area (Jabodetabek), waktu pengerjaan (2–3 hari), pilihan merk (YKK, Alexindo, Inkalum, dll), dan sistem pembayaran |
| **Call to Action** | Arahkan pelanggan menghubungi via WhatsApp atau media sosial |

---

## 💻 Cara Menjalankan Proyek

**1. Clone repositori ini:**

```bash
git clone <url-repositori>
cd agungjaya-aluminium
```

**2. Install semua dependensi:**

```bash
npm install
```

**3. Jalankan development server:**

```bash
npm run dev
```

**4. Build untuk production:**

```bash
npm run build
```

---

## 📝 Panduan Kustomisasi Katalog Produk

Sistem katalog produk dirancang agar mudah diperbarui tanpa mengubah struktur kode yang rumit.

### Cara Menambah atau Mengganti Foto Produk

**1.** Siapkan file gambar produk Anda.

**2.** Letakkan file gambar ke dalam folder berikut:

```
public/products/
```

**3.** Buka file konfigurasi data di:

```
src/utils/data.ts
```

**4.** Cari bagian array `products`, lalu isi properti `image` dengan nama file gambar:

```ts
// Jika foto tersedia:
image: "pintu-lipat.jpg"

// Jika foto belum tersedia, biarkan kosong:
image: ""
```

> 💡 **Tips**: Gunakan nama file yang deskriptif dan hindari spasi — gunakan tanda hubung (`-`) sebagai pemisah kata, misalnya `jendela-casement.jpg`.

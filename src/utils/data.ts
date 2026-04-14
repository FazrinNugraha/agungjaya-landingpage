// Deleted missing image imports
// import visibilityDilemma from "../assets/images/visibility-dilemma.jpg";
// import engagementGap from "../assets/images/engagement-gap.jpg";
// import resultsInHibernation from "../assets/images/results-in-hibernation.jpg";



const faqs = [
  {
    question: "Bagaimana cara melakukan pemesanan?",
    answer:
      "Anda bisa menghubungi kami melalui WhatsApp, Instagram, atau TikTok yang tersedia di bagian bawahhalaman ini. Tim kami akan melakukan survei lokasi, memberikan estimasi harga, dan memulai proses pengerjaan setelah kesepakatan.",
  },
  {
    question: "Apakah melayani area di luar Jabodetabek?",
    answer:
      "Saat ini kami fokus melayani area Jabodetabek dan sekitarnya. Untuk proyek di luar area tersebut, silakan hubungi kami terlebih dahulu untuk membahas kemungkinan pengerjaan dan biaya tambahan yang mungkin berlaku.",
  },
  {
    question: "Apa saja jenis produk aluminium yang tersedia?",
    answer:
      "Kami menyediakan berbagai produk aluminium premium meliputi pintu lipat, jendela geser, pintu utama, partisi kaca, kitchen set,sliding door swing, dan lain-lain. Setiap produk tersedia dalam berbagai model dan warna sesuai kebutuhan desain rumah Anda.",
  },
  {
    question: "Berapa lama proses pengerjaan dari pemesanan hingga pemasangan?",
    answer:
      "Proses pengerjaan umumnya memakan waktu 2-3 hari untuk perakitan dan 1 hari untuk pemasangan bisa lebih tergantung volume pesanan. Estimasi waktu akan kami informasikan saat konsultasi awal.",
  },
  {
    question: "Apa saja merk aluminium yang tersedia?",
    answer:
      "Kami menyediakan berbagai merk aluminium seperti YKK , Alexindo , Inkalum , Alutama , Dacon, Forta, dan lain-lain. ",
  },
  {
    question: "Sistem Pembayarannya bagaimana?",
    answer:
      "Sistem pembayaran kami biasanya melalui DP (Uang Muka) sebagai tanda jadi setelah survei dan kesepakatan, kemudian pelunasan dilakukan setelah proses pemasangan selesai. Kami menerima pembayaran via transfer bank maupun tunai.",
  },
  {
    question: "Apakah bisa request desain custom sesuai keinginan?",
    answer:
      "Tentu saja! Kami menerima pesanan custom untuk semua jenis produk. kami mempersilakan Anda mengirimkan referensi gambar atau model yang diinginkan saat konsultasi, sehingga tim kami dapat menyesuaikan dengan kebutuhan Anda.",
  },
];

/**
 * =============================================================
 *  KATALOG PRODUK - CARA MENAMBAH / MENGGANTI FOTO:
 * =============================================================
 *
 *  1. Taruh foto ke folder:  public/products/
 *     Contoh: public/products/pintu-lipat.jpg
 *
 *  2. Tulis nama file foto di bawah pada bagian "image":
 *     image: "pintu-lipat.jpg"
 *
 *  3. Kalau belum ada fotonya, kosongkan saja:
 *     image: ""
 *
 *  SELESAI! Tidak perlu import apapun.
 * =============================================================
 */
const products = [
  {
    title: "Pintu Lipat Aluminium",
    description:
      "Desain minimalis dan modern untuk sekat ruangan yang elegan dan fleksibel. Mengoptimalkan bukaan ruang.",
    image: "fotohero.jpeg",
  },
  {
    title: "Jendela Casement",
    description:
      "Bukaan maksimal untuk sirkulasi udara terbaik dengan sistem penguncian ganda yang aman dan kedap suara.",
    image: "tester.jpg",
  },
  {
    title: "Partisi Kaca Frameless",
    description:
      "Ciptakan kesan luas dan mewah pada ruangan dengan partisi kaca tanpa bingkai kelas premium.",
    image: "",
  },
  {
    title: "Kitchen Set Aluminium",
    description:
      "Tahan rayap dan anti air, pilihan paling tepat untuk dapur modern yang awet dan sangat mudah dibersihkan.",
    image: "",
  },
  {
    title: "Kanopi Kaca Tempered",
    description:
      "Perlindungan maksimal dengan pencahayaan alami yang tetap optimal untuk area carport atau teras.",
    image: "",
  },
  {
    title: "Pintu Sliding Kaca",
    description:
      "Solusi hemat ruang dengan rel atas premium yang pergerakannya halus dan tanpa suara saat digeser.",
    image: "",
  },
  {
    title: "Jendela Jalusi Aluminium",
    description:
      "Sirkulasi udara maksimal tanpa mengorbankan privasi. Sangat cocok untuk area kelembapan tinggi seperti kamar mandi.",
    image: "",
  },
  {
    title: "Kusen Aluminium Urat Kayu",
    description:
      "Kombinasi sempurna antara estetika alami kayu dengan ketahanan dan kekuatan struktur aluminium.",
    image: "",
  },
  {
    title: "Pintu Kaca Double",
    description:
      "Pintu kaca elegan bergaya perkantoran/komersial modern dengan handle stainless steel kualitas tinggi.",
    image: "",
  },
  {
    title: "Railing Tangga Aluminium",
    description:
      "Pegangan tangga minimalis yang kuat, anti karat, dan dirancang khusus untuk keselamatan keluarga.",
    image: "",
  },
  {
    title: "Railing Tanggga Aluminium",
    description:
      "Railing balkon minimalis dengan desain modern dan finishing berkualitas tinggi.",
    image: "",
  },
  {
    title: "Pintu Kaca Tempered",
    description:
      "Pintu kaca tahan dampak dengan keselamatan maksimal untuk pintu masuk utama rumah modern.",
    image: "",
  },
  {
    title: "Jendela Sliding Aluminium",
    description:
      "Jendela slide berkualitas dengan sistem peluncur yang halus dan tahan lama untuk area hunian.",
    image: "",
  },
  {
    title: "Kusen Pintu Minimalis",
    description:
      "Kusen pintu dengan desain line minimalis yang cocok untuk rumah gaya kontemporer.",
    image: "",
  },
  {
    title: "Kanopi Aluminium Hollow",
    description:
      "Kanopi ringan namun kuat dengan desain modern untuk area outdoor yang stylish dan fungsional.",
    image: "",
  },
  {
    title: "Partisi Kaca Geser",
    description:
      "Partisi kaca dengan sistem geser smooth untuk fleksibilitas ruangan yang maksimal.",
    image: "",
  },
];

export { faqs, products };

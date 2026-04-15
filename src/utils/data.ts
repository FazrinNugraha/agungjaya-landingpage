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
      "Solusi hemat ruang yang bisa terbuka lebar sepenuhnya. Frame aluminium hitam dengan jaring bermotif memberikan tampilan industrial-modern yang kini sangat diminati.",
    image: "pintu-lipat.jpg",
  },
  {
    title: "Jendela Jungkit / Awning",
    description:
      "Buka ke atas saat hujan sekalipun tanpa risiko air masuk. Desain grid klasik dua panel memberikan nuansa arsitektur Eropa yang timeless pada fasad rumah Anda.",
    image: "jendela-jungkit.JPEG",
  },
  {
    title: "Sliding Swing 1 Daun",
    description:
      "Pintu yang bisa digeser sekaligus dibuka ayun — dua fungsi dalam satu produk. Kaca motif grid putih menghadirkan keeleganan klasik yang cocok untuk interior rumah modern.",
    image: "sliding-swing-2pintu.JPEG",
  },
  {
    title: "Kitchen Set Aluminium",
    description:
      "Lupakan rayap dan cat mengelupas. Kabinet aluminium hitam glossy ini tidak butuh perawatan khusus — cukup lap, selalu tampak baru seperti hari pertama dipasang.",
    image: "kitchen-set.jpg",
  },
  {
    title: "Lemari Bawah Tangga Custom",
    description:
      "Area segitiga di bawah tangga yang biasanya dibiarkan kosong kini disulap menjadi lemari penyimpanan penuh. Dibuat custom sesuai dimensi ruangan Anda, tidak ada satu ruang pun terbuang.",
    image: "pintu-bawah-tangga.jpeg",
  },
  {
    title: "Sliding Door 4 Daun Ornamen",
    description:
      "Empat panel pintu geser berjejer rapi dengan motif grid putih — saat dibuka sepenuhnya, teras dan ruang tamu menyatu menjadi satu area yang lapang dan penuh cahaya.",
    image: "sliding-door-ornamen.JPEG",
  },
  {
    title: "Sliding Swing 4 Daun",
    description:
      "Sistem empat daun yang bisa digeser dan dibuka lebar penuh — dilengkapi bovenlight di atasnya agar cahaya masuk dari dua arah. Pilihan premium untuk ruang yang butuh fleksibilitas tinggi.",
    image: "sliding-swing-4pintu.jpg",
  },
  {
    title: "Pintu & Jendela Kombinasi",
    description:
      "Satu frame, dua fungsi: jendela lebar kaca bening untuk pemandangan terbuka, pintu kaca buram di sisi untuk privasi. Finishing hitam matte memberi kesan arsitektur kontemporer yang kuat.",
    image: "pintu-jendela.jpg",
  },
  {
    title: "Pintu & Jendela Sliding",
    description:
      "Tiga panel besar yang bergeser senyap — setiap panel kaca motif grid hitam seolah menjadi lukisan bingkai hitam di dinding putih. Cocok untuk ruang yang ingin tampil artistik.",
    image: "pintu-jendelasliding.jpg",
  },
  {
    title: "Pintu Kaca Sandblast Double",
    description:
      "Kaca sandblast dua daun yang menyaring pandangan namun tetap mengalirkan cahaya lembut ke dalam ruangan. Handle bar hitam memanjang di tengah menjadi aksen desain yang menarik.",
    image: "pintu-kacaes.jpg",
  },
  {
    title: "Pintu Sliding Kaca Buram",
    description:
      "Tiga panel kaca buram putih yang bergeser di rel atas — ketika ditutup memberi privasi penuh, ketika dibuka ruangan menyatu dengan sempurna. Ideal sebagai sekat antara ruang tamu dan ruang makan.",
    image: "pintu-partisikaca.jpg",
  },
  {
    title: "Pintu Utama Solid Aluminium",
    description:
      "Kesan pertama yang kuat dimulai dari sini. Panel datar hitam solid tanpa ornamen berlebihan justru menampilkan karakter rumah yang percaya diri — kokoh, tegas, dan bebas perawatan.",
    image: "pintu-utama.jpeg",
  },
  {
    title: "Pintu Double Ornamen Kaca",
    description:
      "Pintu double daun dengan motif grid kaca yang menciptakan permainan cahaya indah di dalam ruangan. Finishing hitam matte elegan tanpa terkesan berat — pilihan tepat untuk pintu belakang atau ruang santai.",
    image: "pintu-double-ornamen.jpeg",
  },
  {
    title: "Jendela Swing 3 Daun",
    description:
      "Tiga daun jendela yang terbuka penuh ke kiri dan kanan — di pagi hari hamparan cahaya dan angin segar langsung membanjiri ruangan. Motif grid menambah dimensi visual pada tampilan fasad.",
    image: "jendela-swing-ornamen.jpeg",
  },
  {
    title: "Pintu Expanda / Kasa",
    description:
      "Angin segar boleh masuk, nyamuk tidak. Jaring bermotif bunga pada frame putih ini bukan sekadar pelindung — tampilannya jauh lebih menarik dari pintu kasa konvensional biasa.",
    image: "pintu-expanda.jpg",
  },
  {
    title: "Sliding Door 2 Daun Coklat",
    description:
      "Frame coklat tembaga yang hangat bertemu kaca bening full tinggi — kombinasi yang tak terduga namun sangat serasi. Membuat ruang terasa lebih tinggi dan bernilai saat sorotan lampu menyentuh permukaannya.",
    image: "sliding-2pintu.jpg",
  },
];

export { faqs, products };

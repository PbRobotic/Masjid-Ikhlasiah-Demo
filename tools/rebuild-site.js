const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");

const nav = [
  ["Beranda", "index.html"],
  ["Sejarah", "Sejarah.html"],
  ["BKM", "Bkm.html"],
  ["Program", "feature.html"],
  ["Galeri", "product.html"],
  ["Keuangan", "store.html"],
  ["Artikel", "blog.html"],
  ["Kontak", "contact.html"],
];

const contact = {
  address: "Jalan Tuamang No.134, Medan, Sumatera Utara",
  phone: "+62 813-6120-1333",
  email: "bkmikhlasiah@gmail.com",
};

const people = [
  ["Ketua BKM", "Djumali"],
  ["Sekretaris BKM", "H. Saprides A.Md"],
  ["Bendahara BKM", "Faisal SE, Ak, CA"],
];

const gallery = [
  ["gbr/06.jpeg", "Masjid Ikhlasiah", "Suasana Masjid Ikhlasiah sebagai pusat ibadah dan kegiatan warga."],
  ["gbr/Galeri1.jpeg", "Kegiatan Mengaji", "Pembinaan bacaan Al-Qur'an untuk anak-anak dan remaja sekitar masjid."],
  ["gbr/Galeri2.jpeg", "Kebersamaan Jamaah", "Kegiatan jamaah yang memperkuat ukhuwah dan kepedulian sosial."],
  ["gbr/Galeri3.jpeg", "Pembinaan Remaja", "Ruang belajar dan berkhidmat bagi generasi muda Masjid Ikhlasiah."],
  ["gbr/05.jpeg", "Kegiatan BKM", "Dokumentasi kegiatan pengurus bersama masyarakat sekitar."],
  ["gbr/04.jpeg", "Pelayanan Umat", "Masjid hadir sebagai tempat ibadah, musyawarah, dan pelayanan sosial."],
];

function titleCase(pageTitle) {
  return pageTitle === "BKM" ? "BKM" : pageTitle;
}

function layout({ file, title, eyebrow, heroTitle, description, body, active = "index.html" }) {
  const links = nav.map(([label, href]) => {
    const current = href === active ? " active" : "";
    return `<a class="nav-link${current}" href="${href}">${label}</a>`;
  }).join("\n                                ");

  return `<!DOCTYPE html>
<html lang="id">

<head>
    <meta charset="utf-8">
    <title>${title} | Masjid Ikhlasiah</title>
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <meta name="description" content="Website resmi Masjid Ikhlasiah dan BKM Ikhlasiah, Jalan Tuamang No.134 Medan. Informasi sejarah, pengurus, program, galeri, keuangan, artikel, dan kontak.">
    <meta name="keywords" content="Masjid Ikhlasiah, BKM Ikhlasiah, masjid Medan, Jalan Tuamang, kegiatan masjid">
    <link href="gbr/Logo1.png" rel="icon">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700&family=Playfair+Display:wght@700;900&display=swap" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet">
    <link href="lib/animate/animate.min.css" rel="stylesheet">
    <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet">
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">
</head>

<body>
    <div id="spinner" class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div class="spinner-border text-primary" role="status" aria-label="Memuat halaman"></div>
    </div>

    <header class="site-header sticky-top bg-white">
        <nav class="navbar navbar-expand-lg navbar-light container py-2">
            <a class="navbar-brand d-flex align-items-center gap-3" href="index.html" aria-label="Masjid Ikhlasiah">
                <img src="gbr/Logo1.png" alt="Logo Masjid Ikhlasiah">
                <span>
                    <strong>Masjid Ikhlasiah</strong>
                    <small>BKM Ikhlasiah</small>
                </span>
            </a>
            <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Buka navigasi">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav ms-auto align-items-lg-center">
                    ${links}
                </div>
            </div>
        </nav>
    </header>

    <main>
        <section class="hero hero-inner">
            <img src="gbr/06.jpeg" alt="Tampak Masjid Ikhlasiah">
            <div class="hero-overlay"></div>
            <div class="container hero-content">
                <p class="eyebrow">${eyebrow}</p>
                <h1>${heroTitle}</h1>
                <p>${description}</p>
                <div class="hero-actions">
                    <a class="btn btn-primary rounded-pill px-4 py-3" href="contact.html"><i class="fa fa-phone-alt me-2"></i>Hubungi BKM</a>
                    <a class="btn btn-light rounded-pill px-4 py-3" href="product.html"><i class="fa fa-images me-2"></i>Lihat Galeri</a>
                </div>
            </div>
        </section>

        ${body}
    </main>

    <footer class="footer bg-dark text-light mt-5">
        <div class="container py-5">
            <div class="row g-4">
                <div class="col-lg-5">
                    <div class="footer-brand d-flex align-items-center gap-3 mb-3">
                        <img src="gbr/Logo1.png" alt="Logo Masjid Ikhlasiah">
                        <div>
                            <h4 class="text-white mb-0">Masjid Ikhlasiah</h4>
                            <span>BKM Ikhlasiah</span>
                        </div>
                    </div>
                    <p class="mb-0">Pusat ibadah, pembinaan, dan pelayanan umat di lingkungan Jalan Tuamang Medan.</p>
                </div>
                <div class="col-lg-4 col-md-6">
                    <h5 class="text-primary mb-3">Kontak</h5>
                    <p class="mb-2"><i class="fa fa-map-marker-alt text-primary me-2"></i>${contact.address}</p>
                    <p class="mb-2"><i class="fa fa-phone-alt text-primary me-2"></i>${contact.phone}</p>
                    <p class="mb-0"><i class="fa fa-envelope text-primary me-2"></i>${contact.email}</p>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h5 class="text-primary mb-3">Halaman</h5>
                    <div class="footer-links">
                        ${nav.slice(0, 6).map(([label, href]) => `<a href="${href}">${label}</a>`).join("\n                        ")}
                    </div>
                </div>
            </div>
        </div>
        <div class="copyright py-3">
            <div class="container d-flex flex-column flex-md-row justify-content-between gap-2">
                <span>&copy; 2026 BKM Masjid Ikhlasiah. Semua hak dilindungi.</span>
                <span>Dikelola untuk informasi dan pelayanan jamaah.</span>
            </div>
        </div>
    </footer>

    <a href="#" class="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top" aria-label="Kembali ke atas"><i class="bi bi-arrow-up"></i></a>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="lib/wow/wow.min.js"></script>
    <script src="lib/easing/easing.min.js"></script>
    <script src="lib/waypoints/waypoints.min.js"></script>
    <script src="lib/owlcarousel/owl.carousel.min.js"></script>
    <script src="js/main.js"></script>
</body>

</html>
`;
}

const sectionTitle = (eyebrow, title, text = "") => `
<div class="section-title text-center mx-auto wow fadeInUp" data-wow-delay="0.1s">
    <p class="fs-5 fw-medium fst-italic text-primary">${eyebrow}</p>
    <h2 class="display-6">${title}</h2>
    ${text ? `<p class="lead mb-0">${text}</p>` : ""}
</div>`;

const imageGrid = `
<div class="row g-3 image-mosaic">
    <div class="col-6">
        <img class="img-fluid w-100 wow fadeIn" data-wow-delay="0.1s" src="gbr/aboutus3.jpeg" alt="Dokumentasi Masjid Ikhlasiah">
        <img class="img-fluid w-75 mt-3 wow fadeIn" data-wow-delay="0.2s" src="gbr/aboutus1.jpg" alt="Dokumen kegiatan BKM">
    </div>
    <div class="col-6 pt-4">
        <img class="img-fluid w-75 mb-3 wow fadeIn" data-wow-delay="0.3s" src="gbr/aboutus2.jpg" alt="Dokumen BKM Ikhlasiah">
        <img class="img-fluid w-100 wow fadeIn" data-wow-delay="0.4s" src="gbr/aboutus4.jpeg" alt="Kegiatan Masjid Ikhlasiah">
    </div>
</div>`;

const cards = (items) => items.map(([icon, title, text]) => `
<div class="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
    <div class="info-card h-100">
        <div class="icon-box"><i class="${icon}"></i></div>
        <h3>${title}</h3>
        <p>${text}</p>
    </div>
</div>`).join("");

const pages = {
  "index.html": layout({
    file: "index.html",
    title: "Beranda",
    eyebrow: "Selamat datang",
    heroTitle: "Masjid Ikhlasiah",
    description: "Website resmi Masjid Ikhlasiah dan BKM Ikhlasiah sebagai ruang informasi kegiatan, pengurus, program wakaf, galeri, dan layanan jamaah.",
    active: "index.html",
    body: `
<section class="container-xxl py-5">
    <div class="container">
        <div class="row g-5 align-items-center">
            <div class="col-lg-6">${imageGrid}</div>
            <div class="col-lg-6 wow fadeIn" data-wow-delay="0.2s">
                <p class="fs-5 fw-medium fst-italic text-primary">BKM Ikhlasiah</p>
                <h2 class="display-6 mb-4">Masjid yang hidup bersama jamaahnya</h2>
                <p>Masjid Ikhlasiah menjadi tempat ibadah, musyawarah, pendidikan Al-Qur'an, dan penguatan kepedulian sosial bagi masyarakat sekitar Jalan Tuamang Medan.</p>
                <div class="row g-3 mt-4">
                    <div class="col-sm-6"><div class="mini-stat"><strong>134</strong><span>Jalan Tuamang</span></div></div>
                    <div class="col-sm-6"><div class="mini-stat"><strong>3</strong><span>Pengurus inti BKM</span></div></div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="container-fluid soft-section py-5">
    <div class="container py-4">
        ${sectionTitle("Layanan Jamaah", "Informasi utama", "Akses cepat untuk mengenal kegiatan dan pelayanan Masjid Ikhlasiah.")}
        <div class="row g-4">
            ${cards([
              ["fa fa-mosque", "Ibadah dan Pembinaan", "Mendukung kegiatan ibadah rutin, pengajian, dan pembinaan anak serta remaja."],
              ["fa fa-hands-helping", "Program Wakaf", "Mengajak jamaah berpartisipasi dalam program kebaikan dan pengembangan fasilitas masjid."],
              ["fa fa-users", "Kepengurusan BKM", "Informasi struktur pengurus agar komunikasi jamaah dengan BKM semakin mudah."]
            ])}
        </div>
    </div>
</section>

<section class="container-xxl py-5">
    <div class="container">
        <div class="row g-5 align-items-center">
            <div class="col-lg-5 wow fadeIn" data-wow-delay="0.1s">
                <img class="img-fluid rounded-media shadow-sm" src="gbr/Menabung.PNG" alt="Program menabung untuk akhirat">
            </div>
            <div class="col-lg-7 wow fadeIn" data-wow-delay="0.2s">
                <p class="fs-5 fw-medium fst-italic text-primary">Program BKM</p>
                <h2 class="display-6 mb-4">Saatnya menabung untuk akhirat</h2>
                <p>BKM Ikhlasiah mengajak kaum muslimin menyisihkan sebagian harta untuk mendukung pembelian tanah di sisi kanan masjid. Program ini diniatkan sebagai amal jariyah dan penguatan fasilitas ibadah jamaah.</p>
                <blockquote class="quote-box">Perumpamaan orang yang menginfakkan hartanya di jalan Allah seperti sebutir biji yang menumbuhkan tujuh tangkai. QS. Al-Baqarah: 261</blockquote>
                <a class="btn btn-primary rounded-pill px-4 py-3" href="feature.html">Lihat Program</a>
            </div>
        </div>
    </div>
</section>

<section class="container-fluid soft-section py-5">
    <div class="container py-4">
        ${sectionTitle("Galeri", "Dokumentasi kegiatan")}
        <div class="owl-carousel product-carousel">
            ${gallery.slice(1, 5).map(([src, title, text]) => `<a href="product.html" class="gallery-card"><img src="${src}" alt="${title}"><div><h3>${title}</h3><p>${text}</p></div></a>`).join("")}
        </div>
    </div>
</section>`
  }),

  "Sejarah.html": layout({
    file: "Sejarah.html",
    title: "Sejarah",
    eyebrow: "Sejarah Masjid",
    heroTitle: "Jejak Ikhlasiah",
    description: "Mengenal Masjid Ikhlasiah sebagai ruang ibadah, kebersamaan, dan pelayanan umat di Jalan Tuamang Medan.",
    active: "Sejarah.html",
    body: `
<section class="container-xxl py-5">
    <div class="container">
        <div class="row g-5 align-items-center">
            <div class="col-lg-6">${imageGrid}</div>
            <div class="col-lg-6">
                <p class="fs-5 fw-medium fst-italic text-primary">Tentang Masjid</p>
                <h2 class="display-6 mb-4">Dibangun oleh niat baik dan dijaga oleh jamaah</h2>
                <p>Masjid Ikhlasiah tumbuh bersama masyarakat sekitar sebagai tempat menunaikan ibadah, belajar Al-Qur'an, mempererat silaturahmi, dan menjalankan kegiatan sosial keagamaan.</p>
                <p>Website ini disiapkan agar informasi tentang sejarah, kegiatan, pengurus, dan program masjid dapat diakses dengan lebih tertib oleh jamaah.</p>
            </div>
        </div>
        <div class="timeline mt-5">
            <div><span>1</span><h3>Tempat Ibadah</h3><p>Masjid menjadi pusat shalat berjamaah dan penguatan akhlak masyarakat.</p></div>
            <div><span>2</span><h3>Pembinaan Umat</h3><p>Kegiatan mengaji dan pembinaan remaja menjadi bagian dari kehidupan masjid.</p></div>
            <div><span>3</span><h3>Pelayanan Sosial</h3><p>BKM mengelola program yang mendekatkan masjid dengan kebutuhan jamaah.</p></div>
        </div>
    </div>
</section>`
  }),

  "Bkm.html": layout({
    file: "Bkm.html",
    title: "BKM",
    eyebrow: "Badan Kenaziran Masjid",
    heroTitle: "Pengurus BKM Ikhlasiah",
    description: "Informasi pengurus inti BKM Ikhlasiah dan peran pelayanan untuk jamaah.",
    active: "Bkm.html",
    body: `
<section class="container-xxl py-5">
    <div class="container">
        ${sectionTitle("Pengurus", "BKM Masjid Ikhlasiah", "Pengurus hadir untuk menjaga tata kelola, kegiatan, dan komunikasi jamaah.")}
        <div class="row g-4">
            ${people.map(([role, name]) => `<div class="col-lg-4 col-md-6"><div class="person-card h-100"><img src="gbr/photoprofile.png" alt="${role}"><div><span>${role}</span><h3>${name}</h3></div></div></div>`).join("")}
        </div>
        <div class="row g-4 mt-4">
            ${cards([
              ["fa fa-clipboard-check", "Administrasi", "Menjaga data, surat, dan dokumentasi kegiatan BKM."],
              ["fa fa-calendar-check", "Kegiatan", "Mengatur agenda ibadah, pengajian, dan kegiatan kemasyarakatan."],
              ["fa fa-balance-scale", "Akuntabilitas", "Mendorong pengelolaan amanah jamaah secara tertib dan terbuka."]
            ])}
        </div>
    </div>
</section>`
  }),

  "feature.html": layout({
    file: "feature.html",
    title: "Program",
    eyebrow: "Program Masjid",
    heroTitle: "Program dan Kegiatan",
    description: "Rangkuman kegiatan ibadah, pendidikan, sosial, wakaf, UPZ, remaja masjid, yayasan, koperasi, dan keuangan.",
    active: "feature.html",
    body: `
<section class="container-xxl py-5">
    <div class="container">
        ${sectionTitle("Bidang Kegiatan", "Program Masjid Ikhlasiah")}
        <div class="row g-4">
            ${cards([
              ["fa fa-book-reader", "Pendidikan Al-Qur'an", "Kegiatan mengaji untuk anak-anak dan remaja di sekitar masjid."],
              ["fa fa-hand-holding-heart", "Nazhir Wakaf", "Pengelolaan informasi wakaf dan ajakan amal jariyah jamaah."],
              ["fa fa-donate", "UPZ", "Penghimpunan dan penyaluran zakat, infak, dan sedekah sesuai amanah."],
              ["fa fa-user-friends", "Remaja Masjid", "Ruang kaderisasi, kepanitiaan, dan kegiatan hari besar Islam."],
              ["fa fa-building", "Yayasan dan Koperasi", "Penguatan kelembagaan untuk mendukung kebutuhan jamaah."],
              ["fa fa-file-invoice-dollar", "Keuangan", "Pencatatan program dan amanah dana jamaah secara lebih rapi."]
            ])}
        </div>
    </div>
</section>
<section class="container-fluid soft-section py-5">
    <div class="container py-4">
        <div class="row g-5 align-items-center">
            <div class="col-lg-5"><img class="img-fluid rounded-media shadow-sm" src="gbr/Menabung02.jpeg" alt="Program wakaf Masjid Ikhlasiah"></div>
            <div class="col-lg-7">
                <p class="fs-5 fw-medium fst-italic text-primary">Wakaf dan Infak</p>
                <h2 class="display-6 mb-4">Menguatkan fasilitas ibadah bersama</h2>
                <p>Program wakaf dan infak diarahkan untuk mendukung kebutuhan pengembangan masjid serta kegiatan kemaslahatan jamaah.</p>
                <a class="btn btn-primary rounded-pill px-4 py-3" href="contact.html">Konfirmasi ke BKM</a>
            </div>
        </div>
    </div>
</section>`
  }),

  "product.html": layout({
    file: "product.html",
    title: "Galeri",
    eyebrow: "Galeri Masjid",
    heroTitle: "Dokumentasi Kegiatan",
    description: "Kumpulan dokumentasi kegiatan Masjid Ikhlasiah dan BKM Ikhlasiah.",
    active: "product.html",
    body: `
<section class="container-xxl py-5">
    <div class="container">
        ${sectionTitle("Galeri", "Kegiatan Masjid Ikhlasiah")}
        <div class="row g-4">
            ${gallery.map(([src, title, text]) => `<div class="col-md-6 col-lg-4"><article class="gallery-tile h-100"><img src="${src}" alt="${title}"><div><h3>${title}</h3><p>${text}</p></div></article></div>`).join("")}
        </div>
    </div>
</section>`
  }),

  "store.html": layout({
    file: "store.html",
    title: "Keuangan",
    eyebrow: "Keuangan dan Amanah",
    heroTitle: "Informasi Keuangan",
    description: "Halaman ringkas untuk program wakaf, infak, sedekah, dan komunikasi amanah dana jamaah.",
    active: "store.html",
    body: `
<section class="container-xxl py-5">
    <div class="container">
        <div class="row g-5 align-items-center">
            <div class="col-lg-5"><img class="img-fluid rounded-media shadow-sm" src="gbr/Menabung.PNG" alt="Ajakan menabung untuk akhirat"></div>
            <div class="col-lg-7">
                <p class="fs-5 fw-medium fst-italic text-primary">Amanah Jamaah</p>
                <h2 class="display-6 mb-4">Dukung program kebaikan Masjid Ikhlasiah</h2>
                <p>BKM Ikhlasiah membuka komunikasi bagi jamaah yang ingin mengetahui program wakaf, infak, sedekah, dan kebutuhan pengembangan masjid.</p>
                <div class="notice-box"><strong>Catatan:</strong> Silakan hubungi pengurus BKM untuk konfirmasi rekening, bukti transfer, dan informasi terbaru.</div>
                <a class="btn btn-primary rounded-pill px-4 py-3 mt-4" href="contact.html">Hubungi Bendahara</a>
            </div>
        </div>
    </div>
</section>`
  }),

  "blog.html": layout({
    file: "blog.html",
    title: "Artikel",
    eyebrow: "Artikel dan Pengumuman",
    heroTitle: "Kabar Masjid",
    description: "Berita singkat, pengumuman, dan catatan kegiatan Masjid Ikhlasiah.",
    active: "blog.html",
    body: `
<section class="container-xxl py-5">
    <div class="container">
        ${sectionTitle("Informasi", "Artikel dan pengumuman")}
        <div class="row g-4">
            ${[
              ["Program Menabung Untuk Akhirat", "Ajakan kepada jamaah untuk mendukung pembelian tanah di sisi kanan masjid sebagai amal jariyah.", "feature.html"],
              ["Kegiatan Mengaji Anak dan Remaja", "Pembinaan bacaan Al-Qur'an menjadi bagian penting dari kegiatan Masjid Ikhlasiah.", "product.html"],
              ["Komunikasi BKM dengan Jamaah", "Website ini menjadi media informasi agar kegiatan, pengurus, dan kontak masjid mudah ditemukan.", "contact.html"]
            ].map(([title, text, href]) => `<div class="col-lg-4 col-md-6"><article class="article-card h-100"><span>Masjid Ikhlasiah</span><h3>${title}</h3><p>${text}</p><a href="${href}">Baca selengkapnya <i class="fa fa-arrow-right ms-1"></i></a></article></div>`).join("")}
        </div>
    </div>
</section>`
  }),

  "testimonial.html": layout({
    file: "testimonial.html",
    title: "Jamaah",
    eyebrow: "Suara Jamaah",
    heroTitle: "Kesan Jamaah",
    description: "Ruang apresiasi terhadap peran Masjid Ikhlasiah bagi lingkungan sekitar.",
    active: "blog.html",
    body: `
<section class="container-xxl py-5">
    <div class="container">
        ${sectionTitle("Jamaah", "Kesan dan harapan")}
        <div class="testimonial-carousel owl-carousel">
            ${[
              ["Masjid Ikhlasiah menjadi tempat yang nyaman untuk beribadah dan berkegiatan bersama keluarga."],
              ["Kegiatan mengaji membantu anak-anak lebih dekat dengan Al-Qur'an dan lingkungan masjid."],
              ["Semoga program pengembangan masjid terus dimudahkan dan memberi manfaat luas."]
            ].map(([text]) => `<div class="testimonial-item"><p>${text}</p><h4>Jamaah Masjid Ikhlasiah</h4></div>`).join("")}
        </div>
    </div>
</section>`
  }),

  "contact.html": layout({
    file: "contact.html",
    title: "Kontak",
    eyebrow: "Kontak BKM",
    heroTitle: "Hubungi Masjid Ikhlasiah",
    description: "Silakan hubungi pengurus BKM untuk informasi kegiatan, wakaf, infak, dan layanan jamaah.",
    active: "contact.html",
    body: `
<section class="container-xxl py-5">
    <div class="container">
        <div class="row g-5">
            <div class="col-lg-5">
                <p class="fs-5 fw-medium fst-italic text-primary">Alamat</p>
                <h2 class="display-6 mb-4">Masjid Ikhlasiah</h2>
                <div class="contact-list">
                    <p><i class="fa fa-map-marker-alt"></i>${contact.address}</p>
                    <p><i class="fa fa-phone-alt"></i><a href="tel:+6281361201333">${contact.phone}</a></p>
                    <p><i class="fa fa-envelope"></i><a href="mailto:${contact.email}">${contact.email}</a></p>
                </div>
                <a class="btn btn-primary rounded-pill px-4 py-3" href="https://www.google.com/maps/search/?api=1&query=Jalan%20Tuamang%20No.134%20Medan" target="_blank" rel="noopener">Buka Peta</a>
            </div>
            <div class="col-lg-7">
                <form class="contact-form" action="mailto:${contact.email}" method="post" enctype="text/plain">
                    <div class="row g-3">
                        <div class="col-md-6"><input class="form-control" name="Nama" type="text" placeholder="Nama" required></div>
                        <div class="col-md-6"><input class="form-control" name="Kontak" type="text" placeholder="Nomor HP / Email" required></div>
                        <div class="col-12"><input class="form-control" name="Subjek" type="text" placeholder="Subjek" required></div>
                        <div class="col-12"><textarea class="form-control" name="Pesan" rows="6" placeholder="Pesan" required></textarea></div>
                        <div class="col-12"><button class="btn btn-primary rounded-pill px-4 py-3" type="submit">Kirim Pesan</button></div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>`
  }),

  "about.html": null,
  "404.html": null,
  "404 copy.html": null,
  "default.php": null
};

pages["about.html"] = layout({
  file: "about.html",
  title: "Tentang",
  eyebrow: "Tentang Kami",
  heroTitle: "Tentang Masjid Ikhlasiah",
  description: "Ringkasan identitas Masjid Ikhlasiah, BKM, dan layanan jamaah.",
  active: "Sejarah.html",
  body: pages["Sejarah.html"].match(/<section[\s\S]*<\/section>/)[0]
});

pages["404.html"] = layout({
  file: "404.html",
  title: "Halaman Tidak Ditemukan",
  eyebrow: "404",
  heroTitle: "Halaman tidak ditemukan",
  description: "Tautan yang Anda buka belum tersedia. Silakan kembali ke halaman utama atau hubungi BKM.",
  active: "index.html",
  body: `<section class="container-xxl py-5 text-center"><div class="container"><h2 class="display-6 mb-3">Maaf, halaman ini belum tersedia.</h2><p class="lead">Gunakan navigasi utama untuk membuka informasi Masjid Ikhlasiah.</p><a class="btn btn-primary rounded-pill px-4 py-3" href="index.html">Kembali ke Beranda</a></div></section>`
});
pages["404 copy.html"] = pages["404.html"];
pages["default.php"] = pages["index.html"];

for (const [file, html] of Object.entries(pages)) {
  fs.writeFileSync(path.join(root, file), html, "utf8");
}


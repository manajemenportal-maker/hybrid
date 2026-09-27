# Listrik Masuk Sawah — Panduan Operasional

Website resmi program Listrik Masuk Sawah: informasi pompa irigasi hybrid, CPCL, rumah pompa, registrasi penerima, garansi, dan layanan purna jual.

## Publik
- Katalog produk dan informasi pompa hybrid 6 inchi.
- Pencarian CPCL serta sebaran titik kelompok tani.
- Registrasi penerima melalui Firebase Authentication, cek garansi, dan tautan Google Maps.
- Unduh flyer ENERSIA melalui tombol pada header dan banner.
- Layanan WhatsApp: 085111033789.

## Pengelola
- Login melalui Firebase Authentication dengan email admin yang sudah didaftarkan.
- Pengelolaan kartu pompa hybrid, tiga pilihan rumah pompa, CPCL, katalog, akun, garansi, dan klaim.
- Ekspor data, backup, dan catatan aktivitas.
- Password admin **tidak** dicantumkan dalam source code. Aktifkan Email/Password di Firebase Authentication.

## Publikasi GitHub Pages
1. Ekstrak ZIP dan unggah **seluruh isinya** ke folder sumber Pages pada repository `hybrid`.
2. Pastikan `index.html`, `app.js`, `styles.css`, `sw.js`, `manifest.webmanifest`, folder `assets`, serta `Flyer_ENERSIA_Pompa_Hybrid_6_Inchi.pdf` berada pada lokasi yang benar.
3. Setelah deployment selesai, refresh halaman agar cache `v26` dimuat. PDF dapat diunduh tanpa login.

## Data dan akses
Versi ini tidak memasukkan penerima atau klaim rekaan pada instalasi baru. Data lama yang telah tersimpan di browser/Firebase **tidak dihapus** otomatis. Sebelum publikasi, periksa kembali daftar CPCL dan klaim yang mungkin berasal dari data awal pada versi terdahulu, lalu hapus melalui dashboard bila bukan data riil.

Status koneksi dan pesan kegagalan layanan tetap ditampilkan bila terjadi gangguan. Tampilan siap publik tidak menggantikan kebutuhan validasi data dan aturan keamanan Firebase sebelum menerima informasi pribadi penerima.

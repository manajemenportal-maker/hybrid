# Listrik Masuk Sawah — Panduan Operasional

Website resmi program Listrik Masuk Sawah: informasi pompa irigasi hybrid, CPCL, rumah pompa, registrasi penerima, garansi, dan layanan purna jual.

## Publik
- Katalog produk dan informasi pompa hybrid 6 inchi.
- Pencarian CPCL serta sebaran titik kelompok tani.
- Registrasi penerima melalui Firebase Authentication, cek garansi, dan tautan Google Maps.
- Unduh flyer ENERSIA melalui satu tombol **Flyer PDF** pada header.
- Layanan WhatsApp: 085111033789.

## Pengelola
- Login melalui Firebase Authentication dengan email admin yang sudah didaftarkan.
- Pengelolaan kartu pompa hybrid, tiga pilihan rumah pompa, CPCL, katalog, akun, garansi, dan klaim.
- Ekspor data, backup, dan catatan aktivitas.
- Password admin **tidak** dicantumkan dalam source code. Aktifkan Email/Password di Firebase Authentication.

## Publikasi GitHub Pages
1. Ekstrak ZIP dan unggah **seluruh isinya** ke folder sumber Pages pada repository `hybrid`.
2. Pastikan `index.html`, `app.js`, `styles.css`, `sw.js`, `manifest.webmanifest`, folder `assets`, serta `Flyer_ENERSIA_Pompa_Hybrid_6_Inchi.pdf` berada pada lokasi yang benar.
3. Setelah deployment selesai, refresh halaman agar cache `v27` dimuat. PDF dapat diunduh tanpa login.

## Data dan akses
Versi ini tidak memasukkan penerima atau klaim rekaan pada instalasi baru. Data lama yang telah tersimpan di browser/Firebase **tidak dihapus** otomatis. Sebelum publikasi, periksa kembali daftar CPCL dan klaim yang mungkin berasal dari data awal pada versi terdahulu, lalu hapus melalui dashboard bila bukan data riil.

Status koneksi dan pesan kegagalan layanan tetap ditampilkan bila terjadi gangguan. Tampilan siap publik tidak menggantikan kebutuhan validasi data dan aturan keamanan Firebase sebelum menerima informasi pribadi penerima.

## Pembaruan v27
Hanya satu tombol unduh flyer di navigasi atas. Banner unduh tambahan dan tautan flyer di hero sudah dihapus. Untuk menampilkan perubahan di GitHub Pages, unggah ulang seluruh isi ZIP ke lokasi sumber Pages yang sama, lalu pastikan commit/deployment berhasil. File PDF berada sejajar dengan `index.html`, bukan di subfolder. Jangan hapus data Firestore untuk memperbarui tampilan.

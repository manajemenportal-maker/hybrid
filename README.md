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
3. Setelah deployment selesai, refresh halaman agar cache `v29` dimuat. PDF dapat diunduh tanpa login.

## Data dan akses
Versi ini tidak memasukkan penerima atau klaim rekaan pada instalasi baru. Data lama yang telah tersimpan di browser/Firebase **tidak dihapus** otomatis. Sebelum publikasi, periksa kembali daftar CPCL dan klaim yang mungkin berasal dari data awal pada versi terdahulu, lalu hapus melalui dashboard bila bukan data riil.

Status koneksi dan pesan kegagalan layanan tetap ditampilkan bila terjadi gangguan. Tampilan siap publik tidak menggantikan kebutuhan validasi data dan aturan keamanan Firebase sebelum menerima informasi pribadi penerima.

## Pembaruan v27
Hanya satu tombol unduh flyer di navigasi atas. Banner unduh tambahan dan tautan flyer di hero sudah dihapus. Untuk menampilkan perubahan di GitHub Pages, unggah ulang seluruh isi ZIP ke lokasi sumber Pages yang sama, lalu pastikan commit/deployment berhasil. File PDF berada sejajar dengan `index.html`, bukan di subfolder. Jangan hapus data Firestore untuk memperbarui tampilan.

## Tampilan mobile v28
Tampilan mobile-first bergaya etalase aplikasi: header dan pencarian ringkas, foto pompa sebagai hero, akses cepat empat layanan, katalog dua kolom, navigasi bawah lima menu aktif pada halaman publik maupun dashboard, panel login seperti bottom sheet, tombol WA aman dari navigasi bawah, PDF flyer satu pintu di header. Tidak menggunakan aset atau identitas Shopee. Cache PWA v28.


## Galeri detail per item (v29)
Admin → Kartu Pompa Hybrid → Detail Saat Kartu Diklik. Setiap 7 item informasi memiliki galeri tersendiri maksimal 5 foto. Pilih foto (JPEG/PNG/WebP/GIF, maksimal 5 MB per foto), isi keterangan posisi/fungsi komponen pada setiap foto baru, kemudian tekan Simpan Perubahan Online. File foto diunggah ke Firebase Storage (`uploads/{uid}/hybrid-detail/...`); URL dan caption tersimpan di Firestore bersama pengaturan kartu. Foto lama dapat dihapus atau keterangannya diedit. Pengunjung melihat foto dan caption di detail kartu, mengetuk foto akan membukanya ukuran penuh. Admin harus masuk dan Firebase Storage Rules mendukung folder `uploads/{uid}/...`.

Catatan keamanan: aturan lama appData/main masih membuka seluruh payload untuk pembaca publik dan memperbolehkan semua akun login mengubah seluruh dokumen. Pisahkan data pribadi dan terapkan otorisasi admin server-side sebelum memakai data CPCL riil.

## Logo KSA di Header
Logo 3D KSA ditambahkan pada header sebelah tulisan Listrik Masuk Sawah. File logo disertakan di assets/ksa-logo-3d.webp.

## Divisi Penjualan (v31)
Halaman publik menampilkan bagian Divisi Penjualan di atas footer. Admin mengelola perusahaan/agen tanpa batas jumlah melalui dashboard > Divisi Penjualan: nama PT, PIC, wilayah, WhatsApp, status tampil, urutan, edit, hapus. Data tersimpan pada settings.salesAgents dan disinkronkan ke Firebase Firestore (appData/main) setelah konfirmasi sukses. Tidak ada perusahaan rekaan bawaan.

## Divisi Penjualan terlihat (v32)
Divisi Penjualan berada di dalam halaman publik sebelum footer, memiliki tombol akses cepat dari beranda dan Ringkasan Admin, serta tetap terlihat walaupun daftar perusahaan masih kosong. CSS, JS, dan cache PWA menggunakan v32. Setelah instalasi perbarui semua isi ZIP ke root Pages; admin harus menambahkan nama perusahaan sebelum kartu nama PT ditampilkan.

## Logo KSA v33
Logo KSA 3D disematkan sebagai data URI langsung di `index.html` untuk mencegah gambar hilang apabila asset terpisah belum terunggah. File `assets/ksa-logo-3d.webp` tetap disertakan. Cache PWA diperbarui ke v33.

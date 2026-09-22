# Listrik Masuk Sawah — PWA Full Functional Prototype

Aplikasi HTML + PWA untuk pengelolaan program Listrik Masuk Sawah dan pompa irigasi hybrid.

## Login demo
Admin:
- admin@listrikmasuksawah.id
- admin123

User penerima:
- penerima@demo.id
- user123

## Fungsi yang aktif
### Publik
- Katalog produk + pencarian
- CPCL dan titik kelompok + filter provinsi/status
- Buka koordinat ke Google Maps
- Cek kode garansi
- Registrasi penerima bantuan
- Login admin/user
- Install PWA + cache offline halaman inti

### Admin
- Ringkasan dashboard
- Tambah, edit, hapus, cari, dan ubah status CPCL
- Export CPCL CSV
- Tambah, edit, upload gambar lokal/URL, sembunyikan dan hapus produk
- Aktivasi/perpanjang garansi dan pembuatan kode unik
- Proses klaim, catatan admin, status klaim, hapus klaim, export klaim CSV
- Buat user, aktif/nonaktif, reset password, hapus user
- Ubah konten website
- Backup seluruh data JSON
- Restore data JSON
- Reset demo
- Audit log

### User / penerima manfaat
- Dashboard bantuan
- Detail unit dan titik lokasi
- Kode/status garansi
- Salin kode dan cetak kartu garansi
- Ajukan klaim + foto
- Lihat status/catatan admin
- Edit profil
- Ganti password

## Menjalankan PWA
PWA/service worker memerlukan HTTP/HTTPS. Dari folder aplikasi jalankan misalnya:

python -m http.server 8080

Kemudian buka http://localhost:8080

## Catatan produksi
Versi ini sudah fungsional sebagai prototype single-browser dan menyimpan data di localStorage. Untuk pemakaian lapangan multi-user sungguhan, pindahkan data dan autentikasi ke backend seperti Firebase Authentication + Firestore + Storage agar data tersinkron antar perangkat dan keamanan login tidak bergantung pada browser lokal.

## Interaksi kartu (V3)
- Kartu Pompa Hybrid dan seluruh produk dapat diklik untuk membuka detail.
- Kartu CPCL dapat diklik untuk melihat penerima, wilayah, unit, serial, status garansi dan titik peta.
- Kartu rumah pompa membuka detail konsep teknis tiap tipe.
- Kartu statistik halaman depan membuka ringkasan data.
- Kartu KPI dashboard admin/user dapat diklik menuju modul terkait.
- Modal detail dapat ditutup dengan tombol X, klik area luar, atau tombol Escape.

## Kartu Pompa Hybrid - Kontrol Admin
Dashboard admin memiliki menu **Kartu Pompa Hybrid** untuk mengendalikan kartu utama pada halaman depan:
- tampil/sembunyikan kartu
- label POMPA / nama HYBRID 6 INCHI
- nama dan daya diesel
- nama dan daya motor listrik
- simbol penghubung/penggerak
- catatan kartu
- warna blok pompa, diesel, dan motor
- URL gambar atau upload gambar lokal
- pilihan visual skematik atau foto
- judul/subjudul detail saat kartu diklik
- detail ukuran pompa, sistem penggerak, mode diesel, mode listrik, perpindahan penggerak, keselamatan, dan perawatan
- preview langsung
- reset ke pengaturan default



## Editor Rumah Pompa
Dashboard admin memiliki menu **Rumah Pompa** untuk mengedit kartu:
- Tipe Terbuka
- Tipe Semi Tertutup
- Tipe Aman / Terkunci

Setiap kartu dapat diubah judul dan deskripsinya, ditampilkan/disembunyikan, diberi foto melalui URL atau upload lokal, dihapus gambarnya, di-reset ke default, serta diedit seluruh detail yang muncul saat kartu diklik.


Moto program default:
- Listrik untuk Sawah, Energi untuk Negeri.


## Deploy Online
Paket ini sudah disiapkan untuk static hosting Vercel:
- `vercel.json` untuk routing dan header PWA
- service worker cache versi v12
- `robots.txt`
- footer prototype/demo sudah dihapus

Catatan: versi ini dapat dipublikasikan online, tetapi data aplikasi masih memakai localStorage per perangkat.
Agar admin dan user dari perangkat berbeda memakai data yang sama, tahap berikutnya adalah menghubungkan backend/database online seperti Firebase Authentication + Firestore + Storage.


## Firebase Online (hybrid-cbb57)
Versi v13 sudah terhubung ke Firebase project `hybrid-cbb57` menggunakan:
- Firebase Authentication (Email/Password)
- Cloud Firestore untuk sinkronisasi data antar perangkat
- Firebase Storage untuk foto/gambar upload admin dan user
- Firebase Analytics
- localStorage hanya sebagai cache/offline fallback

### Aktivasi sekali di Firebase Console
1. Authentication → Sign-in method → aktifkan **Email/Password**.
2. Firestore Database → buat database jika belum ada.
3. Storage → buat bucket jika belum ada.
4. Terapkan `firestore.rules` dan `storage.rules` dari paket ini.

Akun admin lama `admin@listrikmasuksawah.id` dapat dibuat otomatis di Firebase Authentication pada login pertama jika Email/Password sudah aktif dan password lokal masih sesuai. Setelah berhasil masuk, segera ganti password admin.

### Catatan keamanan / skala
Versi ini memakai satu dokumen Firestore untuk mempertahankan kompatibilitas seluruh fitur HTML yang sudah kita bangun. Ini sudah dapat menyinkronkan data antar perangkat, tetapi rules saat ini mengizinkan user yang sudah login untuk menulis dokumen sinkronisasi. Sebelum pemakaian produksi berskala besar, data sebaiknya dipecah menjadi collection `users`, `beneficiaries`, `claims`, `products`, dan `settings` dengan rule per-role yang lebih ketat.

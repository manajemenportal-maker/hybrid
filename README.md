# Listrik Masuk Sawah — PWA Full Functional aplikasi

Aplikasi HTML + PWA untuk pengelolaan program Listrik Masuk Sawah dan pompa irigasi hybrid.

## Login
Admin menggunakan **Firebase Authentication**.

Email admin:
- `kalimajasuryaalam@gmail.com`

Password admin tidak disimpan di source code. Masukkan password secara langsung saat membuat user di Firebase Authentication dan saat login.

User penerima dibuat melalui sistem/Firebase Authentication sesuai akun masing-masing.

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
- Reset data aplikasi
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
Aplikasi sudah terhubung ke Firebase untuk autentikasi dan sinkronisasi data online. Penyimpanan lokal digunakan sebagai cache/fallback.

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
- footer status sementara sudah dihapus

Aplikasi dipersiapkan untuk penggunaan online dengan Firebase; penyimpanan lokal hanya berfungsi sebagai cache/fallback.
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

### Catatan keamanan / skala
Versi ini memakai satu dokumen Firestore untuk mempertahankan kompatibilitas seluruh fitur HTML yang sudah kita bangun. Ini sudah dapat menyinkronkan data antar perangkat, tetapi rules saat ini mengizinkan user yang sudah login untuk menulis dokumen sinkronisasi. Sebelum pemakaian produksi berskala besar, data sebaiknya dipecah menjadi collection `users`, `beneficiaries`, `claims`, `products`, dan `settings` dengan rule per-role yang lebih ketat.


## Admin Firebase Authentication
Admin produksi:
- `kalimajasuryaalam@gmail.com`

Keamanan:
- password tidak berada di `app.js`, HTML, Firestore, localStorage, README, atau file konfigurasi;
- login admin dilakukan dengan `signInWithEmailAndPassword`;
- role admin dikenali berdasarkan email admin produksi setelah Firebase Authentication berhasil.

Setup sekali:
1. Firebase Console → Authentication.
2. Aktifkan provider **Email/Password**.
3. Users → **Add user**.
4. Masukkan email admin di atas.
5. Masukkan password admin yang sudah Anda tentukan.

## Tampilan Latar

- Background pemandangan sawah sudah ditanamkan langsung ke coding (embedded data URI) untuk seluruh halaman.

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


## Serial Number Pompa v34
Form registrasi penerima mewajibkan Serial Number yang tercantum pada pelat unit. Serial dinormalisasi, dicek agar tidak digunakan oleh CPCL berbeda/akun yang sudah aktif, dan disimpan bersama data penerima serta garansi dalam transaksi Firestore. Bila admin sudah memasukkan serial pada CPCL, form menampilkan informasi unit, wilayah, dan tautan peta bila koordinat sudah ada, serta dapat memakai CPCL/wilayah yang sesuai. Untuk unit baru, lokasi administratif diisi pada registrasi; petugas dapat mengambil titik GPS secara opsional dari perangkat saat berada di lokasi unit. Titik CPCL yang sudah dicatat admin dipertahankan. Pencarian publik CPCL bisa memakai nomor seri; dashboard admin, unit penerima, kartu garansi dan ekspor CSV menampilkan nomor seri. Perbaikan nomor seri/penugasan unit dilakukan oleh admin.

Catatan: identitas serial bukan pelacak GPS real-time. Arsitektur database lama masih menyimpan data publik dan pribadi dalam appData/main serta mengizinkan semua akun terautentikasi mengubah payload. Sebelum menerima data riil, pisahkan dokumen publik/pribadi dan tegakkan otorisasi administrator di Security Rules/backend.

Perbaikan sinkronisasi: masuk akun tidak lagi otomatis menimpa Firestore memakai cache browser lama.


## Pemantau Pengunjung v35
Menambahkan counter pengunjung harian, 7 hari, bulanan, tahunan dan grafik tujuh hari di halaman utama. Admin dapat mengatur posisi kiri/kanan, judul, visibilitas, dan koreksi angka tampilan dari menu Pemantau Pengunjung. Statistik otomatis disimpan di collection Firestore `visitorDaily`; deploy `firestore.rules` v35 agar pencatatan publik berfungsi.

## v36 - Pemantau Pengunjung Compact
Widget statistik pengunjung diperkecil dan dipindahkan setelah menu akses cepat agar tidak mengganggu menu utama. Angka harian, mingguan, bulanan, tahunan dan grafik 7 hari tetap ditampilkan.

## v37 - Statistik Pengunjung Khusus Admin
Statistik pengunjung tidak lagi tampil di halaman publik. Penghitungan tetap berjalan dan data Harian, Mingguan, Bulanan, Tahunan serta grafik 7 hari hanya tersedia melalui Dashboard Admin > Pemantau Pengunjung.

## v38 - Perbaikan Penyimpanan Rumah Pompa
- Foto rumah pompa diunggah langsung ke Firebase Storage, tidak disimpan sebagai Base64 di dokumen Firestore.
- Form menampilkan status proses, berhasil, atau gagal.
- Perubahan kartu dikirim langsung ke Firestore dan baru ditampilkan sebagai tersimpan setelah berhasil.
- Jika penyimpanan Firestore gagal, foto baru dibersihkan dan perubahan lokal dikembalikan.
- Penghapusan gambar dan pemulihan kartu juga menunggu penyimpanan online berhasil.


## v39 - Perbaikan Simpan Rumah Pompa yang Menggantung
- Unggah foto menampilkan persentase progres dan otomatis dibatalkan jika tidak selesai dalam 45 detik.
- Simpan data kartu memiliki batas waktu 30 detik, sehingga tombol tidak terus berada pada status menyimpan tanpa batas.
- Pesan kesalahan lebih spesifik untuk Storage Rules, sesi login, bucket Storage yang belum tersedia, koneksi, dan Firestore.
- Versi cache PWA dinaikkan ke v39 agar browser mengambil kode terbaru.

Catatan: batas waktu membuat aplikasi tidak menggantung, tetapi tidak otomatis mengaktifkan Firebase Storage atau menerbitkan Rules. Jika muncul pesan tentang bucket/rules, aktifkan Firebase Storage pada project `hybrid-cbb57` dan terbitkan file `storage.rules` dari paket ini melalui Firebase Console atau Firebase CLI.


## v40 - Simpan Foto Rumah Pompa Tanpa Firebase Storage
- Foto rumah pompa dikompres otomatis menjadi JPEG ringan (maksimal sekitar 450 KB) dan disimpan pada dokumen terpisah di Cloud Firestore.
- Menu Rumah Pompa tidak lagi memanggil Firebase Storage, sehingga tidak memerlukan bucket Storage untuk menyimpan foto pada menu ini.
- `firestore.rules` kini menambahkan koleksi `houseImages`: foto dapat dibaca publik, sedangkan penulisan/penghapusan dibatasi ke email admin `kalimajasuryaalam@gmail.com`.
- Perlu menerbitkan `firestore.rules` versi 40 melalui Firebase Console > Firestore Database > Rules. Tidak perlu menerbitkan Storage Rules untuk fitur foto Rumah Pompa.
- Kuota Firestore Spark tetap berlaku; hindari foto berukuran besar dan perhatikan kuota gratis project.


## Versi 41 — upload foto produk tanpa Firebase Storage
- Menu Produk kini menampilkan pratinjau dan status setelah foto dipilih.
- Foto produk dikompres ke JPEG ringan dan disimpan pada koleksi Firestore `productImages`; Firebase Storage tidak dipakai untuk unggahan gambar produk.
- Foto disimpan terpisah dari dokumen `appData/main` untuk menghindari batas ukuran dokumen utama.
- Terbitkan isi `firestore.rules` versi ini di Firebase Console agar admin dapat membuat/mengubah/menghapus dokumen `productImages`.
- Batas foto sumber 10 MB; hasil kompresi dibatasi sekitar 450.000 karakter. Penggunaan tetap tunduk pada kuota gratis Firestore.

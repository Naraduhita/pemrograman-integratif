# Penggunaan GRPC dalam aplikasi ShortLink
gRPC adalah singkatan dari "Remote Procedure Call (RPC) yang dioptimalkan dengan Google Protocol Buffers". Berfungsi untuk memudahkan komunikasi antara aplikasi yang berjalan di sistem yang berbeda dan ditulis dengan bahasa pemrograman yang berbeda pula. 

**Pembahasan:**
- Membuat file shortlink.proto yang berfungsi untuk mendefinisikan service dan pesan yang akan digunakan pada aplikasi. Berisikan beberapa pesan atau message yang digunakan untuk mengirim dan menerima data antara client dan server sehingga antara server dan client dapat menggunakan bahasa pemrograman yang berbeda.
- Membuat file server.js yang berfungsi menerima permintaan dari client, mengeksekusi kode implementasi service, dan mengirimkan balasan ke client. File ini akan menggunakan definisi service dan pesan dari file protobuf untuk mengeksekusi kode service.
- Membuat file client.js berfungsi membuat koneksi ke server dan mengirimkan permintaan ke server. File ini juga akan menggunakan definisi service dan pesan dari file protobuf untuk membuat koneksi dan mengirimkan permintaan.
- Membuat file run.js berfungsi menjalankan program dan input data.
- Menggunakan database `MySql` yang bernama `shortlink`dan tabel `links` yang berisi 5 kolom yang terdiri dari `id`, `title`, `destination`, `shortlink`, dan `count`.

**Cara Menjalankan:**
- Menjalankan server dengan `npm start`
- Menjalankan client dengan `npm run dev`

**Hasil:**
- Database

- Terminal


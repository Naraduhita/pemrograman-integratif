# Penggunaan GRPC dalam aplikasi ShortLink
gRPC adalah singkatan dari "Remote Procedure Call (RPC) yang dioptimalkan dengan Google Protocol Buffers". Berfungsi untuk memudahkan komunikasi antara aplikasi yang berjalan di sistem yang berbeda dan ditulis dengan bahasa pemrograman yang berbeda pula. 

**Pembahasan:**
- Membuat file shortlink.proto yang berfungsi untuk mendefinisikan service dan pesan yang akan digunakan pada aplikasi. Berisikan beberapa pesan atau message yang digunakan untuk mengirim dan menerima data antara client dan server sehingga antara server dan client dapat menggunakan bahasa pemrograman yang berbeda.
- Membuat file server.js yang berfungsi menerima permintaan dari client, mengeksekusi kode implementasi service, dan mengirimkan balasan ke client. File ini akan menggunakan definisi service dan pesan dari file protobuf untuk mengeksekusi kode service.
- Membuat file client.js berfungsi membuat koneksi ke server dan mengirimkan permintaan ke server. File ini juga akan menggunakan definisi service dan pesan dari file protobuf untuk membuat koneksi dan mengirimkan permintaan.
- Membuat file run.js berfungsi menjalankan program dan input data.
- Menggunakan database `MySql` yang bernama `shortlink`dan tabel `links` yang berisi 5 kolom yang terdiri dari `id`, `title`, `destination`, `shortlink`, dan `count`.
- Untuk tampilan sudah ada dan jalan namun masih menggunakan express dan belum disambungkan dengan grpc.
**Cara Menjalankan:**
- Menjalankan server dengan `npm start`
- Menjalankan client dengan `node run`

**Hasil:**
- Tampilan terminal ketika program dijalankan 
![WhatsApp Image 2023-04-04 at 04 14 32](https://user-images.githubusercontent.com/102397053/229630611-3fde387f-7d9c-4fb5-a11f-a5978026683d.jpg)
- Tampilan database setelah program dijalankan
![WhatsApp Image 2023-04-04 at 04 15 59](https://user-images.githubusercontent.com/102397053/229631542-6b8f0cd3-8b3d-458e-91b7-65e0b084eade.jpg)
- Tampilan UI
![WhatsApp Image 2023-04-04 at 04 19 34](https://user-images.githubusercontent.com/102397053/229630628-b75b83d6-3481-43f4-a326-60b14e656335.jpg)




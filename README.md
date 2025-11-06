# TUGAS UTS PEMOGRAMAN WEB 
# Nama: Sheila Antica Oktaviani
# Kelas: TI.24.A1
# NIM: 312410002
# 📚 Toko Buku Online

Proyek ini merupakan **website toko buku sederhana** yang dibuat menggunakan **HTML, CSS, dan JavaScript**.
Website ini memungkinkan pengguna untuk login, melihat katalog buku, menambah pesanan, serta melakukan pelacakan pengiriman.

---

---

## 👤 Akun yang Tersedia

| Role  | Email                                   | Password | Nama         |
| ----- | --------------------------------------- | -------- | ------------ |
| Admin | [siti@gmail.com](mailto:siti@gmail.com) | siti123  | Siti Marlina |
| User  | [agus@gmail.com](mailto:agus@gmail.com) | agus123  | Agus Pranoto |

---

# Tampilan Halaman

# 1. Halaman Login

Menampilkan form untuk masuk ke akun Admin atau User.
Halaman Login adalah halaman pertama yang digunakan pengguna untuk masuk ke sistem atau aplikasi. Penjelasan fungsi dan isinya: 
Berisi form login yang memiliki kolom:
1. Email atau username: untuk mengidentifikasi pengguna.
2. Kata sandi (password): untuk keamanan.
3. Ada tombol “Masuk” untuk mengirim data login.
4. Jika pengguna salah memasukkan kata sandi → muncul pesan error seperti “Kata sandi salah”.
5. Jika berhasil → diarahkan ke halaman dashboard.
6. Tujuan utama halaman login adalah autentikasi (memastikan hanya pengguna yang sah yang bisa masuk).
```html
<script>
const users = [
  { email: "siti@gmail.com", password: "siti123", name: "Siti Marlina", role: "Admin" },
  { email: "agus@gmail.com", password: "agus123", name: "Agus Pranoto", role: "User" }
];

function loginUser() {
  const email = document.getElementById("email").value.trim().toLowerCase();
  const password = document.getElementById("password").value;
  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    localStorage.setItem("currentUser", JSON.stringify(user));
    alert(`Login berhasil! Selamat datang, ${user.name}.`);
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("error").textContent = "Email atau kata sandi salah!";
  }
}
</script>
```
## Hasil Tampilan Login
<img width="959" height="503" alt="image" src="https://github.com/user-attachments/assets/f236b53e-5061-42b2-825b-6659da07c7d9" />
---

# 2. Dashboard
Menampilkan pesan selamat datang dan ringkasan data toko buku.
Halaman Dashboard adalah halaman utama setelah pengguna berhasil login.
Penjelasan fungsi dan isinya:
- Menampilkan sambutan atau informasi pengguna, misalnya: “Selamat datang, Rina Marlina”.
Biasanya berisi ringkasan informasi penting, seperti:
- Jumlah pesanan
- Status transaksi terakhir
- Menu navigasi ke halaman lain (Katalog, Tracking, Checkout)
- Dashboard berfungsi sebagai pusat kontrol tempat pengguna dapat mengakses fitur lain dari sistem.
## Tampilan Dashboard:

<img width="956" height="503" alt="image" src="https://github.com/user-attachments/assets/2ac52c29-06da-4fd4-97f2-79295beab1a4" />


---

# 3. Katalog Buku
Berisi daftar buku beserta stok dan harga. Pengguna dapat menambahkan buku ke pesanan.
Halaman Katalog adalah halaman tempat pengguna melihat dan memilih produk yang tersedia.
## Tampilan data Katalog Buku:
<img width="956" height="497" alt="image" src="https://github.com/user-attachments/assets/c74e3337-3ddd-439f-841a-d30cd1aa9117" />


---

# 4. Checkout
Pengguna mengisi data pemesanan seperti nama, alamat, metode pembayaran, dan ekspedisi.
alaman Checkout adalah halaman proses akhir sebelum pembelian dikonfirmasi.
Halaman ini digunakan oleh pembeli untuk menyelesaikan proses pemesanan buku yang sudah mereka pilih dari halaman katalog.
Di halaman ini, pengguna mengisi data pribadi dan memilih metode pengiriman serta pembayaran agar pesanan bisa diproses.
## Bagian “Buku yang Dipesan”
Berfungsi untuk menampilkan daftar buku yang telah ditambahkan oleh pengguna dari halaman katalog.
Tabel di bagian ini memiliki beberapa kolom, yaitu:
Kolom	Keterangan Judul Buku	Menunjukkan nama buku yang dipesan.
Jumlah	Menampilkan berapa banyak eksemplar buku yang dibeli.
Harga Satuan	Menampilkan harga satuan setiap buku.
Subtotal	Menunjukkan total harga per jenis buku (harga × jumlah).
Aksi	Biasanya berisi tombol untuk menghapus buku dari pesanan jika pengguna ingin membatalkannya.
Di bagian bawah tabel terdapat tulisan “Total: Rp 0”, yang akan berubah otomatis sesuai jumlah total harga pesanan pengguna.
## Bagian “Data Pemesanan”
Ini adalah formulir yang harus diisi oleh pengguna sebelum melakukan konfirmasi pesanan. Tujuannya agar sistem mengetahui detail penerima dan cara pengirimannya.
Terdiri dari beberapa kolom:
1. Nama Pemesan
2. Pengguna menuliskan nama lengkap yang akan digunakan untuk pengiriman pesanan.
3. Alamat Lengkap
4. Tempat tujuan pengiriman buku (misalnya: jalan, nomor rumah, kelurahan, kota, dan kode pos).
## Metode Pembayaran
1. Pengguna bisa memilih cara pembayaran, seperti:
2. COD (Bayar di tempat)
3. Transfer Bank
4. E-wallet (contoh: Dana, OVO)
## Ekspedisi
Pilihan jasa pengiriman buku, misalnya:
1. J&T
2.SiCepat
3. Pos Indonesia
## Tombol “Konfirmasi Pemesanan”
Setelah pengguna mengisi semua data, tombol ini digunakan untuk mengirimkan pesanan. Ketika diklik, sistem akan memproses data dan menampilkan notifikasi atau halaman konfirmasi bahwa pemesanan berhasil dilakukan. Setelah berhasil, data pesanan akan tersimpan dan bisa dicek melalui halaman Tracking Pengiriman. Setelah semua lengkap, ada tombol “Bayar” atau “Konfirmasi Pesanan”.
Halaman ini berfungsi untuk memvalidasi detail pembelian sebelum transaksi dilakukan.
## Tampilan Checkout: 
<img width="959" height="503" alt="image" src="https://github.com/user-attachments/assets/5f92cdf1-0eb0-4761-93c3-28011ec15621" />

---

# 5. Tracking Pengiriman

Halaman untuk mengecek status pengiriman berdasarkan **Nomor Delivery Order (DO)**.

## Contoh Tampilan Tracking Pengiriman:
<img width="959" height="500" alt="image" src="https://github.com/user-attachments/assets/bbf748d9-b5b1-4ffc-86b8-e92bc2861829" />

---
---

## 🧩 Teknologi yang Digunakan

* HTML5
* CSS3
* JavaScript (DOM, LocalStorage)

---




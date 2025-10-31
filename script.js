// 1. Dapatkan elemen tombol dari HTML menggunakan ID
const tombol = document.getElementById('tombolUbahWarna');

// 2. Dapatkan elemen body (latar belakang)
const body = document.body;

// 3. Definisikan array/daftar warna yang menarik
const daftarWarna = [
    '#ff5733', // Merah Oranye
    '#33ff57', // Hijau Cerah
    '#3357ff', // Biru Cerah
    '#ff33f6', // Ungu Magenta
    '#33fff3', // Cyan
    '#f3ff33', // Kuning Lemon
    '#f0f0f0'  // Abu-abu muda (kembali ke default)
];

let indeksWarna = 0;

// 4. Tambahkan event listener (pendengar kejadian) saat tombol diklik
tombol.addEventListener('click', function() {
    // Ubah warna latar belakang body
    body.style.backgroundColor = daftarWarna[indeksWarna];
    
    // Perbarui indeks untuk warna berikutnya
    indeksWarna = (indeksWarna + 1) % daftarWarna.length; // Ini akan mengulang dari awal setelah warna terakhir
    
    // Opsional: Ubah warna teks tombol agar kontras
    if (body.style.backgroundColor !== 'rgb(240, 240, 240)') { // Jika warna tidak default
        tombol.style.backgroundColor = '#212529'; // Tombol menjadi lebih gelap
    } else {
        tombol.style.backgroundColor = '#007bff'; // Tombol kembali ke biru default
    }
});

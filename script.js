// Dapatkan elemen-elemen dari HTML
const inputTugas = document.getElementById('inputTugas');
const tombolTambah = document.getElementById('tombolTambah');
const daftarTugas = document.getElementById('daftarTugas');

// Tambahkan event listener untuk tombol "Tambah"
tombolTambah.addEventListener('click', tambahTugas);

// Tambahkan event listener untuk menekan tombol Enter pada input
inputTugas.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        tambahTugas();
    }
});

function tambahTugas() {
    const teksTugas = inputTugas.value.trim();

    // Pastikan input tidak kosong
    if (teksTugas === "") {
        alert("Mohon masukkan tugas terlebih dahulu!");
        return;
    }

    // 1. Buat elemen <li> baru
    const itemTugas = document.createElement('li');
    itemTugas.innerHTML = `
        <span>${teksTugas}</span>
        <button class="tombolHapus">Hapus</button>
    `;

    // 2. Tambahkan event listener untuk menandai selesai (klik pada item)
    itemTugas.addEventListener('click', function(e) {
        // Hanya toggle kelas jika yang diklik BUKAN tombol hapus
        if (e.target.tagName !== 'BUTTON') {
            itemTugas.classList.toggle('selesai');
        }
    });

    // 3. Tambahkan event listener untuk tombol "Hapus"
    const tombolHapus = itemTugas.querySelector('.tombolHapus');
    tombolHapus.addEventListener('click', function() {
        daftarTugas.removeChild(itemTugas);
    });

    // 4. Masukkan item tugas ke dalam daftar
    daftarTugas.appendChild(itemTugas);

    // 5. Bersihkan input setelah ditambahkan
    inputTugas.value = '';
}

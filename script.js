// Dapatkan semua tombol dengan kelas 'ripple-button'
const buttons = document.querySelectorAll('.ripple-button');

buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        // 1. Hapus elemen gelombang yang mungkin masih ada
        const existingRipple = this.querySelector('.ripple-span');
        if (existingRipple) {
            existingRipple.remove();
        }

        // 2. Hitung posisi klik relatif terhadap tombol
        const rect = this.getBoundingClientRect(); // Posisi tombol
        const x = e.clientX - rect.left; // Posisi X relatif terhadap tombol
        const y = e.clientY - rect.top; // Posisi Y relatif terhadap tombol

        // 3. Buat elemen <span> baru untuk efek gelombang
        const ripple = document.createElement('span');
        ripple.classList.add('ripple-span');

        // 4. Hitung ukuran gelombang (sebesar dimensi terpanjang tombol)
        const size = Math.max(rect.width, rect.height);
        
        // Atur ukuran dan posisi gelombang
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = (x - size / 2) + 'px'; // Posisikan di tengah klik
        ripple.style.top = (y - size / 2) + 'px';  // Posisikan di tengah klik

        // 5. Tambahkan elemen gelombang ke tombol
        this.appendChild(ripple);

        // Opsional: Hapus elemen gelombang setelah animasi selesai
        ripple.addEventListener('animationend', () => {
            ripple.remove();
        });
    });
});

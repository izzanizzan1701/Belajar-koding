// Variabel Global
let secretNumber;
let attemptsLeft;
const maxAttempts = 10;

// Ambil elemen DOM
const guessInput = document.getElementById('guessInput');
const messageDisplay = document.getElementById('message');
const attemptsDisplay = document.getElementById('attempts');
const resetButton = document.getElementById('resetButton');
const guessButton = document.querySelector('.input-section button');

// Fungsi untuk memulai atau mereset permainan
function resetGame() {
    // 1. Pilih angka acak antara 1 dan 100
    secretNumber = Math.floor(Math.random() * 100) + 1;
    // 2. Set ulang kesempatan
    attemptsLeft = maxAttempts;

    // 3. Update tampilan
    attemptsDisplay.textContent = `Kesempatan: ${attemptsLeft}`;
    messageDisplay.textContent = 'Game baru dimulai! Masukkan tebakan Anda.';
    messageDisplay.style.color = '#555';

    // 4. Reset input dan tombol
    guessInput.value = '';
    guessInput.disabled = false;
    guessButton.disabled = false;
    resetButton.style.display = 'none';

    console.log(`Angka Rahasia (untuk debugging): ${secretNumber}`);
}

// Fungsi untuk mengecek tebakan
function checkGuess() {
    const userGuess = parseInt(guessInput.value);

    // Validasi input
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        messageDisplay.textContent = 'Tolong masukkan angka valid antara 1 dan 100.';
        messageDisplay.style.color = 'orange';
        return;
    }

    // Kurangi kesempatan
    attemptsLeft--;
    attemptsDisplay.textContent = `Kesempatan: ${attemptsLeft}`;

    let message = '';
    let color = '';

    if (userGuess === secretNumber) {
        // KONDISI MENANG
        message = `🎉 SELAMAT! Anda benar! Angka rahasia adalah ${secretNumber}.`;
        color = 'green';
        endGame(true);
    } else if (attemptsLeft === 0) {
        // KONDISI KALAH
        message = `❌ GAGAL! Kesempatan habis. Angka rahasia adalah ${secretNumber}.`;
        color = 'red';
        endGame(false);
    } else if (userGuess < secretNumber) {
        // Tebakan terlalu rendah
        message = 'Terlalu rendah. Coba lagi!';
        color = 'blue';
    } else {
        // Tebakan terlalu tinggi
        message = 'Terlalu tinggi. Coba lagi!';
        color = 'purple';
    }
    
    // Tampilkan pesan
    messageDisplay.textContent = message;
    messageDisplay.style.color = color;

    // Bersihkan input setelah tebakan
    guessInput.value = '';
}

// Fungsi untuk mengakhiri permainan (Menang/Kalah)
function endGame(isWinner) {
    guessInput.disabled = true; // Nonaktifkan input
    guessButton.disabled = true; // Nonaktifkan tombol tebak
    resetButton.style.display = 'block'; // Tampilkan tombol Mulai Ulang
}

// Inisialisasi Game saat halaman dimuat
resetGame();

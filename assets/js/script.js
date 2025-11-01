// Program untuk menghitung luas segitiga dengan input alas dan tinggi dari pengguna
function hitungLuasSegitiga() {
    let alas = parseFloat(prompt("Masukkan alas segitiga:"));
    let tinggi = parseFloat(prompt("Masukkan tinggi segitiga:"));
    if (isNaN(alas) || isNaN(tinggi)) {
        alert("Input harus berupa angka!");
        return;
    }
    let luas = 0.5 * alas * tinggi;
    document.getElementById("hasilSegitiga").innerText = "Luas Segitiga: " + luas;
}

// Program yang menampilkan bilangan ganjil dari 1 sampai 20
function tampilkanBilanganGanjil() {
    let ganjil = [];
    for (let i = 1; i <= 20; i++) {
        if (i % 2 !== 0) {
            ganjil.push(i);
        }
    }
    console.log("Bilangan ganjil dari 1 sampai 20: " + ganjil.join(", "));
    alert("Bilangan ganjil dari 1 sampai 20: " + ganjil.join(", "));
}

// Tombol yang ketika diklik akan mengubah warna background halaman dengan warna beragam
function ubahWarnaBackground() {
    const colors = ["lightblue", "lightgreen", "lightcoral", "lightyellow", "lightpink", "lightcyan"];
    const currentColor = document.body.style.backgroundColor;
    let nextColorIndex = (colors.indexOf(currentColor) + 1) % colors.length;
    document.body.style.backgroundColor = colors[nextColorIndex];
}

// Panggil fungsi saat halaman dimuat
window.onload = function() {
    console.log("Script loaded");
};

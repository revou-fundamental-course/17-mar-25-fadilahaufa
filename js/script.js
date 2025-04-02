document.addEventListener("DOMContentLoaded", function() {
    // tombol pilihan bangun datar
    document.getElementById('persegi-p').addEventListener('click', function(event) {
        event.preventDefault(); // mencegah halaman refresh

        console.log("Tombol Persegi Panjang Diklik!"); // debugging

        // mengubah gambar
        let gambar = document.getElementById('gambar');
        if (gambar) {
            gambar.src = 'assets/p.panjang.jpg?nocache=' + new Date().getTime(); // menghindari cache
            console.log("Gambar diubah menjadi persegi panjang");
        } else {
            console.error("Gambar tidak ditemukan!");
        }
        
        // mengubah tampilan input
        document.getElementById('b-persegi').style.display = 'none';
        document.getElementById('b-panjang').style.display = 'inline';
    });

    // Validasi Input & Hitung Luas Persegi
    document.getElementById("hitung").addEventListener("click", function() {
        let  sisiluas = document.getElementById("sisiluas").value;
        if (sisiluas == "") {
            alert("Nilai tidak boleh kosong!");
        } else {
            let luas = sisiluas * sisiluas;
            alert(`Luas Persegi: ${luas}`);
        }
    });

    dokument.getElementById(hitung)
});

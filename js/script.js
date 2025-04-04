document.addEventListener("DOMContentLoaded", function() {
    // tombol pilihan bangun datar
    document.getElementById('persegi-p').addEventListener('click', function(event) {
        event.preventDefault(); // mencegah halaman refresh

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

    // validasi input & hitung luas persegi
    document.getElementById("hitung").addEventListener("click", function() {
        const  sisiluas = document.getElementById("sisiluas").value;
        if (sisiluas == "") {
            alert("Nilai tidak boleh kosong!");
        }else if (sisiluas <= 0 ) {
            alert("Nilai tidak boleh kurang dari 1!");
        }else {
            const luas = sisiluas * sisiluas;
            alert(`Luas Persegi: ${luas}`);
        }
    });

    //validasi input & hitung keliling persegi 
    document.getElementById("hitung2").addEventListener("click", function(){
        const sisikeliling = document.getElementById("sisikeliling").value;
        if (sisikeliling == "") {
            alert("Nilai tidak boleh kosong!");
        }else if (sisikeliling <= 0) {
            alert("Nilai tidak boleh kurang dari 1!");
        }else{
            const keliling = 4 * sisikeliling;
            alert(`Keliing Persegi: ${keliling}`)
        }
    })

    document.getElementById("hitung3").addEventListener("click", function(){
        const panjangluas = document.getElementById("panjangluas").value;
        const lebarluas = document.getElementById("lebarluas").value;
        if(panjangluas == "" && lebarluas == ""){
            alert("Nilai panjang dan lebar tidak boleh kosong!");
        }else if (panjangluas == ""){
            alert("Nilai panjang tidak boleh kosong!");
        }else if (lebarluas == ""){
            alert("Nilai panjang tidak boleh kosong!");
        }else if (panjangluas <=0 && lebarluas <=0){
            alert(`Nilai panjang dan lebar tidak boleh 0 atau kurang dari 0`);
        }else if (panjangluas <= 0){
            alert("Nilai panjang tidak boleh 0 atau kurang dari 0");
        }else if (lebarluas <= 0){
            alert("Nilai lebar tidak boleh 0 atau kurang dari 0");
        }else{
            const luaspanjang = parseFloat(panjangluas) * parseFloat(parlebarluas);
            alert(`Luas persegi panjang adalah ${luaspanjang}`);
        }
        
    })
    document.getElementById("hitung4").addEventListener("click", function(){
        const panjangkeliling = document.getElementById("panjangkeliling").value;
        const lebarkeliling = document.getElementById("lebarkeliling").value;
        if(panjangkeliling == "" && lebarkeliling == ""){
            alert("Nilai panjang dan lebar tidak boleh kosong!");
        }else if (panjangkeliling == ""){
            alert("Nilai panjang tidak boleh kosong!");
        }else if (lebarkeliling == ""){
            alert("Nilai panjang tidak boleh kosong!");
        }else if (panjangkeliling <= 0 && lebarkeliling <= 0){
            alert(`Nilai panjang dan lebar tidak boleh 0 atau kurang dari 0`);
        }else if (panjangkeliling <= 0){
            alert("Nilai panjang tidak boleh 0 atau kurang dari 0");
        }else if (lebarkeliling <= 0){
            alert("Nilai lebar tidak boleh 0 atau kurang dari 0");
        }else{
            const kelilingpanjang = 2 * (parseFloat(panjangkeliling) + parseFloat(lebarkeliling));
            alert(`Keliling persegi panjang adalah ${kelilingpanjang}`);
        }

    })
});
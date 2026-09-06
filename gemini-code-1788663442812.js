document.addEventListener("DOMContentLoaded", function() {
    const formAnggota = document.getElementById("formTambahAnggota");

    if (formAnggota) {
        formAnggota.addEventListener("submit", function(e) {
            e.preventDefault();

            // Mengambil data dari form input website Anda
            const dataAnggota = {
                nama: document.getElementById("nama").value,
                alamat: document.getElementById("alamat").value,
                luasLahan: document.getElementById("luas_lahan").value,
                komoditi: document.getElementById("komoditi").value,
                status: document.getElementById("status").value
            };

            // URL Web App Google Script Anda
            const urlWebapp = "https://script.google.com/macros/s/AKfycbzjjdeDyI6fO-ZEofIDzIZenUcyCB0j44VIbEq7rMZQO7OwccDumuh9HY_l90zzUF5Q/exec";

            fetch(urlWebapp, {
                method: "POST",
                mode: "no-cors",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(dataAnggota)
            })
            .then(() => {
                alert("Data anggota berhasil disimpan!");
                formAnggota.reset();
                location.reload(); // Refresh halaman otomatis agar data termuat
            })
            .catch(error => {
                console.error("Gagal:", error);
                alert("Terjadi kesalahan saat menyimpan data.");
            });
        });
    }
});
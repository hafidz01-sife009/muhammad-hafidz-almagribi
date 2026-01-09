// Fungsi utama untuk menangani simpan transaksi
document.getElementById('btn_simpan').onclick = function() {
    // Mengambil elemen input
    const inputNama = document.getElementById('nama_item');
    const inputJumlah = document.getElementById('jumlah_item');
    const inputKategori = document.getElementById('kategori_item');

    // Mengambil nilai (value) dari input
    const nama = inputNama.value;
    const jumlah = inputJumlah.value;
    const kategori = inputKategori.value;

    // Validasi input: Pastikan semua kolom terisi
    if (nama && jumlah && kategori) {
        const tbody = document.getElementById('tabel_body');
        
        // Membuat baris baru di dalam tabel
        const row = tbody.insertRow();
        
        // Mengisi baris dengan kolom (cells)
        row.innerHTML = `
            <td>${nama}</td>
            <td>${jumlah}</td>
            <td>${kategori}</td>
            <td>
                <button onclick="hapusData(this)" style="color:red; cursor:pointer; border:none; background:none;">Hapus</button>
            </td>
        `;

        // Mengosongkan form kembali setelah berhasil disimpan
        inputNama.value = "";
        inputJumlah.value = "";
        inputKategori.value = "";
        
        // Opsional: Beri notifikasi
        console.log("Data berhasil ditambahkan: " + nama);
    } else {
        alert("Mohon isi semua data!");
    }
};

// Fungsi untuk menghapus baris tabel
function hapusData(button) {
    // Menghapus baris (tr) tempat tombol ini berada
    const confirmHapus = confirm("Apakah Anda yakin ingin menghapus data ini?");
    if (confirmHapus) {
        button.parentElement.parentElement.remove();
    }
}
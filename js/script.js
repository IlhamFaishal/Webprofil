//Toggle Class Active
const navbarNav = document.querySelector('.navbar-nav');
//Memperlihatkan menu
document.querySelector('#hamburger-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};
//klik luar untuk navbar
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
});
// Fungsi untuk menyimpan biodata
function simpanBiodata() {
  // Ambil data dari formulir
  const nama = document.getElementById('nama').value;
  const tempatLahir = document.getElementById('tempat_lahir').value;
  const tanggalLahir = document.getElementById('tanggal_lahir').value;
  const wargaNegara = document.getElementById('warga_negara').value;
  const negaraAsal = document.getElementById('negara').value;
  const noKTP = document.getElementById('No_KTP_Mahasiswa').value;
  const jenisKelamin = document.getElementById('jenis_kelamin').value;
  const agama = document.getElementById('agama').value;
  const golonganDarah = document.getElementById('golongan_darah').value;
  const statusSipil = document.getElementById('status_sipil').value;

  // Simpan data ke server atau lakukan tindakan lainnya
  console.log('Data Biodata:');
  console.log('Nama: ' + nama);
  console.log('Tempat Lahir: ' + tempatLahir);
  console.log('Tanggal Lahir: ' + tanggalLahir);
  console.log('Status Warga Negara: ' + wargaNegara);
  console.log('Negara Asal: ' + negaraAsal);
  console.log('No KTP Mahasiswa: ' + noKTP);
  console.log('Jenis Kelamin: ' + jenisKelamin);
  console.log('Agama: ' + agama);
  console.log('Golongan Darah: ' + golonganDarah);
  console.log('Status Sipil: ' + statusSipil);

  
  alert('Biodata berhasil disimpan!');
}

document
  .getElementById('simpan-button')
  .addEventListener('click', simpanBiodata);

  document.addEventListener("DOMContentLoaded", function () {
    const saveButton = document.getElementById("save-button");
    const fileInputs = document.querySelectorAll(".file-upload");

    saveButton.addEventListener("click", function () {
      let isValid = true;

      fileInputs.forEach(function (input) {
        const fileSize = input.files[0]?.size; // Ukuran file dalam byte
        const maxSize = 500 * 1024; // Maksimum 500KB

        if (fileSize && fileSize > maxSize) {
          isValid = false;
          alert("Ukuran file melebihi batas maksimum (500KB).");
        }
      });

      if (isValid) {
        alert("File berhasil diunggah. Data berhasil disimpan.");
        // Tambahkan logika lain jika diperlukan setelah pengunggahan berhasil
      }
    });
  });

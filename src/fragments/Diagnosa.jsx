import React, { useState, useEffect } from 'react'; // Pastikan useState dan useEffect diimpor
import axios from 'axios';
import Swal from 'sweetalert2';

const Diagnosa = () => {
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [nomorTelepon, setNomorTelepon] = useState('');
  const [alamat, setAlamat] = useState('');
  const [gejala, setGejala] = useState({
    demam: false,
    batuk: false,
    nyeri_perut: false,
    muntah_darah: false,
    penurunan_berat_badan: false,
    diare_berdarah: false,
  });
  const [isRegistered, setIsRegistered] = useState(false);

  // Mengambil email dari localStorage jika ada
  useEffect(() => {
    const getEmail = localStorage.getItem('email');
    if (getEmail) {
      setEmail(getEmail);
    }
  }, []);

  // Mengubah status gejala
  const handleGejalaChange = (e) => {
    setGejala({
      ...gejala,
      [e.target.name]: e.target.checked,
    });
  };

  // Handle registrasi relawan
  const handleRegister = async (e) => {
    e.preventDefault(); // Mencegah reload halaman saat form disubmit
    try {
      await axios.post('http://localhost:5055/register-relawan', {
        nama,
        email,
        nomor_telepon: nomorTelepon,
        alamat,
      });

      Swal.fire({
        title: 'Terima Kasih!',
        text: 'Akun Anda Berhasil Didaftarkan.',
        confirmButtonText: 'Ok',
        icon: 'success',
      }).then(() => {
        setIsRegistered(true); // Menampilkan form diagnosa setelah registrasi
      });
    } catch (error) {
      Swal.fire({
        title: 'Error',
        text: 'Tidak Dapat Melakukan Pendaftaran, Coba lagi',
        confirmButtonText: 'OK',
        icon: 'error',
      });
      console.error('Registration failed', error.response?.data || error);
    }
  };

  // Menghitung skor dan menampilkan hasil diagnosa
  const handleSubmitDiagnosa = () => {
    let skor = 0;

    // Hitung skor berdasarkan gejala yang dipilih
    if (gejala.demam) skor += 2;
    if (gejala.batuk) skor += 1;
    if (gejala.nyeri_perut) skor += 3;
    if (gejala.muntah_darah) skor += 5;
    if (gejala.penurunan_berat_badan) skor += 4;
    if (gejala.diare_berdarah) skor += 4;

    // Memberikan hasil berdasarkan skor gejala
    let hasil = '';
    if (skor >= 10) {
      hasil =
        'Terdapat kemungkinan besar Anda terkena schistosomiasis. Silakan konsultasikan ke dokter segera.';
    } else if (skor >= 5) {
      hasil =
        'Terdapat kemungkinan Anda terkena schistosomiasis. Periksakan diri Anda lebih lanjut.';
    } else {
      hasil =
        'Gejala yang Anda alami tidak menunjukkan adanya schistosomiasis. Namun, tetap jaga kesehatan Anda dan waspada.';
    }

    // Tampilkan hasil diagnosa
    Swal.fire({
      title: 'Hasil Diagnosa',
      text: hasil,
      confirmButtonText: 'OK',
      icon: 'info',
    });
  };

  return (
    <>
      {/* Form Diagnosa Dini */}
      <div className="row g-0 mx-lg-0" id="diagnosadini">
        <div className="col-lg-6 ps-lg-0" style={{ minHeight: '400px' }}>
          <div className="position-relative h-100">
            <img
              className="position-absolute img-fluid w-100 h-100"
              src="img/relawan1.jpg" // Ganti dengan path gambar yang benar
              style={{ objectFit: 'cover' }}
              alt="Gambar Relawan"
            />
          </div>
        </div>
        <div
          className="col-lg-6 quote-text py-5 wow fadeIn"
          data-wow-delay="0.5s">
          <div className="p-lg-5 pe-lg-0">
            <div
              className="bg-primary mb-3"
              style={{ width: '60px', height: '2px' }}></div>
            <h1 className="display-5 mb-5">Diagnosa Dini Schistosomiasis</h1>
            <p className="mb-4 pb-2">
              Untuk Anda yang ingin melakukan diagnosa dini, silahkan isi
              identitas anda di bawah ini.
            </p>
            <form onSubmit={handleRegister}>
              <div className="row g-3">
                <div className="col-12 col-sm-6">
                  <input
                    type="text"
                    className="form-control border-0"
                    placeholder="Nama"
                    style={{ height: '55px' }}
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                    required
                  />
                </div>
                <div className="col-12 col-sm-6">
                  <input
                    type="email"
                    className="form-control border-0"
                    placeholder="Email"
                    style={{ height: '55px' }}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="col-12 col-sm-6">
                  <input
                    type="text"
                    className="form-control border-0"
                    placeholder="No. Telepon"
                    style={{ height: '55px' }}
                    value={nomorTelepon}
                    onChange={(e) => setNomorTelepon(e.target.value)}
                    required
                  />
                </div>
                <div className="col-12">
                  <textarea
                    id="alamat"
                    className="form-control border-0"
                    placeholder="Alamat"
                    value={alamat}
                    onChange={(e) => setAlamat(e.target.value)}
                    required></textarea>
                </div>
              </div>
              <div className="col-12">
                <button className="btn btn-primary w-100 py-3" type="submit">
                  Lanjutkan Diagnosa
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Form Diagnosa */}
      {isRegistered && (
        <div className="container my-5">
          <h2 className="text-center">Form Diagnosa</h2>
          <div className="mb-3">
            <h5>Pilih gejala yang Anda alami:</h5>
            {Object.keys(gejala).map((key) => (
              <div key={key} className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name={key}
                  checked={gejala[key]}
                  onChange={handleGejalaChange}
                />
                <label className="form-check-label">
                  {key.replace(/_/g, ' ')}
                </label>
              </div>
            ))}
          </div>
          <button className="btn btn-primary" onClick={handleSubmitDiagnosa}>
            Kirim Diagnosa
          </button>
        </div>
      )}
    </>
  );
};

export default Diagnosa;

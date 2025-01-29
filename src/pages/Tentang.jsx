import Footer from '../fragments/Footer';
import Navbar from '../fragments/Navbar';
import Spinner from '../fragments/Spinner';
import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
const petugas = [
  {
    nama: 'PAULUS MASSANG',
    jabatan: 'PENANGGUNG JAWAB',
    imgSrc: 'img/rafi.png',
    whatsapp:
      'https://wa.me/6282273370260?text=Halo,%20saya%20ingin%20bertanya%20tentang%20layanan%20Anda',
    linkedin: 'https://www.linkedin.com/in/rafi-naufal/',
    instagram: 'https://www.instagram.com/rafinaufal_y.r/',
  },
  {
    nama: 'CERNI TOLU',
    jabatan: 'STAFF',
    imgSrc: 'img/devi.png',
    whatsapp:
      'https://wa.me/6282273370260?text=Halo,%20saya%20ingin%20bertanya%20tentang%20layanan%20Anda',
    linkedin: 'http://linkedin.com/in/devi-samosir-314328289/',
    instagram: 'https://www.instagram.com/xyhnas/',
  },
  {
    nama: 'RAJAB',
    jabatan: 'STAFF',
    imgSrc: 'img/suci.png',
    whatsapp:
      'https://wa.me/6282273370260?text=Halo,%20saya%20ingin%20bertanya%20tentang%20layanan%20Anda',
    linkedin: 'https://www.linkedin.com/in/alfiana-suci-handayani-77528a228',
    instagram: 'https://instagram.com/alfianasuci?igshid=NzZlODBkYWE4Ng',
  },
  {
    nama: 'SYAMSUDIN',
    jabatan: 'STAFF',
    imgSrc: 'img/rifqi.png',
    whatsapp:
      'https://wa.me/6282273370260?text=Halo,%20saya%20ingin%20bertanya%20tentang%20layanan%20Anda',
    linkedin: 'https://www.linkedin.com/in/rifqi-nanda-128670243',
    instagram: 'https://instagram.com/_rifqi_1496',
  },
  {
    nama: 'MOH.IRSAN Amd.Kep',
    jabatan: 'STAFF',
    imgSrc: 'img/vio.png',
    whatsapp:
      'https://wa.me/6282273370260?text=Halo,%20saya%20ingin%20bertanya%20tentang%20layanan%20Anda',
    linkedin: 'http://www.linkedin.com/in/vio-fatickhy',
    instagram: 'https://instagram.com/fatickhy?igshid=YTQwZjQ0NmI0OA',
  },
  {
    nama: 'Autiyah Muskiro',
    jabatan: 'Petugas Inti',
    imgSrc: 'img/tia.png',
    whatsapp:
      'https://wa.me/6282273370260?text=Halo,%20saya%20ingin%20bertanya%20tentang%20layanan%20Anda',
    linkedin: '#',
    instagram: '#',
  },
  {
    nama: 'Tedy',
    jabatan: 'Petugas Lapangan',
    imgSrc: 'img/tedy.png',
    whatsapp:
      'https://wa.me/6282273370260?text=Halo,%20saya%20ingin%20bertanya%20tentang%20layanan%20Anda',
    linkedin: 'http://www.linkedin.com/in/tedy-ariadi-gultom',
    instagram: 'https://www.instagram.com/tedy_zzz/',
  },
];
const Tentang = () => {
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [alasanKontak, setAlasanKontak] = useState('');
  const [pesan, setPesan] = useState('');

  const handleContact = async () => {
    try {
      const response = await axios
        .post('http://localhost:5055/contact', {
          nama,
          email,
          alasan_kontak: alasanKontak,
          pesan,
        })
        .then((res) => {
          Swal.fire({
            title: 'Terima Kasih!',
            text: 'Pesan Anda Berhasil Terkirim.',
            icon: 'success',
            confirmButtonText: 'OK',
          }).then(() => {
            // Setelah tombol OK diklik, kosongkan nilai variabel
            document.querySelector('form').reset();
          });
          console.log(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Spinner />
      <Navbar />
      <div className="tentang"></div>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div
                className="position-relative overflow-hidden h-100"
                style={{ minHeight: '400px' }}>
                <img
                  className="position-absolute w-100 h-100 pt-5 pe-5"
                  src="img/about-1.jpg"
                  alt=""
                  style={{ objectFit: 'cover' }}
                />
                <img
                  className="position-absolute top-0 end-0 bg-white ps-2 pb-2"
                  src="img/about-2.png"
                  alt=""
                  style={{ width: '200px', height: '200px' }}
                />
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="h-100">
                <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">
                  Tentang kami
                </div>
                <h1 className="display-6 mb-5">
                  Kami Berdedikasi untuk Mengurangi Penyebaran Schistosomiasis
                </h1>
                <div className="bg-light border-bottom border-5 border-primary rounded p-4 mb-4">
                  <p className="text-dark mb-2">
                    Melalui SchistoPeduli, kami berkomitmen membantu masyarakat
                    di daerah endemik dengan edukasi, deteksi dini, dan layanan
                    konsultasi terkait schistosomiasis.
                  </p>
                  <span className="text-primary">Schisto Peduli</span>
                </div>
                <p className="mb-5">
                  Kami mendorong partisipasi aktif masyarakat untuk mencegah
                  penyebaran schistosomiasis melalui edukasi dan upaya kolektif
                  di bidang kesehatan. Dengan menjadi relawan, kalian dapat
                  membantu kami melindungi lebih banyak orang dari resiko
                  infeksi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid bg-light overflow-hidden px-lg-0">
        <div className="container contact px-lg-0">
          <div className="row g-0 mx-lg-0">
            <div
              className="col-lg-6 contact-text py-5 wow fadeIn"
              data-wow-delay="0.5s">
              <div className="p-lg-5 ps-lg-0">
                <div className="section-title text-start">
                  <h1 className="display-5 mb-4">Hubungi Kami</h1>
                </div>
                <p className="mb-4">
                  Schisto Peduli Lingkungan Sekitar Dengan Memberikan Layanan
                  Hubungi kami. Kami Siap Menerima Keluhan Anda
                </p>
                <form>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Your Name"
                          onChange={(e) => setNama(e.target.value)}
                        />
                        <label for="name">Nama</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="number"
                          className="form-control"
                          id="telepon"
                          placeholder="Nomor Telepon"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <label for="telepon">Nomor Telepon</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <select
                          className="form-select form-control"
                          id="subject"
                          placeholder="Subject"
                          onChange={(e) => setAlasanKontak(e.target.value)}>
                          <option value="complaint">Keluhan</option>
                          <option value="feedback">Masukan</option>
                          <option value="other">Lainnya</option>
                        </select>
                        <label for="reason">Alasan Kontak</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          placeholder="Leave a message here"
                          id="message"
                          style={{ height: '150px' }}
                          onChange={(e) => setPesan(e.target.value)}></textarea>
                        <label for="message">Pesan</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button
                        className="btn btn-primary w-100 py-3"
                        type="button"
                        onClick={handleContact}>
                        Kirim Pesan
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-6 pe-lg-0" style={{ minHeight: '400px' }}>
              <div className="position-relative h-100">
                <iframe
                  className="position-absolute w-100 h-100"
                  style={{ objectFit: 'cover' }}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4614.64788476229!2d120.32175456119514!3d-1.4274047094375582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d8e9b24c70e57d5%3A0xd960d0ee4eacf7e0!2sLaboratorium%20Schistosomiasis%20Lore%20Utara!5e0!3m2!1sid!2sid!4v1728058293196!5m2!1sid!2sid"
                  frameborder="0"
                  allowfullscreen=""
                  aria-hidden="false"
                  tabindex="0"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: '500px' }}>
            <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">
              Petugas Kami
            </div>
            <h1 className="display-6 mb-5">
              Bersama-sama Lebih Hebat Kami Kreatif dan Bertanggung Jawab
            </h1>
          </div>

          <div className="row g-4">
            {petugas.map((member, index) => (
              <div
                className="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay={`${0.1 * (index + 1)}s`}
                key={index}>
                <div className="team-item position-relative rounded overflow-hidden">
                  <div className="overflow-hidden">
                    <img
                      className="img-fluid"
                      src={member.imgSrc}
                      alt={member.nama}
                    />
                  </div>
                  <div className="team-text bg-light text-center p-4">
                    <h5>{member.nama}</h5>
                    <p className="text-primary">{member.jabatan}</p>
                    <div className="team-social text-center">
                      {member.whatsapp && (
                        <a className="btn btn-square" href={member.whatsapp}>
                          <i className="fab fa-whatsapp"></i>
                        </a>
                      )}
                      {member.linkedin && (
                        <a className="btn btn-square" href={member.linkedin}>
                          <i className="fab fa-linkedin"></i>
                        </a>
                      )}
                      {member.instagram && (
                        <a className="btn btn-square" href={member.instagram}>
                          <i className="fab fa-instagram"></i>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Tentang;
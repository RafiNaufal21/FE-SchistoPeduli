import Navbar from '../fragments/Navbar';
import Footer from '../fragments/Footer';
import { Link } from 'react-router-dom';
import '../css/info_donasi.css';
import Kamera from '../fragments/Kamera';
const DeteksiKeong = () => {
  return (
    <>
      <Navbar />
      <div className="tentang"></div>
      <div className="container-xxl bg-light py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="h-100">
                <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">
                  Deteksi Keong
                </div>
                <h1 className="display-6 mb-5">
                  Kami Membantu Mengendalikan Penyebaran Schistosomiasis
                </h1>
                <div className="bg-light border-bottom border-5 border-primary rounded p-4 mb-4">
                  <p className="text-dark mb-2">
                    Dengan menyediakan fitur deteksi keong Oncomelania, kami
                    siap mendukung pencegahan penyebaran penyakit
                    schistosomiasis.
                  </p>
                  <span className="text-primary">Schisto Peduli</span>
                </div>
                <p className="mb-5">
                  Dengan mendeteksi keong Oncomelania, kita dapat membantu
                  mengendalikan penyebaran penyakit schistosomiasis. Mari
                  bersama-sama melakukan langkah preventif untuk melindungi
                  masyarakat dari ancaman penyakit ini.
                </p>

                <a className="btn btn-primary py-2 px-3 me-3" href="#kamera">
                  Deteksi Sekarang
                  <div className="d-inline-flex btn-sm-square bg-white text-primary rounded-circle ms-2">
                    <i className="fa fa-arrow-right"></i>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div
                className="position-relative overflow-hidden h-100"
                style={{ minHeight: '400px' }}>
                <img
                  className="position-absolute"
                  src="img/deteksikeong.png"
                  alt=""
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid my-5 py-5 causes"></div>
      <Kamera />

      <Footer />
    </>
  );
};
export default DeteksiKeong;
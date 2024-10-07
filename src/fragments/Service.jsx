import React from 'react';

const Service = () => {
  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ 'max-width': '500px' }}>
            <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">
              Apa yang Kami lakukan
            </div>
            <h1 className="display-6 mb-5">
              Pelajari Lebih Lanjut Apa yang Kami Lakukan Dan Bergabunglah
            </h1>
          </div>
          <div className="row g-4 justify-content-center">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s">
              <div className="service-item bg-white text-center h-100 p-4 p-xl-5">
                <img
                  className="img-fluid mb-4"
                  src="img/iconfitur-1.png"
                  alt=""
                />
                <h4 className="mb-3">Deteksi Keong</h4>
                <p className="mb-4">
                  Sistem Deteksi Keong ini bertujuan untuk membantu masyarakat
                  dan petugas kesehatan dalam mengidentifikasi jenis keong yang
                  berpotensi menyebarkan penyakit, khususnya keong Oncomelania
                  yang menjadi penyebab utama schistosomiasis. Menggunakan
                  teknologi berbasis kamera, Tujuan sistem ini untuk mengurangi
                  penyebaran schistosomiasis di wilayah endemik.
                </p>
                <a className="btn btn-outline-primary px-3" href="/eduschisto">
                  Lebih Lanjut
                  <div className="d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2">
                    <i className="fa fa-arrow-right"></i>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s">
              <div className="service-item bg-white text-center h-100 p-4 p-xl-5">
                <img
                  className="img-fluid mb-4"
                  src="img/iconfitur-2.gif"
                  alt=""
                />
                <h4 className="mb-3">Peta Bahaya Keong</h4>
                <p className="mb-4">
                  Peta Bahaya Keong adalah alat pemantauan yang interaktif dan
                  dirancang untuk membantu masyarakat dan pihak berwenang dalam
                  mengidentifikasi daerah yang berisiko tinggi terhadap
                  kehadiran keong Oncomelania, yang merupakan penyebab utama
                  schistosomiasis. Peta ini menyajikan data real-time tentang
                  lokasi-lokasi di mana keong telah terdeteksi
                </p>
                <a className="btn btn-outline-primary px-3" href="/peta">
                  Lebih Lanjut
                  <div className="d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2">
                    <i className="fa fa-arrow-right"></i>
                  </div>
                </a>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s">
              <div className="service-item bg-white text-center h-100 p-4 p-xl-5">
                <img
                  className="img-fluid mb-4"
                  src="img/iconfitur-3.gif"
                  alt=""
                />
                <h4 className="mb-3">Konsultasi</h4>
                <p className="mb-4">
                  Layanan Konsultasi ini bertujuan untuk membantu masyarakat
                  dalam memahami lebih dalam mengenai penyakit schistosomiasis.
                  Melalui konsultasi ini, masyarakat dapat berkonsultasi
                  langsung dengan tenaga medis profesional untuk mendapatkan
                  informasi terkait gejala, pencegahan, serta pengobatan yang
                  tepat.
                </p>
                <a className="btn btn-outline-primary px-3" href="/psikososial">
                  Lebih lanjut
                  <div className="d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2">
                    <i className="fa fa-arrow-right"></i>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;

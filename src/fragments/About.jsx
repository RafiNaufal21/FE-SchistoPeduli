import React from 'react';
import Button from '../components/button/button';

const About = () => {
  return (
    <>
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
                <a href="/tentang">
                  <Button variant="btn-primary py-2 px-3 me-3">
                    Lebih lanjut
                  </Button>
                </a>
                <Button variant="btn-outline-primary py-2 px-3 me-3">
                  Hubungi kami
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

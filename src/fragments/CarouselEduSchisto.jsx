import React from 'react';

const CarouselEduSchisto = () => {
  return (
    <>
      <div className="container-fluid p-0 mb-5">
        <div
          id="header-carousel"
          className="carousel slide"
          data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="w-100" src="img/carousel-3.png" alt="Image" />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-7 pt-5">
                      <h1 className="display-4 text-white mb-3 animated slideInDown">
                        Edukasi Tentang Penyakit Schistomosiasis
                      </h1>
                      <p className="fs-5 text-white-50 mb-5 animated slideInDown">
                        EduSchisto, Bersama Meningkatkan Kesadaran dan
                        Pengetahuan.
                      </p>

                      <a
                        className="btn btn-primary py-2 px-3 animated slideInDown"
                        href="#edukasi">
                        Lebih Lanjut
                        <div className="d-inline-flex btn-sm-square bg-white text-primary rounded-circle ms-2">
                          <i className="fa fa-arrow-right"></i>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="w-100" src="img/carousel-4.png" alt="Image" />
              <div className="carousel-caption">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-7 pt-5">
                      <h1 className="display-4 text-white mb-3 animated slideInDown">
                        Bersama Mengurangi Penyebaran Penyakit Schistosomiasis
                      </h1>
                      <p className="fs-5 text-white-50 mb-5 animated slideInDown">
                        SchistoPeduli hadir untuk membantu masyarakat mencegah
                        dan melawan penyebaran schistosomiasis di daerah
                        endemik.
                      </p>

                      <a
                        className="btn btn-primary py-2 px-3 animated slideInDown"
                        href="#diagnosadini">
                        Lebih Lanjut
                        <div className="d-inline-flex btn-sm-square bg-white text-primary rounded-circle ms-2">
                          <i className="fa fa-arrow-right"></i>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="prev">
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#header-carousel"
            data-bs-slide="next">
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default CarouselEduSchisto;

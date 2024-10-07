import Footer from '../fragments/Footer';
import Navbar from '../fragments/Navbar';
import Spinner from '../fragments/Spinner';
import Education from '../fragments/education';
import Diagnosa from '../fragments/Diagnosa';
import CarouselEduSchisto from '../fragments/CarouselEduSchisto';
import { useState, useEffect } from 'react';
import React from 'react';
import '../css/relawan.css';
import '../lib/animate/animate.css';

const EduSchisto = () => {
  return (
    <>
      <Spinner />
      <Navbar />
      <CarouselEduSchisto />
      <div className="container-fluid overflow-hidden my-5 px-lg-0">
        <div>
          <div className="row g-0 mx-lg-0">
            <div className="col-lg-6 ps-lg-0" style={{ minHeight: '400px' }}>
              <div
                className="position-relative"
                style={{ height: '500px', width: '100%' }}>
                {' '}
                {/* Changed width to 100% */}
                <iframe
                  className="position-absolute img-fluid w-100 h-100"
                  style={{ objectFit: 'cover' }}
                  src="https://www.youtube.com/embed/Vgjn-DllqYA?si=KfCvuqpaJYrUCOfD"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen></iframe>
              </div>
            </div>
            <div
              className="col-lg-6 about-text py-5 wow fadeIn"
              data-wow-delay="0.5s">
              <div className="p-lg-5 pe-lg-0">
                <div
                  className="bg-primary mb-3"
                  style={{ width: '60px', height: '2px' }}></div>
                <h1 className="display-5 mb-4">Seputar Schistosomiasis</h1>
                <p className="mb-4 pb-2">
                  Kami berkomitmen untuk menjaga lingkungan dan meningkatkan
                  kesadaran tentang penyakit schistosomiasis melalui layanan
                  EduSchisto. Kami juga aktif memberi tahu masyarakat mengenai
                  bahaya schistosomiasis sejak dini dengan mengadakan program
                  edukasi yang berfokus pada pencegahan, deteksi dini, serta
                  penanganan yang tepat. Dengan langkah ini, kami berharap dapat
                  melindungi lebih banyak orang dari risiko penyakit ini dan
                  menciptakan lingkungan yang lebih sehat.
                </p>
                <a
                  href="/tentang"
                  className="btn btn-primary rounded-pill py-3 px-5">
                  Jelajahi Lebih Lanjut
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Education />
      <br />
      <Diagnosa />

      <Footer />
    </>
  );
};

export default EduSchisto;

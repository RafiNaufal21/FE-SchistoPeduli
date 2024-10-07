import React from 'react';
import '../css/Artikel.css';
import Navbar from '../fragments/Navbar';
import Footer from '../fragments/Footer';

const DetailArtikel = () => {
  return (
    <>
      <Navbar />
      <div className="tentang"></div>
      <div className="about-area">
        <div className="container">
          <br />
          <br />

          <div className="row">
            <div className="col-lg-8">
              {/* Trending Title */}
              <div className="about-right mb-90">
                <div className="about-img">
                  <img src="/img/gejala.jpeg" alt="" />
                </div>
                <div className="section-tittle mb-30 pt-30">
                  <h3>
                    Melawan Schistosomiasis: Penyakit Tropis yang Terabaikan
                  </h3>
                </div>
                <div className="about-prea">
                  <p className="about-pera1 mb-25">
                    Schistosomiasis, atau dikenal sebagai demam keong, adalah
                    penyakit parasit yang mempengaruhi jutaan orang di seluruh
                    dunia. Penyakit ini disebabkan oleh parasit dari genus
                    Schistosoma yang hidup di siput air tawar. Ketika manusia
                    bersentuhan dengan air yang terkontaminasi, parasit ini
                    dapat masuk ke dalam tubuh dan menyebabkan berbagai masalah
                    kesehatan serius.
                  </p>
                </div>
                <div className="section-tittle">
                  <h3>Bagaimana Schistosomiasis Menyebar?</h3>
                </div>
                <div className="about-prea">
                  <p className="about-pera1 mb-25">
                    Penularan schistosomiasis dimulai ketika seseorang melakukan
                    kontak dengan air tawar yang telah terinfeksi. Larva parasit
                    (cercaria) yang dilepaskan oleh siput air tawar dapat
                    menembus kulit manusia saat berenang, mandi, atau mencuci
                    pakaian di sumber air yang terkontaminasi. Begitu masuk ke
                    dalam tubuh, larva ini berubah menjadi cacing dewasa yang
                    hidup di pembuluh darah, terutama di sekitar usus atau
                    kandung kemih. Mereka kemudian melepaskan telur yang
                    menyebabkan kerusakan organ vital dan menimbulkan gejala
                    serius.
                  </p>
                </div>
                <div className="section-tittle">
                  <h3>Dampak Kesehatan yang Dapat Ditimbulkan</h3>
                </div>
                <div className="about-prea">
                  <p className="about-pera1 mb-25">
                    Schistosomiasis termasuk dalam kategori penyakit tropis yang
                    terabaikan (Neglected Tropical Diseases, NTDs), yang berarti
                    bahwa upaya pengendalian dan pencegahan sering kali kurang
                    mendapatkan perhatian dan sumber daya, terutama di
                    negara-negara berkembang. Meskipun ada obat yang efektif
                    untuk mengobati infeksi ini, seperti praziquantel, tantangan
                    utama dalam mengendalikan schistosomiasis adalah memperbaiki
                    akses masyarakat terhadap air bersih dan sanitasi yang
                    memadai.
                  </p>
                  <p className="about-pera1 mb-25">
                    Di banyak daerah endemik, sumber air bersih yang aman masih
                    sulit dijangkau, sehingga orang-orang tetap terpaksa
                    menggunakan air sungai atau danau yang mungkin telah
                    terkontaminasi. Siput air tawar, yang berperan sebagai inang
                    parasit, berkembang biak di air yang tergenang atau lambat
                    mengalir, seperti di bendungan atau sistem irigasi, sehingga
                    pengendalian populasi siput juga menjadi bagian penting dari
                    strategi pencegahan.
                  </p>
                </div>

                <div className="social-share pt-30">
                  <div className="section-tittle">
                    <h3 className="mr-20">Share:</h3>
                    <ul>
                      <li>
                        <a href="#">
                          <img src="/img/news/icon-ins.png" alt="" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src="/img/news/icon-fb.png" alt="" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src="/img/news/icon-tw.png" alt="" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src="/img/news/icon-yo.png" alt="" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              {/* Section Title */}
              <div className="section-tittle mb-40">
                <h3>Follow Us</h3>
              </div>
              {/* Follow Social */}
              <div className="single-follow mb-45">
                <div className="single-box">
                  <div className="follow-us d-flex align-items-center">
                    <div className="follow-social">
                      <a href="#">
                        <img src="/img/news/icon-fb.png" alt="" />
                      </a>
                    </div>
                    <div className="follow-count">
                      <span>8,045</span>
                      <p>Fans</p>
                    </div>
                  </div>
                  <div className="follow-us d-flex align-items-center">
                    <div className="follow-social">
                      <a href="#">
                        <img src="/img/news/icon-tw.png" alt="" />
                      </a>
                    </div>
                    <div className="follow-count">
                      <span>8,045</span>
                    </div>
                  </div>
                </div>
                {/* Instagram */}
                <div className="single-follow mb-45">
                  <div className="single-box">
                    <div className="follow-us d-flex align-items-center">
                      <div className="follow-social">
                        <a href="#">
                          <img src="/img/news/icon-ins.png" alt="" />
                        </a>
                      </div>
                      <div className="follow-count">
                        <span>8,045</span>
                        <p>Followers</p>
                      </div>
                    </div>
                    <div className="follow-us d-flex align-items-center">
                      <div className="follow-social">
                        <a href="#">
                          <img src="/img/news/icon-yo.png" alt="" />
                        </a>
                      </div>
                      <div className="follow-count">
                        <span>8,045</span>
                        <p>Subscribers</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DetailArtikel;

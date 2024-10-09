import React from 'react';
import '../css/Artikel.css';
import Navbar from '../fragments/Navbar';
import Footer from '../fragments/Footer';
import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const getDetailBlog = async (id) => {
  try {
      const response = await axios.get(`http://localhost:1945/artikel/${id}`);
      return response
  } catch (error) {
      return error;
    }
}

const DetailArtikel = () => {
  const { id } = useParams();
  const [artikel, setartikel] = useState(null);

  const fetchData = async () => {
    try {
      const res = await getDetailBlog(id);
      console.log(res)
      setartikel(res?.data);
      // console.log(artikel);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);
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
            {/* Cek apakah artikel ada */}
            {artikel ? (
              <div className="about-right mb-90">
                <div className="about-img">
                  <img src={artikel.foto} alt={artikel.judul} />
                </div>
                <div className="section-tittle mb-30 pt-30">
                  <h3>{artikel.judul}</h3>
                </div>
                <div className="about-prea">
                  <p className="about-pera1 mb-25">{artikel.deskripsi}</p>
                </div>
                <div className="section-tittle">
                  <h3>{artikel.subjudul}</h3>
                </div>
                <div className="about-prea">
                  <p className="about-pera1 mb-25">{artikel.subdeskripsi}</p>
                </div>
                <div className="social-share pt-30">
                  <div className="section-tittle">
                    <h3 className="mr-20">Share:</h3>
                    <ul>
                      <li><a href="#"><img src="/img/news/icon-ins.png" alt="" /></a></li>
                      <li><a href="#"><img src="/img/news/icon-fb.png" alt="" /></a></li>
                      <li><a href="#"><img src="/img/news/icon-tw.png" alt="" /></a></li>
                      <li><a href="#"><img src="/img/news/icon-yo.png" alt="" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            ) : (
              <p>Loading...</p> // Indikator loading saat artikel masih null
            )}
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

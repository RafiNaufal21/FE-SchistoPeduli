import React from 'react';
import '../css/Artikel.css';
import axios from 'axios';
import { useEffect,useState } from 'react';



const getBerita = async () => {
  try {
      const response = await axios.get('https://3e21-180-247-46-208.ngrok-free.app/artikel',{
        headers: {
          "ngrok-skip-browser-warning": "69420",
          },
      })
      return response
  } catch (error) {
      return error
    }
}

const Artikel = () => {
  
  const [artikelData,setBerita] = useState(null)

  const fetchData = async () => {
    try {
      const res = await getBerita();
      setBerita(res?.data?.artikel);
      console.log(res)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  if (!artikelData) {
    return <div>Loading...</div>;
  }

  // Memisahkan artikel sesuai dengan posisinya
  const trendingTop = artikelData.filter((item) => item.position === 'top');
  const trendingBottom = artikelData.filter(
    (item) => item.position === 'bottom'
  );
  const rightContent = artikelData.filter((item) => item.position === 'right');
  console.log(rightContent)
  return (
    <div className="trending-area fix">
      <div className="container">
        <div className="trending-main">
          {/* Trending Title */}
          <div className="row">
            <div className="col-lg-12">
              <div className="trending-tittle">
                <strong>Artikel </strong>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-8">
              {/* Trending Top */}
              {trendingTop.map((article) => (
                <div className="trending-top mb-30" key={article.id}>
                  <div className="trend-top-img">
                    <img
                      src={article.foto}
                      width={750}
                      height={400}
                      alt={article.judul}
                    />
                    <div className="trend-top-cap">
                      <span>{article.kategori}</span>
                      <h2>
                        <a href={`/Detail-artikel/${article.id}`}>
                          {article.judul}
                        </a>
                      </h2>
                    </div>
                  </div>
                </div>
              ))}

              {/* Trending Bottom */}
              <div className="trending-bottom">
                <div className="row">
                  {trendingBottom.map((article, index) => (
                    <div className="col-lg-4" key={article.id}>
                      <div className="single-bottom mb-35">
                        <div className="trend-bottom-img mb-30">
                          <img src={article.foto} alt={article.judul} />
                        </div>
                        <div className="trend-bottom-cap">
                          <span className={`color${index + 1}`}>
                            {article.kategori}
                          </span>
                          <h4>
                            <a href={`/Detail-artikel/${article.id}`}>
                              {article.judul}
                            </a>
                          </h4>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="col-lg-4">
              {rightContent.map((article, index) => (
                <div className="trand-right-single d-flex" key={article.id}>
                  <div className="trand-right-img">
                    <img
                      src={article.foto}
                      width={120}
                      height={100}
                      alt={article.judul}
                    />
                  </div>
                  <div className="trand-right-cap">
                    <span className={`color${index + 1}`}>
                      {article.kategori}
                    </span>
                    <h4>
                      <a href={`/detail-artikel/${article.id}`}>{article.judul}</a>
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Artikel;

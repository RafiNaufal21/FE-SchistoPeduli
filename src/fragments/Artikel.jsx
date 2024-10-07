import React from 'react';
import '../css/Artikel.css';
const artikelData = [
  {
    id: 1,
    imgSrc: '/img/keongoncom.jpeg',
    category: 'keong',
    title: 'Bagaimana Penyebaran Penyakit Schistosomiasis',
    position: 'top', // Posisi untuk Trending Top
  },
  {
    id: 2,
    imgSrc: '/img/carousel-1.png',
    category: 'Penyuluhan',
    title: 'Penyuluhan ke desa watumaeta',
    position: 'bottom',
  },
  {
    id: 3,
    imgSrc: '/img/penyebaran.jpg',
    category: 'Schistosomiasis',
    title: 'Apa itu Schistosomiasis',
    position: 'bottom',
  },
  {
    id: 4,
    imgSrc: '/img/penyebaran.jpg',
    category: 'Schistosomiasis',
    title: 'Apa itu Schistosomiasis',
    position: 'bottom',
  },
  {
    id: 5,
    imgSrc: '/img/penyebaran.jpg',
    category: 'Schistosomiasis',
    title: 'Apa itu Schistosomiasis',
    position: 'right', // Posisi untuk Right Content
  },
  {
    id: 6,
    imgSrc: '/img/penyebaran.jpg',
    category: 'Schistosomiasis',
    title: 'Apa itu Schistosomiasis',
    position: 'right',
  },
  {
    id: 7,
    imgSrc: '/img/penyebaran.jpg',
    category: 'Schistosomiasis',
    title: 'Apa itu Schistosomiasis',
    position: 'right',
  },
  {
    id: 8,
    imgSrc: '/img/trending/right4.jpg',
    category: 'Sea Beach',
    title: 'Welcome To The Best Model Winner Contest',
    position: 'right',
  },
  {
    id: 9,
    imgSrc: '/img/trending/right5.jpg',
    category: 'Skeping',
    title: 'Welcome To The Best Model Winner Contest',
    position: 'right',
  },
  {
    id: 10,
    imgSrc: '/img/trending/trending_bottom2.jpg',
    category: 'Sports',
    title: 'Get the Illusion of Fuller Lashes by “Mascng.”',
    position: 'bottom',
  },
  {
    id: 11,
    imgSrc: '/img/trending/trending_bottom2.jpg',
    category: 'Penyuluhan',
    title: 'Penyuluhan ke desa watumaeta',
    position: 'botttom',
  },
];

const Artikel = () => {
  // Memisahkan artikel sesuai dengan posisinya
  const trendingTop = artikelData.filter((item) => item.position === 'top');
  const trendingBottom = artikelData.filter(
    (item) => item.position === 'bottom'
  );
  const rightContent = artikelData.filter((item) => item.position === 'right');

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
                      src={article.imgSrc}
                      width={750}
                      height={400}
                      alt={article.title}
                    />
                    <div className="trend-top-cap">
                      <span>{article.category}</span>
                      <h2>
                        <a href={`/Detail-artikel/${article.id}`}>
                          {article.title}
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
                          <img src={article.imgSrc} alt={article.title} />
                        </div>
                        <div className="trend-bottom-cap">
                          <span className={`color${index + 1}`}>
                            {article.category}
                          </span>
                          <h4>
                            <a href={`/Detail-artikel/${article.id}`}>
                              {article.title}
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
                      src={article.imgSrc}
                      width={120}
                      height={100}
                      alt={article.title}
                    />
                  </div>
                  <div className="trand-right-cap">
                    <span className={`color${index + 1}`}>
                      {article.category}
                    </span>
                    <h4>
                      <a href={`/Detail-artikel/`}>{article.title}</a>
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

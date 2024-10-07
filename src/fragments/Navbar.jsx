import React, { useEffect, useState } from 'react';
import Button from '../components/button/button';
import { Link, useLocation } from 'react-router-dom';
import '../css/info_donasi.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 992) {
        setIsScrolled(window.scrollY > 45);
      } else {
        setIsScrolled(window.scrollY > 45);
      }
    };

    window.addEventListener('scroll', handleScroll);

    const username = localStorage.getItem('username');
    setIsLoggedIn(!!username);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarClasses = `navbar navbar-expand-lg navbar-dark py-lg-0 px-lg-5 wow fadeIn ${
    isScrolled ? 'bg-dark shadow' : ''
  }`;
  const location = useLocation();

  const handleLogout = () => {
    // Implement logout logic here
    // Clear the username from localStorage and update state
    window.location.reload();
    localStorage.removeItem('username');
  };

  return (
    <div
      className={`container-fluid fixed-top px-0 wow fadeIn ${
        isScrolled ? 'bg-dark shadow' : ''
      }`}>
      <div className="top-bar text-white-50 row gx-0 align-items-center d-none d-lg-flex">
        <div className="col-lg-6 px-5 text-start">
          <small>
            <i className="fa fa-map-marker-alt me-2"></i>Lore Utara, Sulawesi
            Tengah, Indonesia
          </small>
          <small className="ms-4">
            <i className="fa fa-envelope me-2"></i>schistopeduli@gmail.com
          </small>
        </div>
        <div className="col-lg-6 px-5 text-end">
          {isLoggedIn ? (
            <span className="fw-bold text-white">
              {localStorage.getItem('username')}{' '}
              <img
                src="img/user.png"
                alt=""
                style={{ width: '25px', marginLeft: '10px' }}
              />
            </span>
          ) : (
            <div>
              <small>Follow us:</small>
              <a className="text-white-50 ms-3" href="">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="text-white-50 ms-3" href="">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="text-white-50 ms-3" href="">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a className="text-white-50 ms-3" href="">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          )}
        </div>
      </div>

      <nav className={navbarClasses} data-wow-delay="0.1s">
        <a href="index.html" className="navbar-brand ms-4 ms-lg-0">
          <h1 className="text-white">
            Schisto<span className="fw-bold text-primary m-0">Peduli</span>
          </h1>
        </a>
        <button
          type="button"
          className="navbar-toggler me-4"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            <Link
              to="/"
              className={`nav-item nav-link ${
                location.pathname === '/' ? 'active' : ''
              }`}>
              Beranda
            </Link>
            <div className={`nav-item dropdown`}>
              <a
                href="#"
                className={`nav-link ${
                  location.pathname.includes('/eduschisto') ||
                  location.pathname.includes('/deteksikeong') ||
                  location.pathname.includes('/psikososial')
                    ? 'active'
                    : ''
                } dropdown-toggle`}
                data-bs-toggle="dropdown">
                Kategori
              </a>
              <div className="dropdown-menu m-0">
                <Link
                  to="/eduschisto"
                  className={`dropdown-item ${
                    location.pathname === '/eduschisto' ? 'active' : ''
                  }`}>
                  Eduschisto
                </Link>
                <Link
                  to="/deteksikeong"
                  className={`dropdown-item ${
                    location.pathname === '/deteksikeong' ? 'active' : ''
                  }`}>
                  DeteksiKeong
                </Link>
              </div>
            </div>
            <Link
              to="/peta"
              className={`nav-item nav-link  ${
                location.pathname === '/peta' ? 'active' : ''
              }`}>
              Peta Rawan Keong
            </Link>
            <Link
              to="/tentang"
              className={`nav-item nav-link  ${
                location.pathname === '/tentang' ? 'active' : ''
              }`}>
              Tentang
            </Link>
          </div>
          <div className="d-none d-lg-flex ms-2">
            <Button
              href="/deteksikeong"
              variant="btn-outline-primary"
              className="nav-item nav-link">
              Deteksi Yuk
            </Button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

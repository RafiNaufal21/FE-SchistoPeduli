import React, { useEffect, useState } from "react";
import axios from "axios";


const getEdukasi = async () => {
  try {
    const response = await axios.get("http://localhost:1945/edukasi");
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};


const Education = () => {
  const [edukasi, setEdukasi] = useState(null);

  const fetchData = async () => {
    const res = await getEdukasi();
    setEdukasi(res?.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!edukasi) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {/* Edukasi Schistosomiasis */}
      <div className="text-center">
        <div
          className="bg-primary mb-3 mx-auto"
          style={{ width: "60px", height: "2px" }}
        ></div>
        <h1 className="display-5 mb-5" id="edukasi">
          Edukasi Schistosomiasis
        </h1>
      </div>

      <div className="row g-0 service-row">
        {edukasi.map((modal, index) => (
          <div
            key={index}
            className="col-md-6 col-lg-3 wow fadeIn"
            data-wow-delay={`${index * 0.2}s`}
          >
            <div className="service-item border h-100 p-5">
              <center>
                <div
                  className="btn-square bg-light rounded-circle mb-4"
                  style={{ width: "64px", height: "64px" }}
                >
                  <img className="img-fluid" src="/img/icon-1.png" alt="Icon" />
                </div>
                <h4 className="mb-3">{modal.judul}</h4>
                <p className="mb-4" style={{ textAlign: "justify" }}>
                  {modal.deskripsi.substring(0, 100)}...
                </p>
                <a
                  className="bton bton-outline-primary px-3"
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target={`#modal${modal.id}`}
                >
                  <i className="fa fa-arrow-right text-white me-3"></i>Lebih
                  Lanjut
                </a>
              </center>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Edukasi */}
      {edukasi.map((modal, index) => (
        <div
          key={index}
          className="modal fade"
          id={`modal${modal.id}`}
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-md" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{modal.judul}</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <center>
                  <div className="modal-image mb-4">
                    <img
                      className="img-fluid"
                      src={modal.foto}
                      alt="Modal Image"
                      style={{ maxWidth: "100%" }}
                    />
                  </div>
                </center>
                <p style={{ textAlign: "justify" }}>{modal.deskripsi}</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Education;

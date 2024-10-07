import Navbar from "../fragments/Navbar";
import Footer from "../fragments/Footer";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import axios from "axios";

const LanjutDonasi = () => {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [nomortelepon, setNomortelepon] = useState("");
  const [pesan, setPesan] = useState("");

  useEffect(() => {
    const getEmail = localStorage.getItem("email");
    if (getEmail) {
      setEmail(getEmail);
    }
  });

  const SudahBayar = () => {
    Swal.fire({
      title: "Terima Kasih!",
      text: "Sudah melakukan donasi. Cek Social Media Kami untuk lebih lanjut.",
      icon: "success",
      confirmButtonText: "OK",
    }).then(() => {
      window.location.href = "/info-donasi";
    });
  };
  const handleDonasi = async () => {
    try {
      const response = await axios
        .post("http://localhost:5055/donasi", {
          nama,
          email,
          nomortelepon,
          pesan,
          nominal: localStorage.getItem("nominal"),
        })
        .then((res) => {
          console.log(res);
          document
            .getElementById("donateButton")
            .addEventListener("click", function () {
              var selectedAmount = document.querySelector(
                'input[id="btnradio1"]:checked'
              );

              if (selectedAmount) {
                var modal = new bootstrap.Modal(
                  document.getElementById("modalGopay"),
                  {
                    backdrop: "static",
                    keyboard: false,
                  }
                );
                modal.show();
              }
            });

          document
            .getElementById("donateButton")
            .addEventListener("click", function () {
              var selectedAmount = document.querySelector(
                'input[id="btnradio2"]:checked'
              );

              if (selectedAmount) {
                var modal = new bootstrap.Modal(
                  document.getElementById("modalDana"),
                  {
                    backdrop: "static",
                    keyboard: false,
                  }
                );
                modal.show();
              }
            });

          document
            .getElementById("donateButton")
            .addEventListener("click", function () {
              var selectedAmount = document.querySelector(
                'input[id="btnradio3"]:checked'
              );

              if (selectedAmount) {
                var modal = new bootstrap.Modal(
                  document.getElementById("modalShopee"),
                  { backdrop: "static", keyboard: false }
                );
                modal.show();
              }
            });
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <style>
        {`.my-6{
    margin: 4rem auto;
}

.my-6 h3{
    padding-top: 3rem;
    font-family: "Ubuntu-Bold", Helvetica;
}

.line {
    width: 100%;
    border-top: 2px solid #DDDDDD;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}

.centered-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    padding: 0 10px;
}

#donasi .pembayaran label{
    border-color: #DDDDDD;
    border-radius: 8px;
    margin: 0.5rem 0;
    padding: 1rem;
    box-shadow: 0px 2px 7px rgba(162, 149, 149, 0.8);
}

#donasi hr {
    margin: 1rem 0 0 0;
    border: none;
    height: 1px;
    color: #000000; 
    background-color: #333;
}

#donasi .kotak{
    margin: 20px 0;
    width: 100%;
    height:74px;
    background:rgb(255, 255, 255);
    border:solid 3px #DDDDDD;
    border-radius: 8px;
}
#donasi hr{
    margin-top: 2rem;
}

#donasi form .textOnInput {
    position: relative;
    box-shadow: 0px 2px 7px rgba(162, 149, 149, 0.8);
    border-radius: 6px;
}
#donasi form .textOnInput label {
    position: absolute;
    top: -15px;
    left: 23px;
    padding: 2px;
    z-index: 1;
}
#donasi form .textOnInput label:after {
    content: " ";
    background-color: #fff;
    width: 100%;
    height: 13px;
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: -1;
}
#donasi form label {
    font-size: 16px;
    font-weight: 500;
    display: inline-block;
    margin-bottom: .5rem;
    background-color: #fff;
}

#donasi form .form-control {
    box-shadow: none !important;

}

#donasi .switch input{
    float: right;
    width: 4rem;
    height: 2rem;
}

#donasi .switch label{
    padding: 1%;
}`}
      </style>
      <Navbar />
      <div className="tentang"></div>
      <section className="my-6" id="donasi">
        <center>
          <h3>Bagi Saudara Kita yang Membutuhkan</h3>
        </center>
        <div className="container py-5">
          <div className="row d-flex justify-content-center">
            <div className="col-md-8">
              <div className="card rounded-3">
                <div className="card-body mx-1 my-2">
                  <div style={{ position: "relative" }}>
                    <div className="line"></div>
                    <div className="text-muted centered-text">
                      Pilih Nominal Donasi
                    </div>
                  </div>
                  <div className="kotak text-center d-flex align-items-center justify-content-center fw-bold fs-4 ">
                    {localStorage.getItem("nominal")}
                  </div>
                  <div style={{ position: "relative" }}>
                    <div className="line"></div>
                    <div className="text-muted centered-text">
                      Pilih Metode Pembayaran
                    </div>
                  </div>
                  <div
                    className="btn-group w-100 my-3 pembayaran"
                    role="group"
                    aria-label="Basic radio toggle button group"
                  >
                    <input
                      type="radio"
                      className="btn-check"
                      name="btnradio"
                      id="btnradio1"
                      autoComplete="off"
                      defaultChecked
                    />
                    <label
                      className="btn btn-outline-primary"
                      htmlFor="btnradio1"
                    >
                      <img src="img/logoGoPay.svg" className="w-100" />
                    </label>

                    <input
                      type="radio"
                      className="btn-check"
                      name="btnradio"
                      id="btnradio2"
                      autoComplete="off"
                      data-bs-target="#modalOvo"
                    />
                    <label
                      className="btn btn-outline-primary"
                      htmlFor="btnradio2"
                    >
                      <img src="img/dana.png" className="w-100" />
                    </label>

                    <input
                      type="radio"
                      className="btn-check"
                      name="btnradio"
                      id="btnradio3"
                      autoComplete="off"
                    />
                    <label
                      className="btn btn-outline-primary"
                      htmlFor="btnradio3"
                    >
                      <img src="img/ShopeePay.png" className="w-100" />
                    </label>
                  </div>
                  <div className="my-2" style={{ position: "relative" }}>
                    <div className="line"></div>
                    <div className="text-muted centered-text">
                      Informasi Donatur
                    </div>
                  </div>

                  <div className="form-check form-switch switch my-4 p-0">
                    <label
                      className="form-check-label"
                      htmlFor="flexSwitchCheckChecked"
                    >
                      Sembunyikan Nama Saya (Anonim)
                    </label>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckChecked"
                    />
                  </div>

                  <p
                    style={{
                      color: "#000",
                      textAlign: "center",
                      margin: "0 0 2rem 0",
                    }}
                  >
                    Masuk atau lengkapi data di bawah ini
                  </p>

                  <form>
                    <div className="mt-4">
                      <div className="textOnInput">
                        <label htmlFor="inputText">Nama Lengkap</label>
                        <input
                          className="form-control"
                          type="text"
                          onChange={(e) => setNama(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="mt-5">
                      <div className="textOnInput">
                        <label htmlFor="inputText">Email (Opsional)</label>
                        <input
                          className="form-control"
                          type="text"
                          value={email}
                          onChange={() => setEmail(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="mt-5">
                      <div className="textOnInput">
                        <label htmlFor="inputText">Nomor Telepon</label>
                        <input
                          className="form-control"
                          type="text"
                          onChange={(e) => setNomortelepon(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="mt-5">
                      <div className="textOnInput">
                        <label htmlFor="inputText">Pesan(Opsional)</label>
                        <textarea
                          className="form-control"
                          id=""
                          rows="4"
                          onChange={(e) => setPesan(e.target.value)}
                        ></textarea>
                      </div>
                    </div>
                    <div className="form-check mt-4">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      >
                        Ya, Saya telah membaca dan menyetujui Syarat & Ketentuan
                        Donasi
                      </label>
                    </div>
                  </form>

                  <button
                    type="button"
                    className="btn btn-primary btn-lg"
                    id="donateButton"
                    style={{ width: "100%" }}
                    onClick={handleDonasi}
                  >
                    Donasi
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <div
        className="modal fade"
        id="modalGopay"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                QR Code GoPay
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-center">
              <p>
                Lakukan Donasi dengan <br /> Scan Kode Dibawah ini
              </p>
              <img src="img/qr_gopay.png" alt="" width="75%" />
              <br />
              <p style={{ margin: "1rem" }}>Scan kode QR</p>
              <button
                id="showAlertBtn"
                className="btn btn-primary"
                onClick={SudahBayar}
              >
                Sudah Bayar
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="modalDana"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                QR Code GoPay
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-center">
              <p>
                Lakukan Donasi dengan <br /> Scan Kode Dibawah ini
              </p>
              <img src="img/qr_dana.png" alt="" width="75%" />
              <br />
              <p style={{ margin: "1rem" }}>Scan kode QR</p>
              <button
                id="showAlertBtn"
                className="btn btn-primary"
                onClick={SudahBayar}
              >
                Sudah Bayar
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="modalShopee"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                QR Code GoPay
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-center">
              <p>
                Lakukan Donasi dengan <br /> Scan Kode Dibawah ini
              </p>
              <img src="img/qr_shopee.png" alt="" width="75%" />
              <br />
              <p style={{ margin: "1rem" }}>Scan kode QR</p>
              <button
                id="showAlertBtn"
                className="btn btn-primary"
                onClick={SudahBayar}
              >
                Sudah Bayar
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LanjutDonasi;

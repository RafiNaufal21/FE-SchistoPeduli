import React from "react";
import "../css/relawan.css"
import "../lib/animate/animate.css"
const Causes = () => {
  return (
    <>
    <div className="container-xxl bg-light my-5 py-5">
      <div className="container py-5">
        <div
          className="text-center mx-auto mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "500px" }}
        >
          <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">
            Informasi
          </div>
          <h1 className="display-6 mb-5">Berbagai Bencana Alam</h1>
        </div>
        <div className="row g-4 justify-content-center">
          {/* Repeat this block for each disaster */}
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="causes-item d-flex flex-column bg-white border-top border-5 border-primary rounded-top overflow-hidden h-100">
              <div className="text-center p-4 pt-0">
                <div className="d-inline-block bg-primary text-white rounded-bottom fs-5 pb-1 px-3 mb-4">
                  <small>Gempa Bumi</small>
                </div>
                <h5 class="mb-3">Sulawesi Tengah</h5>
                  <p>Pada 28 September 2018, pukul 18.02 WITA, gempa bermagnitudo 7,4  Palu dan Donggala, Sulawesi Tengah. Pusat gempa dilaporkan berada 26 km utara Donggala dan 80 km barat laut Kota Palu.</p>
                  <div class="causes-progress bg-light p-3 pt-2">
                  <p>KORBAN JIWA</p>
                  <div className="d-flex justify-content-between">
                    <p className="text-dark">
                      1.000 <small className="text-body">Jiwa</small>
                    </p>
                    <p className="text-dark">
                      10.000 <small className="text-body">jiwa</small>
                    </p>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "40%" }}
                    >
                      <span>2.045 jiwa</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="position-relative mt-auto">
                <img className="img-fluid" src="img/gempabumi.jpg" alt="" />
                <div className="causes-overlay">
                  <a className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#modalgempa">
                    Lebih Lanjut
                    <div className="d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2">
                      <i className="fa fa-arrow-right"></i>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Repeat this block for each disaster */}
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="causes-item d-flex flex-column bg-white border-top border-5 border-primary rounded-top overflow-hidden h-100">
              <div className="text-center p-4 pt-0">
                <div className="d-inline-block bg-primary text-white rounded-bottom fs-5 pb-1 px-3 mb-4">
                  <small>Tsunami</small>
                </div>
                <h5 className="mb-3">Sumatera Barat</h5>
                            <p>Gempa tektonik berkekuatan 7,2 skala richter (SR) melanda Kepulauan Mentawai, Sumatera Barat pada 25 Oktober 2010, katau tepat 11 tahun silam. Gempa bumi yang memicu gelombang tsunami ini terjadi.</p>
                            <div className="causes-progress bg-light p-3 pt-2">
                                <p>KORBAN JIWA</p>
                                <div className="d-flex justify-content-between">
                                    <p className="text-dark">1.000 <small className="text-body">Jiwa</small></p>
                                    <p className="text-dark">10.000 <small className="text-body">jiwa</small></p>
                                </div>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "15%" }}
                    >
                      <span>509 jiwa</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="position-relative mt-auto">
                <img className="img-fluid" src="img/tsunami.jpg" alt="" />
                <div className="causes-overlay">
                  <a className="btn btn-outline-primary"data-bs-toggle="modal" data-bs-target="#modaltsunami">
                    Lebih Lanjut
                    <div className="d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2">
                      <i className="fa fa-arrow-right"></i>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="causes-item d-flex flex-column bg-white border-top border-5 border-primary rounded-top overflow-hidden h-100">
              <div className="text-center p-4 pt-0">
                <div className="d-inline-block bg-primary text-white rounded-bottom fs-5 pb-1 px-3 mb-4">
                  <small>Tanah Longsor</small>
                </div>
                <h5 className="mb-3">Jawa Tengah</h5>
                            <p>Telah terjadi banjir dan tanah longsor di Kecamatan Tembalang dan Banyumanik Kota Semarang pada tanggal 06 Januari 2023 pukul 15.00 WIB. Akibat kejadian ini 42 Kepala keluarga terdampak banjir dengan ketinggian air 50-250 cm.</p>
                            <div className="causes-progress bg-light p-3 pt-2">
                                <p>KERUSAKAN RUMAH</p>
                                <div className="d-flex justify-content-between">
                                    <p className="text-dark">100 <small className="text-body">Rumah</small></p>
                                    <p className="text-dark">1.000 <small className="text-body">Rumah</small></p>
                                </div>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "25%" }}
                    >
                      <span>128 Rumah</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="position-relative mt-auto">
                <img className="img-fluid" src="img/longsor.jpg" alt="" />
                <div className="causes-overlay">
                  <a className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#modallongsor">
                    Lebih Lanjut
                    <div className="d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2">
                      <i className="fa fa-arrow-right"></i>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="causes-item d-flex flex-column bg-white border-top border-5 border-primary rounded-top overflow-hidden h-100">
              <div className="text-center p-4 pt-0">
                <div className="d-inline-block bg-primary text-white rounded-bottom fs-5 pb-1 px-3 mb-4">
                  <small>Banjir</small>
                </div>
                <h5 className="mb-3">Jawa Tengah</h5>
                            <p>Kawasan Kecamatan Margadana, Kota Tegal, terendam banjir. Akibatnya sebanyak 450 rumah terendam banjir dan 182 warga terpaksa mengungsi.</p>
                            <div className="causes-progress bg-light p-3 pt-2">
                                <p>KERUSAKAN RUMAH</p>
                                <div className="d-flex justify-content-between">
                                    <p className="text-dark">100 <small className="text-body">Rumah</small></p>
                                    <p className="text-dark">1.000 <small className="text-body">Rumah</small></p>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "50%" }}
                    >
                      <span>450 Rumah</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="position-relative mt-auto">
                <img className="img-fluid" src="img/banjir.jpg" alt="" />
                <div className="causes-overlay">
                  <a className="btn btn-outline-primary"data-bs-toggle="modal" data-bs-target="#modalbanjir">
                    Lebih Lanjut
                    <div className="d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2">
                      <i className="fa fa-arrow-right"></i>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="causes-item d-flex flex-column bg-white border-top border-5 border-primary rounded-top overflow-hidden h-100">
              <div className="text-center p-4 pt-0">
                <div className="d-inline-block bg-primary text-white rounded-bottom fs-5 pb-1 px-3 mb-4">
                  <small>Gunung Meletus</small>
                </div>
                <h5 className="mb-3">Bali</h5>
                            <p>Gunung Agung terletak di Bali, Indonesia, dan meletus terakhir kali pada 2017. Letusan tersebut menyebabkan evakuasi.</p>
                            <div className="causes-progress bg-light p-3 pt-2">
                                <p>EVAKUASI WARGA</p>
                                <div className="d-flex justify-content-between">
                                    <p className="text-dark">10.000 <small className="text-body">Warga</small></p>
                                    <p className="text-dark">100.000 <small className="text-body">Warga</small></p>
                                </div>
                                <div className="progress">
                                  <div
                      className="progress-bar"
                      role="progressbar"
                      aria-valuenow="90"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "50%" }}
                    >
                      <span>40.000 warga</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="position-relative mt-auto">
                <img className="img-fluid" src="img/gunungmeletus.jpg" alt="" />
                <div className="causes-overlay">
                  <a className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#modalgunungmeletus" >
                    Lebih Lanjut
                    <div className="d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2">
                      <i className="fa fa-arrow-right"></i>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

<div className="modal fade" id="modalgempa" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="modalgempa">Gempa Bumi (Sulawesi Tengah, Palu)</h1>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
            <img src="img/gempapalu.jpg" alt="" width="100%"/>
           <p> Pada 28 September 2018, pukul 18.02 WITA, gempa bermagnitudo 7,4 yang kemudian disusul dengan gelombang tsunami 5 meter menerjang Palu dan Donggala, Sulawesi Tengah. Pusat gempa dilaporkan berada 26 km utara Donggala dan 80 km barat laut Kota Palu.
            Berdasarkan data BNPB bahwa korban meninggal pada peristiwa itu mencapai 2.045 orang, didapati paling banyak ada di Palu sebesar 1.636 orang dan disusul Sigi kemudian Parigi. Sementara itu, korban yang mengungsi sebanyak 82.775 orang, dan 8.731 orang pengungsi berada di luar Sulawesi.
            Pusat Data dan Informasi Kegempaan Sulawesi Tengah mencatat kerugian akibat gempa dan tsunami di Palu pada 28 September 2018 lalu mencapai angka Rp18,48 triliun.
            Kota Palu menderita kerugian paling besar, yakni mencapai Rp8,3 triliun. Bagian pesisir Kota Palu hampir semuanya hancur, begitu juga daerah-daerah yang terjadi likuefaksi, seperti Petobo, Balaroa, dan Sibalya.
        </p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>

  <div class="modal fade" id="modaltsunami" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="modaltsunami">Tsunami (Sumatera Barat, Keulauan Mentawai)</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <img src="img/tsunamisumbar.jpg" alt="" width="100%"/>
           <p>
            Gempa bumi yang terjadi pada 25 Oktober 2010 memiliki kekuatan sekitar 7,2 skala Richter. Gempa ini terjadi di dasar laut, di sekitar 78 kilometer di sebelah selatan Pulau Pagai dan sekitar 10 kilometer di bawah permukaan laut. Guncangan hebat ini langsung terasa di pulau-pulau sekitarnya, termasuk Pulau Siberut dan Pulau Pagai.
            Setelah gempa, gelombang tsunami mengerikan muncul dan melanda pantai Mentawai dalam waktu singkat. Tsunami ini mencapai ketinggian hingga 3 meter, merusak banyak rumah, dan membanjiri permukiman penduduk di 35 dusun.
            Data BNPB mencatat sebanyak 509 orang meninggal, luka berat dan ringan 24 orang, 21 orang hilang, dan sebanyak 11.425 orang mengungsi. Daerah yang terdampak termasuk Desa Betu Monga, Desa Munte, dan Desa Bulasat di Kepulauan Mentawai.
           </p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>

  <div class="modal fade" id="modallongsor" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="modallongsor">Tanah Longsor (Jawa Tengah, Semarang))</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <img src="img/tanahlongsor.jpeg" alt="" width="100%"/>
           <p>
            Seorang warga tewas akibat tanah longsor di Kelurahan Pudakpayung, Banyumanik, Semarang. Korban tewas setelah tertimpa longsoran dan material rumahnya.
            Kapolrestabes Semarang Kombes Irwan Anwar mengatakan tanah longsor itu terjadi di Perum P4A Blok H-11 RT 09 RW 11 Kelurahan Pudakpayung sekitar pukul 14.30 WIB, Jumat (6/1). Saat itu kondisi cuaca hujan lebat.
            "Longsor menimpa sebuah rumah dan mengakibatkan satu orang meninggal dunia, (korban) pemilik rumah," kata Irwan lewat pesan singkat, Jumat (6/1/2023).
            Saat kejadian, Irwan menjelaskan, tetangga korban melihat tebing setinggi 25 meter longsor menimpa rumah korban. Saksi langsung mencari bantuan. Tim gabungan kemudian datang melakukan evakuasi.
            "Sekitar pukul 18.30 WIB, setelah dilaksanakan pembersihan material longsor di rumah itu, ditemukan korban dalam keadaan sudah meninggal dunia yang disebabkan tertimpa material longsor, tembok rumah, dan tanah yang berada di kamar belakang milik korban," jelas Irwan.
            Jasad korban bernama Agustinus Agung Ari Wibowo (37) itu kemudian dibawa ke rumah sakit. Sementara itu warga yang tinggal di sekitar lokasi juga dievakuasi karena dikhawatirkan terjadi longsor susulan.
           </p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>

  <div class="modal fade" id="modalbanjir" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="modalbanjir">Banjir (Jawa Tengah, Tegal)</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <img src="img/banjirtegal.jpeg" alt="" width="100%"/>
           <p>
            Kawasan Kecamatan Margadana, Kota Tegal, terendam banjir. Akibatnya sebanyak 450 rumah terendam banjir dan 182 warga terpaksa mengungsi.
            Banjir yang merendam permukiman warga di Kelurahan Sumur Panggang, Kecamatan Margadana. Banjir ini berasal dari meluapnya Sungai Kemiri yang melintas di wilayah Kecamatan Margadana.
            "Sampai saat ini ketinggian air mencapai 70 cm, dan merendam sekira 450 rumah yang berada di wilayah Kelurahan Sumurpanggang, untuk sementara itu. Wilayah lain yang terdampak masih terus dalam pendataan," kata Camat Margadana, Kota Tegal, Ary Budi Wibowo, saat dimintai konfirmasi, Kamis (2/3/2023).
           </p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>

  <div class="modal fade" id="modalgunungmeletus" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="modalgunungmeletus">Gunung Meletus (Bali, Gunung Agung)</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <img src="img/gunungagung.jpg" alt="" width="100%"/>
           <p>
            Gunung Agung di Karangasem, Bali kembali erupsi atau meletus pada Sabtu (23/12/2017). 
            Peristiwa ini terjadi sekitar pukul 11.57 Wita. Kepala Subbidang Mitigasi Bencana Geologi Wilayah Timur dari Pusat Vulkanologi dan Mitigasi Bencana Geologi (PVMBG) Devy Kamil mengatakan, erupsi kali ini ditandai semburan asap setinggi 2.500 meter dari puncak kawah. 
            Asap bahkan terlihat dari jarak belasan kilometer. Pekatnya asap menunjukan erupsi disertai semburan abu vulkanik. "Erupsi ketinggian kolom abu sekitar 2.500 meter," kata Devy. (Baca juga: Gunung Agung Kembali Pancarkan Sinar Merah dari Kawah) Berdasarkan laporan resmi PVMBG yang disiarkan secara periodik setiap enam jam, pada pukul 06.00 - 12.00 Wita tercatat satu kali gempa letusan dengan amplitudo 26 mm dan durasi 120 detik.
           </p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
  </>
  );
};

export default Causes;

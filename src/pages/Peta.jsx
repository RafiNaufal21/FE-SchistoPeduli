import { useEffect, useState } from 'react';
import Footer from '../fragments/Footer';
import Navbar from '../fragments/Navbar';
import Spinner from '../fragments/Spinner';
import SchistoChart from '../fragments/chart';
import axios from 'axios';
const dataStatistik = {
  'desa:wuasa': [
    { tahun: '2017', jumlah_kasus: '1' },
    { tahun: '2018', jumlah_kasus: '0' },
    { tahun: '2019', jumlah_kasus: '1' },
    { tahun: '2020', jumlah_kasus: '1' },
    { tahun: '2021', jumlah_kasus: '2' },
    { tahun: '2022', jumlah_kasus: '16' },
    { tahun: '2023', jumlah_kasus: '3' },
  ],
  'desa:watumaeta': [
    { tahun: '2017', jumlah_kasus: '8' },
    { tahun: '2018', jumlah_kasus: '4' },
    { tahun: '2019', jumlah_kasus: '0' },
    { tahun: '2020', jumlah_kasus: '0' },
    { tahun: '2021', jumlah_kasus: '5' },
    { tahun: '2022', jumlah_kasus: '13' },
    { tahun: '2023', jumlah_kasus: '2' },
  ],
  'desa:banyusari': [
    { tahun: '2017', jumlah_kasus: '5' },
    { tahun: '2018', jumlah_kasus: '2' },
    { tahun: '2019', jumlah_kasus: '0' },
    { tahun: '2020', jumlah_kasus: '0' },
    { tahun: '2021', jumlah_kasus: '0' },
    { tahun: '2022', jumlah_kasus: '5' },
    { tahun: '2023', jumlah_kasus: '0' },
  ],
  'desa:sedoa': [
    { tahun: '2017', jumlah_kasus: '11' },
    { tahun: '2018', jumlah_kasus: '4' },
    { tahun: '2019', jumlah_kasus: '0' },
    { tahun: '2020', jumlah_kasus: '3' },
    { tahun: '2021', jumlah_kasus: '0' },
    { tahun: '2022', jumlah_kasus: '17' },
    { tahun: '2023', jumlah_kasus: '3' },
  ],
  'desa:kaduwaa': [
    { tahun: '2017', jumlah_kasus: '8' },
    { tahun: '2018', jumlah_kasus: '1' },
    { tahun: '2019', jumlah_kasus: '0' },
    { tahun: '2020', jumlah_kasus: '0' },
    { tahun: '2021', jumlah_kasus: '1' },
    { tahun: '2022', jumlah_kasus: '5' },
    { tahun: '2023', jumlah_kasus: '14' },
  ],
  'desa:alitupu': [
    { tahun: '2017', jumlah_kasus: '14' },
    { tahun: '2018', jumlah_kasus: '7' },
    { tahun: '2019', jumlah_kasus: '0' },
    { tahun: '2020', jumlah_kasus: '4' },
    { tahun: '2021', jumlah_kasus: '5' },
    { tahun: '2022', jumlah_kasus: '38' },
    { tahun: '2023', jumlah_kasus: '21' },
  ],
  'desa:tamadue': [
    { tahun: '2017', jumlah_kasus: '30' },
    { tahun: '2018', jumlah_kasus: '8' },
    { tahun: '2019', jumlah_kasus: '5' },
    { tahun: '2020', jumlah_kasus: '4' },
    { tahun: '2021', jumlah_kasus: '8' },
    { tahun: '2022', jumlah_kasus: '39' },
    { tahun: '2023', jumlah_kasus: '18' },
  ],
  'desa:mekarsari': [
    { tahun: '2017', jumlah_kasus: '16' },
    { tahun: '2018', jumlah_kasus: '5' },
    { tahun: '2019', jumlah_kasus: '3' },
    { tahun: '2020', jumlah_kasus: '3' },
    { tahun: '2021', jumlah_kasus: '3' },
    { tahun: '2022', jumlah_kasus: '26' },
    { tahun: '2023', jumlah_kasus: '15' },
  ],
  'desa:maholo': [
    { tahun: '2017', jumlah_kasus: '8' },
    { tahun: '2018', jumlah_kasus: '2' },
    { tahun: '2019', jumlah_kasus: '2' },
    { tahun: '2020', jumlah_kasus: '1' },
    { tahun: '2021', jumlah_kasus: '4' },
    { tahun: '2022', jumlah_kasus: '22' },
    { tahun: '2023', jumlah_kasus: '15' },
  ],
  'desa:winowanga': [
    { tahun: '2017', jumlah_kasus: '25' },
    { tahun: '2018', jumlah_kasus: '8' },
    { tahun: '2019', jumlah_kasus: '1' },
    { tahun: '2020', jumlah_kasus: '3' },
    { tahun: '2021', jumlah_kasus: '5' },
    { tahun: '2022', jumlah_kasus: '28' },
    { tahun: '2023', jumlah_kasus: '19' },
  ],
  'desa:dodolo': [
    { tahun: '2017', jumlah_kasus: '17' },
    { tahun: '2018', jumlah_kasus: '7' },
    { tahun: '2019', jumlah_kasus: '1' },
    { tahun: '2020', jumlah_kasus: '3' },
    { tahun: '2021', jumlah_kasus: '5' },
    { tahun: '2022', jumlah_kasus: '10' },
    { tahun: '2023', jumlah_kasus: '10' },
  ],
  'desa:watutau': [
    { tahun: '2017', jumlah_kasus: '5' },
    { tahun: '2018', jumlah_kasus: '0' },
    { tahun: '2019', jumlah_kasus: '0' },
    { tahun: '2020', jumlah_kasus: '1' },
    { tahun: '2021', jumlah_kasus: '3' },
    { tahun: '2022', jumlah_kasus: '3' },
    { tahun: '2023', jumlah_kasus: '6' },
  ],
  'desa:wanga': [
    { tahun: '2017', jumlah_kasus: '2' },
    { tahun: '2018', jumlah_kasus: '1' },
    { tahun: '2019', jumlah_kasus: '4' },
    { tahun: '2020', jumlah_kasus: '0' },
    { tahun: '2021', jumlah_kasus: '1' },
    { tahun: '2022', jumlah_kasus: '4' },
    { tahun: '2023', jumlah_kasus: '22' },
  ],
  'desa:kalemago': [
    { tahun: '2017', jumlah_kasus: '11' },
    { tahun: '2018', jumlah_kasus: '4' },
    { tahun: '2019', jumlah_kasus: '1' },
    { tahun: '2020', jumlah_kasus: '0' },
    { tahun: '2021', jumlah_kasus: '5' },
    { tahun: '2022', jumlah_kasus: '9' },
    { tahun: '2023', jumlah_kasus: '9' },
  ],
  'desa:siliwanga': [
    { tahun: '2017', jumlah_kasus: '2' },
    { tahun: '2018', jumlah_kasus: '0' },
    { tahun: '2019', jumlah_kasus: '0' },
    { tahun: '2020', jumlah_kasus: '0' },
    { tahun: '2021', jumlah_kasus: '0' },
    { tahun: '2022', jumlah_kasus: '9' },
    { tahun: '2023', jumlah_kasus: '1' },
  ],
  'desa:betue': [
    { tahun: '2017', jumlah_kasus: '0' },
    { tahun: '2018', jumlah_kasus: '0' },
    { tahun: '2019', jumlah_kasus: '0' },
    { tahun: '2020', jumlah_kasus: '0' },
    { tahun: '2021', jumlah_kasus: '0' },
    { tahun: '2022', jumlah_kasus: '0' },
    { tahun: '2023', jumlah_kasus: '0' },
  ],
  'desa:torire': [
    { tahun: '2017', jumlah_kasus: '1' },
    { tahun: '2018', jumlah_kasus: '0' },
    { tahun: '2019', jumlah_kasus: '0' },
    { tahun: '2020', jumlah_kasus: '0' },
    { tahun: '2021', jumlah_kasus: '1' },
    { tahun: '2022', jumlah_kasus: '2' },
    { tahun: '2023', jumlah_kasus: '0' },
  ],
};
const Peta = () => {
  // Function to extract data for each desa per year
  const getCasesForYear = (desa, year) => {
    const record = dataStatistik[desa].find((item) => item.tahun === year);
    return record ? record.jumlah_kasus : '-';
  };

  const desaNames = Object.keys(dataStatistik);

  return (
    <>
      <Spinner />
      <Navbar />
      <div className="tentang"></div>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div
                className="position-relative overflow-hidden h-100"
                style={{ minHeight: '400px' }}>
                <img
                  className="position-absolute w-100 h-100 pt-5 pe-5"
                  src="img/Oncomelania_hupensis.jpg"
                  alt=""
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="h-100">
                <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">
                  Kawasan Rawan Keong Oncomelania
                </div>
                <h1 className="display-6 mb-5">Apa itu Keong Oncomelania ?</h1>
                <div className="bg-light border-bottom border-5 border-primary rounded p-4 mb-4">
                  <p className="text-dark mb-2">
                    Tahukah kamu kalau ada penyakit yang hanya ditemukan di
                    provinsi Sulawesi Tengah?
                  </p>
                  <p>
                    Schistosomiasis atau lebih dikenal dengan demam keong oleh
                    masyarakat setempat merupakan penyakit endemis yang menjadi
                    ancaman bagi masyarakat yang tinggal di sekitar Lembah Napu
                    dan Bada di Kabupaten Poso, dan Lembah Lindu di Kabupaten
                    Sigi. Penyakit ini disebabkan oleh cacing Schistosoma
                    Japonicum, dengan hospes perantara keong Oncomelania
                    hupensis lindoensis. Cacing ini bisa menembus permukaan
                    kulit dan menyebar ke organ tubuh khususnya ke hati melalui
                    pembuluh darah. Tidak hanya pada manusia, cacing ini juga
                    menembus kulit hewan seperti tikus dan binatang ternak. Hal
                    ini juga menjadikan hewan tersebut sebagai media penyebaran
                    penyakit melalui tinjanya. Daerah genangan air seperti
                    sawah, rawa-rawa dan daerah sekitar danau merupakan habitat
                    keong sehingga infeksi berulang dapat terus terjadi pada
                    warga yang melakukan aktivitas di daerah fokus keong.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-xxl">
        <h2 className="blog-grid-title-lg mb-3" style={{ color: 'black' }}>
          JUMLAH KASUS SCHISTOSOMIASIS DI NAPU TAHUN 2017-2023
        </h2>

        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>No</th>
              <th>Desa</th>
              <th>2017</th>
              <th>2018</th>
              <th>2019</th>
              <th>2020</th>
              <th>2021</th>
              <th>2022</th>
              <th>2023</th>
            </tr>
          </thead>
          <tbody>
            {desaNames.map((desa, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{desa.replace('desa:', '')}</td>
                <td>{getCasesForYear(desa, '2017')}</td>
                <td>{getCasesForYear(desa, '2018')}</td>
                <td>{getCasesForYear(desa, '2019')}</td>
                <td>{getCasesForYear(desa, '2020')}</td>
                <td>{getCasesForYear(desa, '2021')}</td>
                <td>{getCasesForYear(desa, '2022')}</td>
                <td>{getCasesForYear(desa, '2023')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <SchistoChart />
      <center>
        <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mt-2 mb-4">
          Peta Fokus Keong Di Lore Utara
        </div>
      </center>

      <div className="container-fluid bg-light overflow-hidden px-lg-0">
        <div className="container contact px-lg-0">
          <div className="row g-0 mx-lg-0">
            <div className="peta">
              <div className="map">
                <iframe
                  src="https://www.google.com/maps/d/u/0/embed?mid=1jg4NJl5DR2XqcRNhtZ_WbtKO-E_cDTQ&noprof=1&"
                  width="100%"
                  height="600"></iframe>
              </div>
              <div className="teks">
                <h2>Keterangan</h2>
                <br />

                <h4 style={{ fontSize: 'large' }}>
                  {' '}
                  <img
                    src="img/icontsunami.png"
                    style={{
                      width: '30px',
                      height: '30px',
                      borderRadius: '70%',
                    }}
                    alt=""
                  />{' '}
                  Tsunami
                </h4>
                <h4 style={{ fontSize: 'large', justifyContent: 'right' }}>
                  {' '}
                  <img
                    src="img/icongempabumi.png"
                    style={{
                      width: '30px',
                      height: '30px',
                      borderRadius: '70%',
                    }}
                    alt=""
                  />{' '}
                  Gempa Bumi
                </h4>
                <h4 style={{ fontSize: 'large', justifyContent: 'right' }}>
                  {' '}
                  <img
                    src="img/icongunung.png"
                    style={{
                      width: '30px',
                      height: '30px',
                      borderRadius: '70%',
                    }}
                    alt=""
                  />{' '}
                  Gunung Meletus
                </h4>
                <h4 style={{ fontSize: 'large', justifyContent: 'right' }}>
                  {' '}
                  <img
                    src="img/icontanahlongsor.png"
                    style={{
                      width: '30px',
                      height: '30px',
                      borderRadius: '70%',
                    }}
                    alt=""
                  />{' '}
                  Tanah Longsor
                </h4>
                <h4 style={{ fontSize: 'large', justifyContent: 'right' }}>
                  {' '}
                  <img
                    src="img/iconbanjir.jpg"
                    style={{
                      width: '30px',
                      height: '30px',
                      borderRadius: '70%',
                    }}
                    alt=""
                  />{' '}
                  Banjir
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Peta;

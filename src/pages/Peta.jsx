import { useEffect, useState } from 'react';
import Footer from '../fragments/Footer';
import Navbar from '../fragments/Navbar';
import Spinner from '../fragments/Spinner';
import axios from 'axios';
import { MapContainer, TileLayer, Polygon, Popup } from 'react-leaflet';

const getStatistik = async() =>{
  try {
    const response = await axios.get('http://localhost:1945/statistik')
    return response
} catch (error) {
    return error
    }
}

const Peta = () => {
  // const [gempaData, setGempaData] = useState({
  //   title: 'Gempa Terkini',
  //   status: 'success',
  //   gempa_terkini: [],
  // });

  // useEffect(() => {
  //   const getGempa = async () => {
  //     try {
  //       await axios.get('http://localhost:5055/terkini').then((res) => {
  //         setGempaData(res.data);
  //       });
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getGempa();
  // });
    const [statistik,setStatistik] = useState(null)
    const [lokasi,setLokasi] = useState([])


    const fetchData = async()=>{
      try {
        const res = await getStatistik();
        setStatistik(res?.data?.data_statistik);
        console.log(res?.data?.data_statistik)
      } catch (error) {
        console.log(error);
      }
    }
    useEffect(() => {
      const fetchLokasi = async()=>{
        try {
          const res = await fetch('http://localhost:1945/lokasi');
          setPolygons(res);
      } catch (error) {
          console.error('Error fetching polygons:', error);
      }
      }
      fetchData();
      fetchLokasi();
    }, []);
    if (!statistik) {
      return <div>Loading...</div>;
    }
    console.log(lokasi)
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

        {statistik && (
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
      {Object.keys(statistik).map((desaKey, index) => {
        const data = statistik[desaKey]; // Ambil data untuk desa tertentu
        const jumlahKasus = {}; // Inisialisasi objek untuk menyimpan jumlah kasus per tahun

        // Mengisi jumlah kasus per tahun
        data.forEach(item => {
          jumlahKasus[item.tahun] = item.jumlah_kasus; // Sesuaikan dengan struktur data
        });

        return (
          <tr key={desaKey}>
            <td>{index + 1}</td>
            <td>{desaKey.replace('desa:', '')}</td> {/* Menghilangkan prefix 'desa:' */}
            <td>{jumlahKasus[2017] || 0}</td>
            <td>{jumlahKasus[2018] || 0}</td>
            <td>{jumlahKasus[2019] || 0}</td>
            <td>{jumlahKasus[2020] || 0}</td>
            <td>{jumlahKasus[2021] || 0}</td>
            <td>{jumlahKasus[2022] || 0}</td>
            <td>{jumlahKasus[2023] || 0}</td>
          </tr>
        );
      })}
    </tbody>
  </table>
)}
         {/* : (
          <p>Error fetching earthquake data</p>
        ) */}
      </div>

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
                <MapContainer center={[-1.3980, 120.3267]} zoom={13} style={{ height: '100vh', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {lokasi.map((polygon) => {
                // Mengonversiastring WKT menjadi array koordinat
                const coords = polygon.kordinat.split(',').map(coord => {
                    const [lng, lat] = coord.trim().split(' ').map(Number);
                    return [lat, lng]; // Leaflet menggunakan format [lat, lng]
                });
                return (
                    <Polygon key={polygon.id} positions={coords} color="blue">
                        <Popup>
                        
                            <strong>{polygon.nama}</strong><br />
                            <h1>titik kordinat : {polygon.kordinat}</h1>
                            
                        </Popup>
                    </Polygon>
                );
            })}
        </MapContainer>
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

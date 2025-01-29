import { useEffect, useState } from "react";
import Footer from "../fragments/Footer";
import Navbar from "../fragments/Navbar";
import Spinner from "../fragments/Spinner";
import SchistoChart from "../fragments/chart";
import axios from "axios";
import {
  MapContainer,
  TileLayer,
  Polygon,
  Popup,
  Polyline,
  Marker,
  Tooltip,
} from "react-leaflet"; // Impor Polyline

const getStatistik = async () => {
  try {
    const response = await axios.get("https://3e21-180-247-46-208.ngrok-free.app/statistik",{
      headers: {
        "ngrok-skip-browser-warning": "69420",
        },
    });
    return response.data; // Kembalikan data langsung
  } catch (error) {
    console.error("Error fetching statistik:", error);
    return null; // Kembali null jika terjadi error
  }
};

const Peta = () => {
  const [statistik, setStatistik] = useState(null);
  const [lokasi, setLokasi] = useState([]);
  const [desa, setDesa] = useState([]);

  // Contoh data untuk Polyline (koordinat dapat disesuaikan)
  // const polylinePositions = [
  //   [-1.396505, 120.314869],
  //   [-1.398, 120.316],
  //   [-1.397, 120.318],
  // ];

  const fetchData = async () => {
    const res = await getStatistik();
    setStatistik(res?.data_statistik);
    console.log(res);
  };

  useEffect(() => {
    const fetchLokasi = async () => {
      try {
        const resp = await fetch("https://3e21-180-247-46-208.ngrok-free.app/lokasi",{
          headers: {
            "ngrok-skip-browser-warning": "69420",
            },
        });
        const res = await resp.json();
        setLokasi(res);
      } catch (error) {
        console.error("Error fetching polygons:", error);
      }
    };
    const fetchDesa = async () => {
      try {
        const res = await fetch("https://3e21-180-247-46-208.ngrok-free.app/jml",{
          headers: {
            "ngrok-skip-browser-warning": "69420",
            },
        });
        const resp = await res.json();
        setDesa(resp.desa);
      } catch (error) {
        console.log("error : ", error);
      }
    };
    fetchDesa();
    fetchData();
    fetchLokasi();
  }, []);

  if (!statistik) {
    return <div>Loading...</div>;
  }

  console.log("desa: ", desa);
  // Hitung total kasus
  const totalKasus = {};
  Object.keys(statistik).forEach((desaKey) => {
    const data = statistik[desaKey];
    console.log("object", data);
    data.forEach((item) => {
      totalKasus[item.tahun] =
        (totalKasus[item.tahun] || 0) + Number(item.jumlah_kasus);
    });
  });

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
                style={{ minHeight: "400px" }}
              >
                <img
                  className="position-absolute w-100 h-100 pt-5 pe-5"
                  src="img/Oncomelania_hupensis.jpg"
                  alt=""
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="h-100">
                <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">
                  Kawasan Rawan Keong Oncomelania
                </div>
                <h1 className="display-6 mb-5">Apa itu Keong Oncomelania?</h1>
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
        <h2 className="blog-grid-title-lg mb-3" style={{ color: "black" }}>
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
                const data = statistik[desaKey];
                const jumlahKasus = {};

                data.forEach((item) => {
                  jumlahKasus[item.tahun] = item.jumlah_kasus;
                });

                return (
                  <tr key={desaKey}>
                    <td>{index + 1}</td>
                    <td>{desaKey.replace("desa:", "")}</td>
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
              <tr>
                <td colSpan="2" style={{ fontWeight: "bold" }}>
                  <strong>Total Napu</strong>
                </td>
                <td>{totalKasus[2017] || 0}</td>
                <td>{totalKasus[2018] || 0}</td>
                <td>{totalKasus[2019] || 0}</td>
                <td>{totalKasus[2020] || 0}</td>
                <td>{totalKasus[2021] || 0}</td>
                <td>{totalKasus[2022] || 0}</td>
                <td>{totalKasus[2023] || 0}</td>
              </tr>
            </tbody>
          </table>
        )}
      </div>

      <SchistoChart />
      <div className="container-fluid bg-light overflow-hidden px-lg-0">
        <div className="contact px-lg-0">
          <div className="row g-0 mx-lg-0">
            <center>
              <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mt-2 mb-4">
                Peta Fokus Keong Di Lore Utara
              </div>
            </center>
    a        <MapContainer
              center={[-1.348673815442008, 120.32989150111356]}
              zoom={11}
              style={{ height: "70vh", width: "70%", margin: "0 auto" }}
            >
              <TileLayer
                // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url='https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibmF1ZmFsaGFtYmFsaTY1IiwiYSI6ImNtMnd4eWdlZDBidjYyanBwaHJnZ3FrbHAifQ.mJdw4Ew-5zOyObCXR8akhg'
                attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors,
                            <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>,
                            Imagery <a href="https://www.mapbox.com/">Mapbox</a>'
                id='mapbox/satellite-streets-v12'
              />

              {/* untuk titik desa */}
              {desa.map((desa) => {
                const coords = desa.kordinat
                  .replace("POLYGON((", "")
                  .replace("))", "")
                  .split(",")
                  .map((coord) => {
                    const [lng, lat] = coord.trim().split(" ").map(Number);
                    return [lat, lng]; // Leaflet menggunakan format [lat, lng]
                  });

                //algortima decision tree untuk pengelompokkan desa dengan titik keong terbanyak
                function getColorDecisionTree(jumlahKordinat) {
                  if (jumlahKordinat > 30) {
                    return "red";
                  } else if (jumlahKordinat > 20) {
                    return "orange";
                  } else if (jumlahKordinat > 10) {
                    return "yellow";
                  } else {
                    return "green";
                  }
                }
                return (
                  <Polygon
                    key={desa.id}
                    positions={coords}
                    color={getColorDecisionTree(desa.jumlah_kordinat)}
                  >
                    <Tooltip permanent>
                      <strong>{desa.nama_desa}</strong>
                    </Tooltip>
                    <Popup>
                      <strong>Desa {desa.nama_desa}</strong>
                      <p>
                        Jumlah titik keong sebanyak {desa.jumlah_kordinat} titik
                      </p>
                    </Popup>
                  </Polygon>
                );
              })}
              {lokasi.map((lokasi) => {
                const [lng, lat] = lokasi.kordinat.split(" ").map(Number);
                // Cek apakah lng dan lat valid
                if (isNaN(lng) || isNaN(lat)) {
                  console.error("Koordinat tidak valid:", lokasi.kordinat);
                  return null; // Kembalikan null jika koordinat tidak valid
                }
                return (
                  <Marker key={lokasi.id} position={[lat, lng]}>
                    <Popup>
                      <strong>{lokasi.nama}</strong>
                      <br />
                      <p>titik kordinat : {lokasi.kordinat}</p>
                    </Popup>
                  </Marker>
                );
              })}
           
  
            </MapContainer>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Peta;
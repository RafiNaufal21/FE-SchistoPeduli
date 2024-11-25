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
    const response = await axios.get("http://localhost:1945/statistik");
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
  };

  useEffect(() => {
    const fetchLokasi = async () => {
      try {
        const resp = await fetch("http://localhost:1945/lokasi");
        const res = await resp.json();
        setLokasi(res);
      } catch (error) {
        console.error("Error fetching polygons:", error);
      }
    };
    const fetchDesa = async () => {
      try {
        const res = await fetch("http://localhost:1945/jml");
        const resp = await res.json();
        setDesa(resp);
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
        <div className="container contact px-lg-0">
          <div className="row g-0 mx-lg-0">
            <center>
              <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mt-2 mb-4">
                Peta Fokus Keong Di Lore Utara
              </div>
            </center>
            <MapContainer
              center={[-1.396505, 120.314869]}
              zoom={13}
              style={{ height: "100vh", width: "70%", margin: "0 auto" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />

              {desa.map((desa) => {
                const coords = desa.kordinat
                  .replace("POLYGON((", "")
                  .replace("))", "")
                  .split(",")
                  .map((coord) => {
                    const [lng, lat] = coord.trim().split(" ").map(Number);
                    return [lat, lng]; // Leaflet menggunakan format [lat, lng]
                  });
                const centroid = coords.length
                  ? [
                      coords.reduce((sum, coord) => sum + coord[0], 0) /
                        coords.length,
                      coords.reduce((sum, coord) => sum + coord[1], 0) /
                        coords.length,
                    ]
                  : [0, 0]; // Jika tidak ada koordinat, gunakan 0,0

                return (
                  <Polygon key={desa.id} positions={coords} color="blue">
                    <Tooltip permanent>
                      <strong>{desa.nama_desa}</strong>
                    </Tooltip>
                    <Popup>
                      <strong>jumlah titik keong di desa {desa.nama_desa} sebanyak {desa.jumlah_kordinat} titik</strong>
                    </Popup>
                  </Polygon>
                );
              })}

              {Object.entries(
                lokasi.reduce((acc, polygon) => {
                  const coords = polygon.kordinat
                    .replace("POLYGON((", "")
                    .replace("))", "")
                    .split(",")
                    .map((coord) => {
                      const [lng, lat] = coord.trim().split(" ").map(Number);
                      return [lat, lng];
                    });

                  const centroid = coords.length
                    ? [
                        coords.reduce((sum, coord) => sum + coord[0], 0) /
                          coords.length,
                        coords.reduce((sum, coord) => sum + coord[1], 0) /
                          coords.length,
                      ]
                    : [0, 0];

                  if (!acc[polygon.nama]) {
                    acc[polygon.nama] = {
                      coords,
                      centroid,
                      jenis: polygon.jenis,
                    };
                  } else {
                    acc[polygon.nama].coords.push(...coords);
                  }
                  return acc;
                }, {})
              ).map(([nama, group]) => {
                if (group.jenis === "poligon") {
                  return (
                    <Polygon key={nama} positions={group.coords} color="blue">
                      <Marker position={group.centroid}>
                        <Popup>
                          <strong>{nama}</strong>
                        </Popup>
                      </Marker>
                    </Polygon>
                  );
                } else if (group.jenis === "polyline") {
                  return (
                    <Polyline key={nama} positions={group.coords} color="blue">
                      <Marker position={group.centroid}>
                        <Popup>
                          <strong>{nama}</strong>
                        </Popup>
                      </Marker>
                    </Polyline>
                  );
                }
                return null;
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

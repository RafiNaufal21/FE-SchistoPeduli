import React, { useState, useEffect } from 'react';
import ApexCharts from 'react-apexcharts';
import axios from 'axios';

const SchistoColumnChart = () => {
  const [chartOptions, setChartOptions] = useState({});
  const [chartSeries, setChartSeries] = useState([]);
  const [dataStatistik, setStatistik] = useState(null);

  const getStatistik = async () => {
    try {
      const response = await axios.get('http://localhost:1945/statistik');
      console.log("Fetched data:", response.data);
      return response.data; // Kembalikan data langsung
    } catch (error) {
      console.error('Error fetching statistik:', error);
      return null; // Kembali null jika terjadi error
    }
  };

  const fetchData = async () => {
    const res = await getStatistik();
    setStatistik(res?.data_statistik); // Simpan data statistik ke state
  };

  useEffect(() => {
    fetchData(); // Panggil fungsi ambil data saat komponen dimuat
  }, []);

  useEffect(() => {
    if (dataStatistik) {
      // Pastikan dataStatistik tidak null sebelum memprosesnya
      const years = dataStatistik['desa:wuasa'].map((item) => item.tahun);

      // Extract jumlah kasus for each desa (sumbu Y)
      const seriesData = Object.keys(dataStatistik).map((desa) => ({
        name: desa.replace('desa:', ''), // Nama desa untuk legend
        data: dataStatistik[desa].map((item) => Number(item.jumlah_kasus)), // Data jumlah kasus per tahun
      }));

      // Set chart options and series
      setChartOptions({
        chart: {
          type: 'bar', // Tetap menggunakan 'bar'
          height: 350,
        },
        xaxis: {
          categories: years, // Tahun sebagai kategori di sumbu X
        },
        title: {
          text: 'KASUS SCHISTOSOMIASIS DI NAPU (2017-2023) - Column Chart',
          align: 'center',
        },
        yaxis: {
          title: {
            text: 'Jumlah Kasus',
          },
        },
        legend: {
          position: 'top',
        },
        plotOptions: {
          bar: {
            horizontal: false, // Pastikan horizontal diatur ke false untuk column chart
            columnWidth: '70%', // Lebar kolom, bisa disesuaikan
          },
        },
      });

      setChartSeries(seriesData);
    }
  }, [dataStatistik]); // Tambahkan dataStatistik sebagai dependensi

  return (
    <div>
      <div className="container-fluid bg-light overflow-hidden px-lg-0">
        <div className="container contact px-lg-0">
          <div className="row g-0 mx-lg-0">
            <ApexCharts
              options={chartOptions}
              series={chartSeries}
              type="bar" // Masih menggunakan 'bar' karena column chart adalah variasi dari bar chart
              height={350}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchistoColumnChart;
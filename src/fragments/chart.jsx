import React, { useState, useEffect } from 'react';
import ApexCharts from 'react-apexcharts';

// Data kasus schistosomiasis
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
const SchistoColumnChart = () => {
  const [chartOptions, setChartOptions] = useState({});
  const [chartSeries, setChartSeries] = useState([]);

  useEffect(() => {
    // Extract years (sumbu X)
    const years = dataStatistik['desa:wuasa'].map((item) => item.tahun);

    // Extract jumlah kasus for each desa (sumbu Y)
    const seriesData = Object.keys(dataStatistik).map((desa) => {
      return {
        name: desa.replace('desa:', ''), // Nama desa untuk legend
        data: dataStatistik[desa].map((item) => item.jumlah_kasus), // Data jumlah kasus per tahun
      };
    });

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
  }, []);

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
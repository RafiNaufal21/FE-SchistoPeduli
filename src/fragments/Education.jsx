import React from 'react';
import Button from '../components/button/button';
const edukasi = [
  {
    id: 'modal1',
    title: 'Apa Itu Schistosomiasis',
    icon: 'img/icon5.png', // Gambar kecil (ikon) untuk tampilan awal
    modalImage: 'img/schisto.png', // Gambar besar untuk ditampilkan di modal
    content:
      'Schistosomiasis adalah penyakit tropis yang disebabkan oleh infeksi parasit cacing dari genus Schistosoma. Penyakit ini dikenal juga sebagai demam siput karena parasit ini hidup di dalam siput air tawar, yang melepaskan larva ke dalam air. Manusia terinfeksi ketika larva cacing masuk ke tubuh melalui kulit saat melakukan aktivitas di air yang terkontaminasi, seperti berenang atau mencuci. Penyakit ini dapat mempengaruhi organ-organ penting, seperti hati, usus, kandung kemih, dan sistem peredaran darah. Schistosomiasis adalah masalah kesehatan serius di banyak daerah pedesaan di negara berkembang, termasuk di Indonesia, terutama di wilayah endemik seperti Sulawesi.',
  },
  {
    id: 'modal2',
    title: 'Bagaimana Schistosomiasis Menyebar?',
    icon: 'img/icon4.png', // Gambar kecil
    modalImage: 'img/penyebaran.jpg', // Gambar besar
    content:
      'Penyebaran schistosomiasis terjadi melalui siklus yang melibatkan manusia dan siput air tawar. Cacing dewasa yang hidup di tubuh manusia bertelur, dan telur-telur ini keluar dari tubuh melalui urin atau feses. Ketika telur-telur ini mencapai air tawar, mereka menetas menjadi larva yang kemudian menginfeksi siput air tawar. Siput yang terinfeksi akan melepaskan larva yang disebut cercaria ke dalam air. Larva ini mampu menembus kulit manusia ketika orang melakukan aktivitas di air yang terkontaminasi. Setelah masuk ke tubuh, larva berkembang menjadi cacing dewasa yang kemudian menyebabkan penyakit.',
  },
  {
    id: 'modal3',
    title: 'Apa Gejala dan Bahayanya?',
    icon: 'img/icon3.png', // Gambar kecil
    modalImage: 'img/gejala.jpeg', // Gambar besar
    content:
      'Gejala schistosomiasis bisa bervariasi tergantung pada tahap infeksi dan bagian tubuh yang terpengaruh. Gejala awal mungkin ringan atau tidak terasa, seperti ruam kulit di tempat masuknya larva. Namun, setelah beberapa minggu, gejala yang lebih serius bisa muncul, seperti demam, menggigil, sakit perut, diare berdarah, atau urin berdarah. Dalam jangka panjang, infeksi kronis dapat menyebabkan kerusakan organ-organ penting seperti hati dan kandung kemih, serta bisa mengakibatkan komplikasi yang lebih serius seperti anemia, malnutrisi, dan bahkan kematian. Oleh karena itu, kesadaran akan gejala-gejala ini penting agar masyarakat dapat mendeteksi infeksi lebih awal.',
  },
  {
    id: 'modal4',
    title: 'Bagaimana Cara Mencegah dan Mengobati Schistosomiasis?',
    icon: 'img/icon5.png', // Gambar kecil
    modalImage: 'img/keongoncom.jpeg', // Gambar besar
    content:
      'Pencegahan schistosomiasis melibatkan tindakan sederhana yang dapat dilakukan oleh masyarakat, seperti menghindari kontak langsung dengan air yang berpotensi terkontaminasi, menggunakan air yang bersih untuk mandi atau mencuci, dan memastikan sumber air minum terjaga dari pencemaran. Edukasi tentang kebersihan dan sanitasi juga sangat penting, karena pengelolaan limbah yang baik dapat mencegah telur cacing mencapai air tawar. Untuk pengobatan, schistosomiasis dapat diatasi dengan menggunakan obat antiparasit seperti praziquantel, yang sangat efektif dalam membunuh cacing dewasa di dalam tubuh. Namun, pencegahan melalui edukasi dini tetap merupakan langkah terbaik untuk menekan penyebaran penyakit ini.',
  },
];

const Education = () => {
  return (
    <>
      {/* Edukasi Schistosomiasis */}
      <div className="text-center">
        <div
          className="bg-primary mb-3 mx-auto"
          style={{ width: '60px', height: '2px' }}></div>
        <h1 className="display-5 mb-5" id="edukasi">
          Edukasi Schistosomiasis
        </h1>
      </div>

      <div className="row g-0 service-row">
        {edukasi.map((modal, index) => (
          <div
            key={index}
            className="col-md-6 col-lg-3 wow fadeIn"
            data-wow-delay={`${index * 0.2}s`}>
            <div className="service-item border h-100 p-5">
              <center>
                <div
                  className="btn-square bg-light rounded-circle mb-4"
                  style={{ width: '64px', height: '64px' }}>
                  <img className="img-fluid" src={modal.icon} alt="Icon" />
                </div>
              </center>
              <center>
                <h4 className="mb-3">{modal.title}</h4>
              </center>
              <center>
                <p className="mb-4" style={{ textAlign: 'justify' }}>
                  {modal.content.substring(0, 100)}...
                </p>
              </center>
              <center>
                <a
                  className="bton bton-outline-primary px-3"
                  href=""
                  data-bs-toggle="modal"
                  data-bs-target={`#${modal.id}`}>
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
          id={modal.id}
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true">
          <div className="modal-dialog modal-md" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{modal.title}</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <center>
                  <div className="modal-image mb-4">
                    <img
                      className="img-fluid"
                      src={modal.modalImage}
                      alt="Modal Image"
                      style={{ maxWidth: '100%' }}
                    />
                  </div>
                </center>
                <p style={{ textAlign: 'justify' }}>{modal.content}</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal">
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

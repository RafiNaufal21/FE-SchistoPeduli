import React, { useEffect } from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'owl.carousel';
import '../css/style.css'; // Import any additional styles

const testimonials = [
  {
    id: 1,
    imgSrc: 'img/testimonial-1.jpg',
    pesan:
      'Aplikasi ini telah membantu kami membuat rencana evakuasi yang terorganisir dan efisien. Kami dapat menandai tempat-tempat aman, rute evakuasi, dan titik pertemuan keluarga dengan mudah.',
    name: 'Shinta',
    alasankontak: 'Masukan',
  },
  {
    id: 2,
    imgSrc: 'img/testimonial-2.jpg',
    pesan:
      'Aplikasi ini menyediakan berbagai tips dan panduan yang sangat berguna dalam menghadapi bencana. Ini termasuk panduan pertolongan pertama, penyediaan perbekalan darurat, dan tindakan yang harus diambil dalam situasi tertentu.',
    name: 'Agus',
    alasankontak: 'keluhan',
  },
  {
    id: 3,
    imgSrc: 'img/testimonial-3.jpg',
    pesan:
      'Aplikasi Bencana benar-benar telah meningkatkan tingkat persiapan dan keselamatan kami dalam menghadapi situasi darurat.',
    name: 'Rizky',
    alasankontak: 'Keluhan',
  },
];

const TestimonialCarousel = () => {
  useEffect(() => {
    // Initialize Owl Carousel
    $('.testimonial-carousel').owlCarousel({
      autoplay: false,
      smartSpeed: 1000,
      center: true,
      dots: false,
      loop: true,
      nav: true,
      navText: [
        '<i class="bi bi-arrow-left cilir"></i>',
        '<i class="bi bi-arrow-right cilir"></i>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 2,
        },
      },
    });
  }, []); // Empty dependency array to run the effect only once on component mount

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div
          className="text-center mx-auto mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: '500px' }}>
          <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">
            Keluhan Masyarakat
          </div>
          <h1 className="display-6 mb-5">Respon masyarakat Sekitar</h1>
        </div>
        <div
          className="owl-carousel testimonial-carousel wow fadeInUp"
          data-wow-delay="0.1s">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-item text-center">
              <img
                className="img-fluid bg-light rounded-circle p-2 mx-auto mb-4"
                src={testimonial.imgSrc}
                alt={testimonial.name}
                style={{ width: '100px', height: '100px' }}
              />
              <div className="testimonial-text rounded text-center p-4">
                <p>{testimonial.pesan}</p>
                <h5 className="mb-1">{testimonial.name}</h5>
                <span className="fst-italic">{testimonial.alasankontak}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;

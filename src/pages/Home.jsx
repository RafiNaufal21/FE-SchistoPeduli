import About from '../fragments/About';
import Carousel from '../fragments/Carousel';
import Causes from '../fragments/Causes';
import Navbar from '../fragments/Navbar';
import Spinner from '../fragments/Spinner';
import Service from '../fragments/Service';
import Artikel from '../fragments/artikel';
import TestimonialCarousel from '../fragments/Testimonials';
import Footer from '../fragments/Footer';

const Home = () => {
  return (
    <>
      <Spinner />
      <Navbar />
      <Carousel />
      <About />
      <Service />
      <Artikel />
      <TestimonialCarousel />
      <Footer />
    </>
  );
};
export default Home;

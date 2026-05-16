import Hero          from '../components/home/Hero';
import TrustBar      from '../components/home/TrustBar';
import FeaturedProducts from '../components/home/FeaturedProducts';
import WhyUs         from '../components/home/WhyUs';
import AboutPreview  from '../components/home/AboutPreview';

const Home = () => {
  return (
    <>
      <Hero />
      <TrustBar />
      <FeaturedProducts />
      <WhyUs />
      <AboutPreview />
    </>
  );
};

export default Home;
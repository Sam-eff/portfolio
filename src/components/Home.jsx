import HeroSection from './Hero_section';
import Skills from './Skills_section';
import HomeProjects from './HomeProjects';
import HomeCTA from './HomeCTA';
import SEO from './SEO';

const Home = () => {
  return (
    <>
      <SEO />
      <HeroSection />
      <Skills />
      <HomeProjects />
      <HomeCTA />
    </>
  );
};

export default Home;

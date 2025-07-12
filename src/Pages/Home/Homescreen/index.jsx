import AboutMe from "../AboutMe.jsx";
import ContactMe from "../ContactMe.jsx";
import Footer from "../Footer.jsx";
import HeroSection from "../HeroSection.jsx";
import MyPortfolio from "../MyPortfolio.jsx";
import MySkills from "../MySkills.jsx";
import Testimonial from "../Testimonials.jsx";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MySkills />
      <AboutMe />
      <MyPortfolio />
      <Testimonial />
      <ContactMe />
      <Footer />
    </>
  );
}
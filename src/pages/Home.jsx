import SectionAbout from "../components/AboutSection";
import SectionFAQ from "../components/FaqsSection";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import SectionTeam from "../components/TeamSection";

const Home = () => {
  return (
    <div>
      <SectionAbout />
      <SectionFAQ />
      <SectionTeam />
    </div>
  );
};
export default Home;

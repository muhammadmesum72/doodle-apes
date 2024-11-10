import SectionAbout from "../components/AboutSection";
import SectionFAQ from "../components/FaqsSection";
import Footer from "../components/Footer";
import Header from "../components/Header";

import SectionTeam from "../components/TeamSection";

const Home = () => {
  return (
    <div className="z-50 relative overflow-hidden">
      <img
        src="/images/Background.svg"
        className="absolute w-full h-full object-cover"
        alt=""
      />
      <div className="relative">
        {/* bg */}

        <div className="z-20 ">
          <SectionAbout />
        </div>
      </div>
      <div className="relative">
        <div className="z-20 px-6 lg:px-16 xl:px-32">
          <SectionTeam />
        </div>
      </div>
      <div className="relative">

        <div className="z-20 ">
          <SectionFAQ />
        </div>

        <Footer />
      </div>
    </div>
  );
};
export default Home;

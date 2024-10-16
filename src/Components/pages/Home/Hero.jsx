import Profile from "../../../asserts/images/profile-bg.png";
// import Profile from "../../asserts/images/profile.jpeg";
import { FaPaperPlane } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa6";
import CV from "../../../asserts/data/Resume-re.pdf";
// import { useTypewriter, Cursor } from "react-simple-typewriter";

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-indigo_dark grid gap-5 grid-cols-1 sm:grid-cols-2 mt-10 sm:mt-25"
    >
      <div className="flex justify-end">
        <img src={Profile} className="hidden sm:block w-[80%]" />
      </div>
      <div className="flex align-center">
        <div>
          <h1 className="font-[900] text-[3rem]">
            /Dori<span className="text-orange">Codes</span>/
          </h1>
          <h1 className="mb-3 text-[1.7rem] font-[700]">
            <span className="text-orange">24/7</span> Frontend{" "}
            <span className="text-orange">Developer</span>
          </h1>
          <p className="mb-7 text-[1.3rem]">
            Skilled in crafting beautiful and responsive user experience for
            your online presence. My skills and eye for aesthetics not only
            brings your web projects to life, but also leaves an evelasting
            great user experience for you and your customers.
          </p>

          <div className="flex space-x-5 mt-5">
            <a
              href="mailto:jawadx176@gmail.com"
              className="border-2 border-grey hover:border-dark transition_ease py-3 px-5 rounded-xl flex align-center space-x-2"
            >
              <FaPaperPlane />
              <span>Email Me</span>
            </a>
            <a
              href={CV}
              download
              className="border-2 border-grey hover:border-dark transition_ease py-3 px-5 rounded-xl flex align-center space-x-2"
            >
              <FaDownload />
              <span>Get CV</span>
            </a>
          </div>
        </div>
      </div>

      <div className="flex align-center justify-center sm:hidden">
        <img id="profile_pic" src={Profile} />
      </div>
    </section>
  );
};
export default Hero;

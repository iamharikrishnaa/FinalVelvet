import video from "../../assets/video.mp4";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

const Home = () => {
  return (
    <div className="relative h-screen" id="home">
      <video
        autoPlay
        loop
        className="absolute inset-0 w-full h-full object-cover video-background"
        muted
      >
        <source src={video} type="video/mp4" />
      </video>
      <div className="absolute inset-0 flex flex-col justify-center items-center z-10">
        <div className="text-center">
          <h1 className="mt-12 font-space-grotesk lg:text-7xl md:text-8xl sm:text-4xl text-3xl text-white font-bold leading-tight text-justify">
            Indulge in Luxury <br /> Pampering at{" "}
            <span className="text-gold">
              The
              <br /> Velvet Room.
            </span>
          </h1>
          <div className="mt-8 flex flex-col md:flex-row">
            <button className="px-2 w-40 md:w-auto h-12 md:mr-8 font-bold text-white bg-gold rounded-lg text-lg">
              Contact Us
            </button>
            <div className="flex items-center mt-4 md:mt-0">
              <PlayCircleOutlineIcon className="text-gold text-4xl md:text-6xl mr-2" />
              <div className="border-b-2 border-white mx-2 md:mx-4"></div>
              <p className="text-white text-sm md:text-lg">Explore</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

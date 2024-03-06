import TVR from "../../assets/TVR.png"
import { Link } from "react-scroll";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsPinterest,
  BsYoutube,
} from "react-icons/bs";
import { motion } from "framer-motion";



const Footer = () => {
  return (
    <motion.div
      // initial={{ height: 0 }}
      // whileInView={{ height: "auto" }}
      // transition={{ duration: 1 }}
      className="p-10"
    >
      <div className="grid md:grid-cols-4 sm:grid-cols-3  xs:grid-cols-2 grid-cols-1 place-items-start gap-8">
        <div>
          <div className="font-bold">
            <img className="-ml-8 w-64" src={TVR} alt="logo" />
          </div>
          <p className="text-sm">
            It is a long established fact that a reader will be distracted lookings.
          </p>
          <div className="flex gap-12 mt-4">
            <Link to="https://www.facebook.com/thevelvetroomsalonbhills" className="hover:scale-110 text-xl">
              <BsFacebook />
            </Link>
            <Link to="https://www.instagram.com/thevelvetroom_salon/?hl=en" className="hover:scale-110 text-xl">
              <BsInstagram />
            </Link>
            <Link to="" className="hover:scale-110 text-xl">
              <BsYoutube />
            </Link>
          </div>
        </div>
        <div>
          <div className="font-bold mb-6">Pages</div>
          <div className="flex flex-col gap-4">
            <Link to="" className="text-sm hover:underline">
              About Us
            </Link>
            <Link to="" className="text-sm hover:underline">
              Our Team
            </Link>
            <Link to="" className="text-sm hover:underline">
              {" "}
              Contact Us
            </Link>
            <Link to="" className="text-sm hover:underline">
              Services
            </Link>
          </div>
        </div>
        <div>
          <div className="font-bold mb-6">Services</div>
          <div className="flex flex-col gap-4">
            <Link to="" className="text-sm hover:underline">
              Saloon
            </Link>
            <Link to="" className="text-sm hover:underline">
              Courses
            </Link>
            <Link to="" className="text-sm hover:underline">
              Hair Treatment
            </Link>
            <Link to="" className="text-sm hover:underline">
              Cosmetology
            </Link>
          </div>
        </div>
        <div>
          <div className="font-bold mb-6">Contact Us</div>
          <div className="text-sm mb-4">55 East GobindPuri, Ludhiana, <br/> Punjab </div>
          <div className="text-sm">contact@velvetroom.com</div>
          <div className="text-sm">(123) 456 - 7890</div>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;




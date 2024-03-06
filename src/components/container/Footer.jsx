import TVR from "../../assets/TVR.png"
import { Link as NavLink } from "react-router-dom"
import { Link } from "react-scroll";
import {
  BsFacebook,
  BsInstagram,
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
            <a href="https://www.facebook.com/thevelvetroomsalonbhills" target="_blank" className="hover:scale-110 text-xl">
              <BsFacebook />
            </a>
            <a href="https://www.instagram.com/thevelvetroom_salon/?hl=en" target="_blank" className="hover:scale-110 text-xl">
              <BsInstagram />
            </a>
            <a href="https://www.youtube.com/@thevelvetroom29/featured" target="_blank" className="hover:scale-110 text-xl">
              <BsYoutube />
            </a>
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
          <div className="text-sm mb-4">8-2-681 7, Road No. 12, Fortune Enclave, Sri Ram Nagar Colony, Banjara Hills, <br /> Hyderabad, Telangana 500034 </div>
          <div className="text-sm">thevelvetroom29@gmail.com</div>
          <div className="text-sm">7380292929</div>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;




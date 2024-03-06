import React from "react";
import { courses } from "../../../Data";
import Course from "./Course";
import { motion } from "framer-motion";
import line from "../../../assets/line.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { IconButton } from "@mui/material";
import IconArrowBack from "@mui/icons-material/ArrowBack";
import IconArrowForward from "@mui/icons-material/ArrowForward";

const Courses = () => {
  const container = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };
  const SliderArrow = (props) => {
    const { onClick, type, className } = props;
    return (
      <IconButton
        sx={{
          backgroundColor: "background.paper",
          color: "#4D0C44",
          "&:hover": {
            backgroundColor: "#CCA000",
            color: "#4D0C44",
          },
          bottom: "-48px !important",
          right: " unset !important",
          left: type === "prev" ? "60px !important" : "0 !important",
          zIndex: 10,
          boxShadow: 1,
          position: 'absolute'
        }}
        disableRipple
        color="#4D0C44"
        onClick={onClick}
        className={className}
      >
        {type === "next" ? (
          <IconArrowForward sx={{ fontSize: 22 }} />
        ) : (
          <IconArrowBack sx={{ fontSize: 22 }} />
        )}
      </IconButton>
    );
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <SliderArrow type="prev" />,
    nextArrow: <SliderArrow type="next" />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="bg-Velvet  justify-center">
      <div className="section" id="Training">
        <div className=" text-center text-white">
          <div className="text-[20px] font-light">10 Unique Courses</div>
          <div className="text-[32px] font-space-grotesk ">
            {" "}
            May You Also Like <span className="text-gold">More Courses</span>
          </div>
          {/* <img
            className="w-[305px] ml-[500px] -mb-4 h-[44px] text-gold "
            src={line}
            alt="line"
          /> */}
          <p className="font-F37-grotesk text-sm mt-10">
            "Explore our collaboration with Mumbai-based company Cosderma to
            provide a diverse range of education courses in the Training
            Institute vertical."
          </p>
        </div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          className="mt-12 "
        >
          <div className="flex flex-col justify-evenly">
            <Slider {...settings}>
            {courses.map((course) => {
              return <div key={course.id} className="px-4">
                <Course {...course} />
              </div>
            })}
            </Slider>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Courses;



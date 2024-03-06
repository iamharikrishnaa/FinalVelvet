import Slider from "react-slick";
import { carouselData } from "../../Data";
import "slick-carousel/slick/slick.css";
import { IconButton } from "@mui/material";
import IconArrowBack from "@mui/icons-material/ArrowBack";
import IconArrowForward from "@mui/icons-material/ArrowForward";

const Testimony = () => {
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
          bottom: "-38px !important",
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
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <SliderArrow type="prev" />,
    nextArrow: <SliderArrow type="next" />,
    responsive: [
      {
          breakpoint: 1280,
          settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
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
    <div className="section" id="Testimony">
      <p className="text-gold font-bold w-[113px] h-[31px] text-[18px] font-space-grotesk">
        TESTIMONIAL
      </p>
      <div className="font-bold font-space-grotesk h-[58px] text-[34px] mb-8">
        What are they saying?
      </div>
      <div className="flex flex-col justify-evenly">
        <Slider {...settings}>
          {carouselData.map((d) => (
            <div key={d.id}>
              <div className="m-4 px-5  py-4 rounded-xl border cursor-pointer hover:border-gold border-grey">
                <div className="w-auto">
                  <p className="mb-4">{d.Review}</p>
                </div>
                <div className="rounded-t-xl flex flex-row gap-2 items-center">
                  <img
                    src={d.Pic}
                    alt="pic"
                    className="h-[54px] w-[54px] rounded-full"
                  />
                  <div className="flex flex-col flex-grow">
                    <h1 className="font-bold">{d.name}</h1>
                    <p>{d.Designation}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimony;

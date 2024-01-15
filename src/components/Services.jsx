/* eslint-disable react/prop-types */
import { FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  rtl: true,
  responsive: [
    {
      breakpoint: 4000,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1040,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const Services = () => {
  const Card = ({ title, sub_title, text }) => {
    return (
      <div className="xl:w-[400px]">
        <div className="bg-white rounded-[18px] py-[30px] px-9 relative overflow-hidden">
          <p className="text-[13px] font-bold pb-12"> {title} </p>
          <h1 className="text-2xl font-bold">{sub_title} </h1>
          <p className="text-[#262626] opacity-80 min-h-[175px] leading-[1.7rem]">
            {text}
          </p>
          <a
            href="#pricing"
            className="font-bold flex items-center gap-x-2 no-underline text-black"
          >
            See Pricing <FaArrowRight className="text-[#29a587]" />{" "}
          </a>
          <div className="absolute -right-6 -bottom-6 bg-[url('/pat-2.png')] bg-contain bg-center w-[131px] h-[131px]"></div>
        </div>
      </div>
    );
  };

  return (
    <main className="pt-52 bg-[#f0ebe3] dark:bg-[#1f2937]" id="services">
      <div className="container max-w-[1300px] mx-auto px-3">
        <h1 className="sm:text-[44px] text-[26px] text-center m-0">
          WHAT I DO
        </h1>
        <p className="font-bold text-sm text-[#29a587] flex items-center text-center justify-center gap-x-4">
          MY <span className="caveat text-3xl text-black">Services</span>
        </p>

        <section className="mt-8">
          <Slider {...settings} arrows={false}>
            <Card
              title="WEB DEVELOPMENT"
              sub_title="Web Design & Logo"
              text="Web designers craft the overall vision & plan for a website
              layout. Professional logo development: Business, Company, or
              Personal."
            />
            <Card
              title="APPS DEVELOPMENT"
              sub_title="iOS & Android"
              text="Design Software applications to run on mobile devices. Modern and mobile-ready application that will help you reach all of your marketing."
            />
            <Card
              title="GAME DEVELOPMENT"
              sub_title="Unity & Unreal Engine"
              text="Creating games & describes the design, development and release of a game. Developing unique mobile android and ios games."
            />
            <Card
              title="WEB DEVELOPMENT"
              sub_title="Web Design & Logo"
              text="Web designers craft the overall vision & plan for a website
              layout. Professional logo development: Business, Company, or
              Personal."
            />
            <Card
              title="APPS DEVELOPMENT"
              sub_title="iOS & Android"
              text="Design Software applications to run on mobile devices. Modern and mobile-ready application that will help you reach all of your marketing."
            />
            <Card
              title="GAME DEVELOPMENT"
              sub_title="Unity & Unreal Engine"
              text="Creating games & describes the design, development and release of a game. Developing unique mobile android and ios games."
            />
          </Slider>
        </section>
      </div>
    </main>
  );
};

export default Services;

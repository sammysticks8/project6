/* eslint-disable react/prop-types */

import { FaArrowRight } from "react-icons/fa";

const Portfolio = () => {
  const Card = ({ title, sub_title, text, image }) => {
    return (
      <div className="xl:w-[400px]">
        <div className="bg-white rounded-[20px] py-[30px] px-[35px] relative overflow-hidden">
          <img
            src={image}
            alt=""
            className="rounded-[18px] h-60 w-full object-cover"
          />
          <p className="text-[13px] text-[#29a587] font-bold pt-[30px] m-0 pb-[5px]">
            {title}{" "}
          </p>
          <h1 className="text-2xl font-bold m-0">{sub_title} </h1>
          <p className="text-[#262626] opacity-80 my-[30px] leading-[1.7rem]">
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
    <main className="mb-5 pt-52" id="works">
      <div className="flex flex-col items-center container max-w-[1300px] mx-auto px-3">
        <h1 className="sm:text-[44px] text-[26px] text-center m-0">PORTFOLIO</h1>
        <p className="font-bold text-sm text-[#29a587] flex items-center text-center gap-x-4">
          MY <span className="caveat text-3xl text-black m-0">Cases</span>
        </p>
        <ul className="flex items-center gap-x-6 text-[13px] font-bold my-10">
          <ol>ALL</ol>
          <ol>VIDEO</ol>
          <ol>PHOTOGRAPHY</ol>
          <ol>BRANDING</ol>
        </ul>
        <section className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
          <Card
            title="BRANDING"
            sub_title="Zorro"
            image="https://luique.bslthemes.com/wp-content/uploads/2021/11/work4.jpeg"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
          />
          <Card
            title="BRANDING"
            sub_title="Gooir"
            image="https://luique.bslthemes.com/wp-content/uploads/2021/11/work2.jpeg"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
          />
          <Card
            title="VIDEO"
            sub_title="Explore"
            image="https://luique.bslthemes.com/wp-content/uploads/2022/09/pat-2.png"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
          />
          <Card
            title="VIDEO"
            sub_title="Stay Fit"
            image="https://luique.bslthemes.com/wp-content/uploads/2021/11/single8.jpg"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
          />
          <Card
            title="PHOTOGRAPHY"
            sub_title="Kana"
            image="https://luique.bslthemes.com/wp-content/uploads/2021/11/single6.jpg"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
          />
          <Card
            title="PHOTOGRAPHY"
            sub_title="Mozar"
            image="https://luique.bslthemes.com/wp-content/uploads/2021/11/work1.jpeg"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
          />
        </section>
        <span className="block rounded-full mt-[70px] h-14 border-2 border-black hover:border-solid shadowbtn">
              <button className="bg-transparent h-full font-bold px-10 rounded-full hover:border-2 border-solid hover:bg-[#29a587] hover:text-white hover:border-white">
                VIEW MORE
              </button>
            </span>
      </div>
    </main>
  );
};

export default Portfolio;

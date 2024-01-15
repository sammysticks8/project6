import { FaBehance, FaDribbble, FaTwitter } from "react-icons/fa";

export const Intro = () => {
  return (
    <main
      className="min-h-screen flex xl:pt-0 pt-36 bg-[#f0ebe3] dark:bg-[#1f2937]"
      id="home"
    >
      <div className="xl:flex items-center container max-w-[1300px] mx-auto lg:px-3">
        <section className="xl:w-1/2 xl:text-left text-center">
          <p className="text-[15px] font-bold">
            HELLO, <span className="text-[#29a587]">MY NAME IS</span>
          </p>
          <h1 className="xl:text-[90px] text-[64px] m-0 sm:py-0 py-4 text-[#29a587] textShadow">
            ZOÉ <span className="text-white">MILLER</span>
          </h1>
          <p className="text-[15px] font-bold">
            I AM <span className="caveat text-3xl pl-2">Web Developer</span>
          </p>
          <span className="xl:block hidden">
            <p className="text-lg pt-4 pb-4 text-[#262626] dark:text-white lg:w-4/5">
              From France, Paris. I have rich experience in web design, also I
              am good at wordpress. I love to talk with you about our unique.
            </p>
            <div className="flex items-center gap-x-8 pb-6 text-[22px]">
              <FaTwitter />
              <FaDribbble />
              <FaBehance />
            </div>
            <div className="flex items-center w-fit text-[13px] font-bold pt-4">
              <span className="block rounded-full h-14 border border-black border-solid shadowbtn">
                <button className="bg-transparent dark:text-white h-full font-bold px-10 rounded-full hover:border-2 border-solid hover:bg-[#29a587] hover:text-white hover:border-white">
                  {" "}
                  DOWNLOAD CV
                </button>
              </span>
              <hr className="w-10 h-[3px] bg-black mr-6" />
              <p>MY SKILLS</p>
            </div>
          </span>
        </section>
        <section className="xl:w-1/2">
          <div className="w-full sm:h-[680px] h-96 relative xl:block flex justify-center xl:mt-0 mt-16">
            <img
              src="/main_image.png"
              alt=""
              className="absolute z-10 lg:w-auto w-[340px]"
            />
            <img
              src="/pat-1.png"
              alt=""
              className="absolute top-6 xl:right-20 right-40 w-[180px] lg:block hidden"
            />

            <div className="absolute z-10 lg:bottom-24 bottom-20 xl:-left-10 lg:left-40 left-0">
              <div className="block rounded-full sm:h-20 h-14 w-fit shadowbtn relative z-10">
                <button className="h-full sm:px-6 px-3 border border-black border-solid rounded-full lg:text-[37px] text-[13px] font-bold flex items-center justify-between gap-x-3 relative bg-[#fefdfc] z-10">
                  12 <strong className="text-[#29a587] text-[37px]">+</strong>
                  <span className="text-[13px] flex flex-col items-start leading-tight">
                    YEARS OF
                    <strong className="text-[#29a587]">EXPERIENCE</strong>
                  </span>
                </button>
                <img
                  src="/pat-2.png"
                  alt=""
                  className="absolute top-8 -left-24 w-[141px] z-0 lg:block hidden"
                />
              </div>
            </div>
            <div className="absolute z-10 lg:bottom-12 bottom-4 xl:right-14 lg:right-40 right-8">
              <div className="block rounded-full sm:h-20 h-14 w-fit shadowbtn relative z-10">
                <button className="h-full sm:px-6 px-3 border border-black border-solid rounded-full lg:text-[37px] text-[13px] font-bold flex items-center justify-between gap-x-3 relative bg-[#fefdfc] z-10">
                  330
                  <span className="text-[13px] flex flex-col items-start leading-none">
                    COMPLETED
                    <strong className="text-[#29a587]">PROJECTS</strong>
                  </span>
                </button>
                <img
                  src="/pat-2.png"
                  alt=""
                  className="absolute top-4 -right-12 w-[141px] z-0 lg:block hidden"
                />
              </div>
            </div>
          </div>
        </section>
        <span className="xl:hidden flex flex-col items-center">
          <p className="text-lg pt-20 pb-4 text-[#262626] dark:text-white sm:w-2/3 px-3">
            From France, Paris. I have rich experience in web design, also I am
            good at wordpress. I love to talk with you about our unique.
          </p>
          <div className="flex items-center gap-x-8 pb-6 text-[22px]">
            <FaTwitter />
            <FaDribbble />
            <FaBehance />
          </div>
          <div className="flex items-center w-fit text-[13px] font-bold pt-4">
            <span className="block rounded-full h-14 border-2 border-black hover:border-solid shadowbtn">
              <button className="bg-transparent h-full font-bold px-10 rounded-full hover:border-2 border-solid hover:bg-[#29a587] hover:text-white hover:border-white">
                DOWNLOAD CV
              </button>
            </span>
            <hr className="w-10 h-[3px] bg-black mr-6" />
            <p>MY SKILLS</p>
          </div>
        </span>
      </div>
    </main>
  );
};

import { FaArrowRight, FaCheck } from "react-icons/fa";

/* eslint-disable react/prop-types */
const Pricing = () => {
  const Card = ({ amount, duration, title, children }) => {
    return (
      <div className="xl:w-[400px] relative">
        <div className={`${title === 'FREELANCING' && 'border-2 border-solid'} bg-white rounded-[20px] py-[30px] px-[35px] relative overflow-hidden`}>
          <p className="text-[13px] font-bold mb-[15px] m-0">{title}</p>
          <div className="flex items-center gap-x-4 my-5">
            <p className="text-[30px] font-bold m-0">
              {amount} <span className="text-[#29a587]">$</span>
            </p>
            <p className="font-bold m-0">{duration}</p>
          </div>

          <p className="text-[#262626] opacity-80 mb-[30px] leading-[1.7rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida.
          </p>

          {children}

          <span className="block rounded-full mt-8 h-14 border-2 border-black border-solid shadowbtn">
            <button className="bg-[#29a587] text-white h-full font-bold px-10 rounded-full relative z-10 w-full flex items-center justify-center cursor-pointer border-2 border-white border-solid">
              START PROJECT
              <FaArrowRight className="text-white absolute right-8" />
            </button>
          </span>
         

          <div className="absolute -right-6 -bottom-6 bg-[url('/pat-2.png')] bg-contain bg-center w-[131px] h-[131px]"></div>
        </div>
        {title === 'FREELANCING' && (
            <button className="text-white bg-[#29a587] text-[13px] font-bold border-solid rounded-full px-[15px] h-[26px] absolute -top-3 right-8 z-20 shadowbtn">POPULAR</button>
          )}
      </div>
    );
  };

  return (
    <main className="mb-5 pt-52" id="pricing">
      <div className="flex flex-col items-center container max-w-[1300px] mx-auto px-3">
        <h1 className="sm:text-[44px] text-[26px] text-center m-0">PRICING</h1>
        <p className="font-bold text-sm text-[#29a587] flex items-center text-center gap-x-4">
          MY <span className="caveat text-3xl text-black">Price Board</span>
        </p>

        <section className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 mt-[60px] w-full">
          <Card amount="39" title="HOURLEY BASIS" duration="Hour">
            <div>
              <span className="flex items-center gap-x-4">
                <FaCheck className="text-[#29a587]" />
                <p className="text-[#262626]">Brand Design</p>
              </span>
              <span className="flex items-center gap-x-4">
                <FaCheck className="text-[#29a587]" />
                <p className="text-[#262626]">Web Development</p>
              </span>
              <span className="flex items-center gap-x-4">
                <p className="text-[#B3B3B3] pl-[30px] line-through">
                  Advertising
                </p>
              </span>
              <span className="flex items-center gap-x-4">
                <p className="text-[#B3B3B3] pl-[30px] line-through">
                  Photography
                </p>
              </span>
            </div>
          </Card>
          <Card amount="259" title="FREELANCING" duration="Week">
            <div>
              <span className="flex items-center gap-x-4">
                <FaCheck className="text-[#29a587]" />
                <p className="text-[#262626]">Brand Design</p>
              </span>
              <span className="flex items-center gap-x-4">
                <FaCheck className="text-[#29a587]" />
                <p className="text-[#262626]">Web Development</p>
              </span>
              <span className="flex items-center gap-x-4">
                <FaCheck className="text-[#29a587]" />
                <p className="text-[#B3B3B3]">Advertising</p>
              </span>
              <span className="flex items-center gap-x-4">
                <p className="text-[#B3B3B3] pl-[30px] line-through">
                  Photography
                </p>
              </span>
            </div>
          </Card>
          <Card amount="1.249" title="FULL TIME" duration="Month">
            <div>
              <span className="flex items-center gap-x-4">
                <FaCheck className="text-[#29a587]" />
                <p className="text-[#262626]">Brand Design</p>
              </span>
              <span className="flex items-center gap-x-4">
                <FaCheck className="text-[#29a587]" />
                <p className="text-[#262626]">Web Development</p>
              </span>
              <span className="flex items-center gap-x-4">
                <FaCheck className="text-[#29a587]" />
                <p className="text-[#B3B3B3]">Advertising</p>
              </span>
              <span className="flex items-center gap-x-4">
                <FaCheck className="text-[#29a587]" />
                <p className="text-[#B3B3B3]">Photography</p>
              </span>
            </div>
          </Card>
        </section>
      </div>
    </main>
  );
};

export default Pricing;

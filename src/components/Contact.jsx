/* eslint-disable react/prop-types */
import { MdMap } from "react-icons/md";

const Contact = () => {
  const Contact_info = ({ icon, title, sub_title }) => {
    return (
      <div className="flex lg:gap-x-10 pb-10">
        <span className="flex items-center w-fit">
          <button className="bg-transparent h-14 w-14 font-bold rounded-full border-solid shadowbtn">
            <span className="text-2xl flex justify-center text-[#262626] dark:text-white">
              {icon}
            </span>
          </button>
          <hr className="w-10 h-[2px] bg-black mr-6" />
        </span>
        <span>
          <p className="caveat text-[30px] font-bold m-0 py-[10px]">{title}</p>
          <p className="text-[#262626] m-0 dark:text-white">{sub_title}</p>
        </span>
      </div>
    );
  };

  return (
    <main className="pb-5 lg:py-52 py-16 px-3 bg-[#f0ebe3] dark:bg-[#1f2937]" id="contact">
      <div className="lg:flex flex-col items-center container max-w-[1300px] mx-auto">
        <h1 className="sm:text-[44px] text-[26px] text-center m-0">CONTACT ME</h1>
        <p className="font-bold text-sm text-[#29a587] flex items-center justify-center text-center gap-x-4">
          LET’S
          <span className="caveat text-3xl text-black">Talk About Ideas</span>
        </p>
        <div className="lg:flex xl:w-4/5 w-full xl:justify-normal justify-between mx-auto lg:pt-24">
        <section className="lg:pt-[60px] pt-8 xl:w-2/5">
          <div className="lg:block flex flex-wrap gap-x-4">
            <Contact_info
              title="Address"
              sub_title="North Tower, Toronto, Canada"
              icon={<MdMap />}
            />
            <Contact_info
              title="Freelance"
              sub_title="Available Right Now"
              icon={<MdMap />}
            />
            <Contact_info
              title="Email"
              sub_title="zoe.miller@mydomain.com"
              icon={<MdMap />}
            />
            <Contact_info
              title="Phone"
              sub_title="+1 900 - 900 - 9000"
              icon={<MdMap />}
            />
          </div>
        </section>
        <section className="xl:w-1/2">
          <form className="w-full">
            <div className="sm:flex gap-x-8 w-full mb-8">
              <label className="flex flex-col w-full gap-4">
                <p className="pl-12 text-[#262626] dark:text-white font-bold text-sm">YOUR FULL NAME *</p>
                <input type="text" className="rounded-full h-[60px] px-8 border border-black border-solid" />
              </label>
              <label className="flex flex-col w-full gap-4">
                <p className="pl-12 text-[#262626] dark:text-white font-bold text-sm">YOUR EMAIL ADDRESS *</p>
                <input type="email" className="rounded-full h-[60px] px-8 border border-black border-solid" />
              </label>
            </div>
            <label className="flex flex-col w-full gap-4 mb-8">
              <p className="pl-12 text-[#262626] dark:text-white font-bold text-sm">YOUR SUBJECT *</p>
              <input type="text" className="rounded-full h-[60px] px-8 border border-black border-solid" />
            </label>
            <label className="flex flex-col w-full gap-4 mb-8">
              <p className="pl-12 text-[#262626] dark:text-white font-bold text-sm">YOUR MESSAGE *</p>
              <textarea className="rounded-[30px] p-8 h-[140px] resize-none border border-black border-solid" />
            </label>
            <div className="flex sm:flex-row flex-col sm:items-center items-end justify-end gap-8">
              <label className="flex items-center gap-x-2 cursor-pointer">
                <p>Accept the terms and conditions</p>
                <input type="checkbox" />
              </label>
              <span className="block rounded-full h-14 border border-black border-solid shadowbtn">
          <button className="bg-transparent dark:text-white h-full font-bold px-10 rounded-full hover:border-2 border-solid hover:bg-[#29a587] hover:text-white hover:border-white">
            SEND MESSAGE
          </button>
        </span>
            </div>
          </form>
        </section>
        </div>
      </div>
    </main>
  );
};

export default Contact;

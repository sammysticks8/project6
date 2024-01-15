import { FaBehance, FaDribbble, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#f0ebe3] dark:bg-[#1f2937]">
      <div className="container mx-auto py-[60px] flex sm:flex-row flex-col gap-y-4 items-center justify-between">
      <div className="flex items-center gap-x-8 text-[22px]">
            <FaTwitter />
            <FaDribbble />
            <FaBehance />
          </div>
          <p className="text-[13px] text-[#262626] dark:text-white font-bold">© 2022 <span className="text-[#29a587]">LUIQUE</span>. ALL RIGHTS RESERVED</p>
          <p className="text-[13px] text-[#262626] dark:text-white font-bold">DEVELOPED BY <span className="text-[#29a587]">BSLTHEMES</span></p>
      </div>
      
    </footer>
  )
}

export default Footer
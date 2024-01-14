/* eslint-disable react/prop-types */
import { FaArrowRight } from "react-icons/fa";

const Blog = () => {
  const Card = ({ date, title, image }) => {
    return (
      <div className="xl:w-[400px]">
        <div className="bg-white rounded-[20px] py-[30px] px-[35px] relative overflow-hidden">
          <p className="text-[13px] font-medium">{date}</p>
          <p className="text-2xl font-bold hover:text-[#29a587] my-[15px]">
            {title}
          </p>
          <p className="text-[#262626] opacity-80 leading-[1.7rem] ">
            Vivamus interdum suscipit lacus. Nunc ultrices accumsan mattis.
            Aliquam vel sem vel velit efficitur malesuada. Donec arcu lacus,
            ornare eget…
          </p>
          <span className="pt-[10px]">
            <a
              href="#"
              className="font-bold flex items-center gap-x-2 no-underline text-black"
            >
              Read more <FaArrowRight className="text-[#29a587]" />
            </a>
          </span>
          <img
            src={image}
            alt=""
            className="rounded-[18px] h-[180px] w-full object-cover mt-[30px]"
          />
        </div>
      </div>
    );
  };

  return (
    <main className="mb-5 pt-52" id="blog">
      <div className="flex flex-col items-center container max-w-[1300px] mx-auto px-3">
        <h1 className="sm:text-[44px] text-[26px] text-center m-0">LATEST BLOG</h1>
        <p className="font-bold text-sm text-[#29a587] flex items-center text-center gap-x-4">
          MY <span className="caveat text-3xl text-black">
            Articles and Advice
          </span>
        </p>
        <section className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 mt-[60px]">
          <Card
            date="OCTOBER 31, 2022"
            title="The Main Thing For The Designer"
            image="https://luique.bslthemes.com/wp-content/uploads/2021/11/single7.jpg"
          />
          <Card
            date="OCTOBER 31, 2022"
            title="Follow Your Own Design Process"
            image="https://luique.bslthemes.com/wp-content/uploads/2022/11/blog-4-scaled-1.jpg"
          />
          <Card
            date="NOVEMBER 28, 2021"
            title="Usability Secrets to Create Better Interfaces"
            image="https://luique.bslthemes.com/wp-content/uploads/2022/11/blog-2.jpg"
          />
        </section>
        <span className="block rounded-full mt-[70px] h-14 border-2 border-black hover:border-solid shadowbtn">
          <button className="bg-transparent h-full font-bold px-10 rounded-full hover:border-2 border-solid hover:bg-[#29a587] hover:text-white hover:border-white">
            VIEW BLOG
          </button>
        </span>
      </div>
    </main>
  );
};

export default Blog;

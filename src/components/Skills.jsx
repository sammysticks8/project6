/* eslint-disable react/prop-types */
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const Skills = () => {

  const Card = ({ title, percentage }) => {
    return (
      <div className="w-full">
        <span className="w-full flex items-center justify-between">
          <p className="text-[21px] font-bold m-0">{title}</p>
          <p className="font-bold">
            {percentage}
            <span className="text-[#29a587] ">%</span>
          </p>
        </span>
        <p className="text-[#262626] dark:text-white pb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div>
          <Slider
            draggableTrack={true}
            min={0}
            max={100}
            defaultValue={percentage}
          />
        </div>
      </div>
    );
  };

  return (
    <main className="pt-52 bg-[#f0ebe3] dark:bg-[#1f2937]" id="skills">
      <div className="flex flex-col items-center container max-w-[1300px] mx-auto px-3">
        <h1 className="sm:text-[44px] text-[26px] text-center m-0">
          PROFESSIONAL SKILLS
        </h1>
        <p className="font-bold text-sm text-[#29a587] flex items-center text-center gap-x-4">
          MY <span className="caveat text-3xl text-black">Talent</span>
        </p>

        <section className="grid lg:grid-cols-3 grid-cols-1 gap-10 mt-10">
          <Card title="PHP" percentage="85" />
          <Card title="JavaScript" percentage="75" />
          <Card title="WordPress" percentage="90" />
          <Card title="Python" percentage="75" />
          <Card title="React" percentage="70" />
          <Card title="Adobe XD" percentage="80" />
        </section>
      </div>
    </main>
  );
};

export default Skills;

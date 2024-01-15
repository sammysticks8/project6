import Education, { Experience } from './accordion';
const Resume = () => {
  return (
    <main className="pb-5 pt-52 px-3 bg-[#f0ebe3] dark:bg-[#1f2937]" id="resume">
      <div className="flex flex-col items-center container max-w-[1300px] mx-auto">
        <h1 className="sm:text-[44px] text-[26px] text-center m-0">RESUME</h1>
        <p className="font-bold text-sm text-[#29a587] flex items-center text-center gap-x-4">
          MY <span className="caveat text-3xl text-black">Story</span>
        </p>
        <div className='w-full lg:flex gap-x-20'>
          <section className='lg:w-1/2'>
            <h1 className='m-0 border-0 border-black border-solid border-b-2 pb-[30px] mr-[30px] text-center'>Education</h1>
            <Education />
          </section>
          <section className='lg:w-1/2 lg:mt-0 mt-8'>
            <h1 className='m-0 border-0 border-black border-solid border-b-2 pb-[30px] mr-[30px] text-center'>Experience</h1>
            <Experience />
          </section>
        </div>
      </div>
    </main>
  );
};

export default Resume;

import React from 'react';
import { BiLogoLinkedinSquare, BiLogoGithub, BiLogoInstagram, BiCodeAlt } from 'react-icons/bi';
import bgImage from "../asserts/bg.JPG";

const MainTheme = () => (
  <section className="m-3 p-2 grid grid-cols-2 gap-4 ">
    <div className="flex flex-col h-[80vh] ">
      <div className="flex flex-col mx-4 mt-[25%] mb-10">
        <p className="my-2 text-base">Hello I'M</p>
        <h2 className="my-1 text-3xl">Praveen Sampath Kumar Parvathini</h2>
        <p className="my-1 text-xs">Software Engineer</p>
      </div>
      <div className="flex flex-col items-start mx-4">
        <a className="mb-2 text-sm  text-[#8a2be2]" href="mailto:praveensampathkumar.parvathini@gmail.com">
          praveensampathkumar.parvathini@gmail.com
        </a>
        <p className="mb-2 text-sm">Rayavaram, Konaseema District, AP, India-53346</p>
      </div>
      <div className="flex flex-row items-start mx-4 w-[50%] h-16 my-6 items-">
        <span className="mr-10">
          <a href="https://www.linkedin.com/in/praveen-sampath-kumar-parvathini-8960a320a/" target="_blank" rel="noopener noreferrer">
            <BiLogoLinkedinSquare className="w-10 h-10" />
          </a>
        </span>
        <span className="mr-10">
          <a href="https://github.com/Sampathkumar142" target="_blank" rel="noopener noreferrer">
            <BiLogoGithub className="w-10 h-10" />
          </a>
        </span>
        <span className="mr-10">
          <a href="https://instagram.com/thenameissampath27" target="_blank" rel="noopener noreferrer">
            <BiLogoInstagram className="w-10 h-10" />
          </a>
        </span>
        <span className="mr-10">
          <a href="https://leetcode.com/user6568gu/" target="_blank" rel="noopener noreferrer">
            <BiCodeAlt className="w-10 h-10" />
          </a>
        </span>
      </div>
    </div>
    <div className='h-[80vh] '>
    <img  className=' h-full w-full' src={bgImage} alt="bg"  />
    </div>
  </section>
);

export default MainTheme;

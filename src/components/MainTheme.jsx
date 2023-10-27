import React from 'react';
import { BiLogoLinkedinSquare, BiLogoGithub, BiLogoInstagram, BiCodeAlt } from 'react-icons/bi';
import bgImage from "../asserts/bg.JPG";

const MainTheme = () => (
  <section className="m-3  ph:grid ph:grid-cols-2 ph:gap-20 flex h-[80vh]  flex-col-reverse justify-end">
    <div className="flex flex-col ph:h-[80vh] h-[60%] justify-center ">
      <div className="flex flex-col ph:mx-4  mx-2  my-2 ph:mt-[25%] ph:mb-10 mt-4 ">
        <p className="ph:my-2 my-1 ph:text-base text-[10px]">Hello I'M</p>
        <h2 className="my-1 ph:text-3xl text-[18px] font-bold">Praveen Sampath Kumar Parvathini</h2>
        <p className="my-1 ph:text-xs text-[10px]">Software Engineer</p>
      </div>
      <div className="flex flex-col items-start ph:mx-4 mx-2">
        <a className="mb-2 text-" href="mailto:praveensampathkumar.parvathini@gmail.com">
          <p className='ph:text-sm text-ellipsis text-[12px] text-[#8a2be2]'>praveensampathkumar.parvathini@gmail.com</p>
        </a>
        <p className="mb-2 ph:text-sm text-xs">Rayavaram, Konaseema District, AP, India-53346</p>
      </div>
      <div className="flex flex-row items-start ph:mx-4 ph:w-[50%] ph:h-16 ph:my-6  justify-between mx-2 my-2 ">
        <span className="ph:mr-10 mr-6">
          <a href="https://www.linkedin.com/in/praveen-sampath-kumar-parvathini-8960a320a/" target="_blank" rel="noopener noreferrer">
            <BiLogoLinkedinSquare className="ph:w-10 ph:h-10 w-6 h-6" />
          </a>
        </span>
        <span className="ph:mr-10 mr-6">
          <a href="https://github.com/Sampathkumar142" target="_blank" rel="noopener noreferrer">
            <BiLogoGithub className="ph:w-10 ph:h-10 w-6 h-6 " />
          </a>
        </span>
        <span className="ph:mr-10 mr-6">
          <a href="https://instagram.com/thenameissampath27" target="_blank" rel="noopener noreferrer">
            <BiLogoInstagram className="ph:w-10 ph:h-10 w-6 h-6" />
          </a>
        </span>
        <span className="ph:mr-10 mr-6">
          <a href="https://leetcode.com/user6568gu/" target="_blank" rel="noopener noreferrer">
            <BiCodeAlt className="ph:w-10 ph:h-10 w-6 h-6" />
          </a>
        </span>
      </div>
    </div>
    <div className='ph:h-[80vh] h-[40%] flex justify-center '>
    <img  className=' h-full ph:w-full w-[70%] rounded-md' src={bgImage} alt="bg"  />
    </div>
  </section>
);

export default MainTheme;

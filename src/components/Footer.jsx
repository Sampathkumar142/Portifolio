import React from 'react';
import { BiLogoLinkedinSquare, BiLogoGithub, BiLogoInstagram, BiCodeAlt ,BiCurrentLocation,BiPhone,BiLogoGmail} from 'react-icons/bi';
import LastFooter from './LastFooter';

export default function Footer() {
  return (
    <>
        <section  className='grid grid-cols-2 gap-4 w-full h-[50vh] my-10'>
            <div className='flex flex-col justify-center items-center'>
                <h1 className="m-4 h-[2rem] text-2xl">Sampath Logo</h1>
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

            <div className='flex items-center justify-center'>
                <div className='items-center'>
                    <h3 className='mb-4'> <BiCurrentLocation className='inline h-[40px] w-[40px] mr-4'/> DNo:1-42, munsif Street, Rayavarm,<br/>EastGodavari,Ap,India-53346</h3>
                    <h3 className='mb-4'> <BiPhone className='inline h-[40px] w-[40px] mr-4'/><a href="tel:+917995736123">+91 7995736123</a></h3>
                    <h3 > <BiLogoGmail className='inline h-[40px] w-[40px] mr-4'/><a href="mailto:praveensampathkumar.parvathini@gmail.com">praveensampathkumar.parvathini@gmail.com</a></h3>
                </div>
            </div>
        </section>
        <LastFooter></LastFooter>
    </>
  )
}

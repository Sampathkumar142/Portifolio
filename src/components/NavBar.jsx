import React from 'react';
import { useState } from 'react';
import { BiAlignMiddle} from "react-icons/bi";
import { FiDownload} from "react-icons/fi";
import {ImCross} from "react-icons/im"
import { Link } from "react-router-dom";


const NavBar = () => {
    const [isOpen,setmenu] = useState(false);
    const navbarmenu = () => {
        setmenu(!isOpen);
    };
    const isOpened=(isOpen)=>{
        let classes = 'ph:relative flex ph:flex ph:justify-end text-xl ph:flex-row flex-col justify-center items-center absolute ph:h-[10vh] h-[90vh] w-full';
        if(!isOpen){
            classes+=' hidden';
        }
        return classes;
    }

    return ( 
        <section className="sticky top-0 w-full  z-40 h-[10vh]">
            <nav className="ph:flex ph:flex-row  ph:justify-between">
                <h1 className="m-4 h-[2rem] text-xl">Sampath Logo</h1>
                <div className={isOpened(isOpen)}>
                    <ul className="flex mr-3 ph:justify-around ph:flex-row ph:w-[40%] flex-col items-center justify-center ph:text-Base text-xl">
                        <li className='mx-1 my-4'><Link to="">Home</Link></li>
                        <li className='mx-1 my-4'><Link to="/about">About</Link></li>
                        <li className='mx-1 my-4'><Link to="contact">Contact</Link></li>
                    </ul>
                    <a  download href="resume.pdf">
                        <button className='mr-4 p-2 mt-2 rounded-lg border border-solid border-gray-300 ph:text-base text-xl'>
                        <FiDownload className='inline m-2' size={23}></FiDownload>
                        Download CV</button>
                    </a>
                </div>
                
            </nav>
            <button className=" absolute cursor-pointer top-1  right-2 ph:hidden " id="menu" onClick={navbarmenu}>
                    {isOpen?(<ImCross size={20}></ImCross>):(<BiAlignMiddle size={40}></BiAlignMiddle>)}
            </button>
        </section>
    );
}

export default NavBar;

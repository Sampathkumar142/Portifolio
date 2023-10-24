import React from 'react';
import { BiAlignMiddle} from "react-icons/bi";
import { FiDownload} from "react-icons/fi";

import { Link } from "react-router-dom";


const NavBar = () => {
    const navbarmenu = () => {
        // Define your menu toggle function here
    };

    return ( 
        <section className="sticky top-0 w-full z-40">
            <nav className="flex  justify-between ">
                <h1 className="m-4 h-[2rem] text-2xl">Sampath Logo</h1>
                <div className=" flex items-end text-xl">
                    <ul className="flex mr-3 justify-between ">
                        <li className='mx-[30px] my-4'><Link to="">Home</Link></li>
                        <li className='mx-[30px] my-4'><Link to="/about">About</Link></li>
                        <li className='mx-[30px] my-4'><Link to="contact">Contact</Link></li>
                    </ul>
                    <a  download href="resume.pdf">
                        <button className='mr-4 p-2 rounded-lg border border-solid border-gray-300'>
                        <FiDownload className='inline m-2' size={23}></FiDownload>
                        Download CV</button>
                    </a>
                </div>
                
            </nav>
            <button className=" absolute top-6 right-4  hidden" id="menu" onClick={navbarmenu}>
                    <BiAlignMiddle size={50}></BiAlignMiddle>
            </button>
        </section>
    );
}

export default NavBar;

import React from 'react'
import softwareDev from "../asserts/softwaredev.svg";
import se from "../asserts/softwareEng.svg";
import datascience from "../asserts/datascience.svg";
import cloud from "../asserts/cloud.svg";

export default function Expertise() {
  return (
    <section className='h-50vh'>
        <div className='m-3 flex flex-col'>
            <h3 className='text-base mx-4 mt-2 font-semibold'>My Work</h3>
            <h2 className='text-2xl mx-4 my-1 font-bold'>My Expertise</h2>
            <div className='flex md:flex-row flex-col  w-100% justify-around mx-4 my-8'>
                <div className='p-4 border border-white  mx-2 my-2'>
                    <img className='h-[40px] w-[40px] my-2' src={softwareDev} alt='software development'></img>
                    <h2 className='font-bold text-lg my-1'>Software Development</h2>
                    <p className='text-ellipsis text-xs'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Nisi, possimus!</p>
                </div>
                <div className='p-4 border border-white  mx-2 my-2'>
                    <img className='h-[40px] w-[40px] my-2' src={se} alt='software development'></img>
                    <h2 className='font-bold text-lg my-1'>Software Engineering</h2>
                    <p className='text-ellipsis text-xs'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Nisi, possimus!</p>
                </div>
                <div className='p-4 border border-white  mx-2 my-2'>
                    <img className='h-[40px] w-[40px] my-2' src={datascience} alt='software development'></img>
                    <h2 className='font-bold text-lg my-1' >Data Science</h2>
                    <p className='text-ellipsis text-xs'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Nisi, possimus!</p>
                </div>
                <div className='p-4 border border-white  mx-2 my-2'>
                    <img className='h-[40px] w-[40px] my-2' src={cloud} alt='software development'></img>
                    <h2 className='font-bold text-lg my-1'>Cloud Management</h2>
                    <p className='text-ellipsis text-xs'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Nisi, possimus!</p>
                </div>
            </div>
        </div>
    </section>
  )
}

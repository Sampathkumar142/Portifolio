import React from 'react';



export default function Qualification() {
  return (
    <div className='ph:m-8 ph:p-2 m-3 p-1'>
            <h2 className='ph:text-2xl text-lg font-bold'> Education</h2>
            <div className='flex flex-col ' >
                <div className='ph:mt-4 mt-2'>
                    <div className=' relative border  border-white border-x-2 border-y-2 ph:p-2 p-2'>
                        <h2 className='text-[#825ca6] ph:text-xl text-base font-bold ph:m-2 m-1'> Bachelor's</h2>
                        <h3 className='text-[#6b5cde] ph:text-base text-sm ph:m-2 m-1'>Pragati Engineering College</h3>
                        <h3 className='text-[#49e3e0] ph:text-base text-xs ph:m-2 m-1'>B.Tech in Computer Science specialization in data Science</h3>
                        <p className='absolute right-3 m-1 bottom-1 ph:text-sm text-xs  '>2020-Present</p>
                        <p className='ph:mx-2 mx-1 ph:text-sm text-xs'>Cgpa: <span className='text-green-500'>8.3</span> </p>
                    </div>
                    <div className='w-full h-8 flex flex-row justify-center '>
                        <div className='w-[1px]  h-8 border border-white'></div>
                    </div>
                </div>
                <div className=''>
                    <div className='relative border  border-white border-x-2 border-y-2 ph:p-2 p-2'>
                        <h2 className='text-[#825ca6] ph:text-xl text-base font-bold ph:m-2 m-1'>Intermediate</h2>
                        <h3 className='text-[#6b5cde] ph:text-base text-sm ph:m-2 m-1'>Narayana Junior College</h3>
                        <h3 className='text-[#49e3e0] ph:text-base text-xs ph:m-2 m-1'>Maths,Physics,Chemistry</h3>
                        <p className='absolute right-3 m-1 bottom-1 ph:text-sm text-xs '>2018-2020</p>
                        <p className='ph:mx-2 mx-1 ph:text-sm text-xs'>CGPA: <span className='text-green-500'>9.82</span></p>
                    </div>
                    <div className='w-full h-8 flex flex-row justify-center '>
                        <div className='w-[1px]  h-8 border border-white'></div>
                    </div>
                </div>
                <div className=''>
                    <div className=' relative border  border-white border-x-2 border-y-2 p-2'>
                        <h2 className='text-[#825ca6] ph:text-xl text-base font-bold ph:m-2 m-1'>School of Secondary Education</h2>
                        <h3 className='text-[#6b5cde] ph:text-base text-sm ph:m-2 m-1'>Vignan English Medium School</h3>
                        <p className='absolute right-3 m-1 bottom-1 ph:text-sm text-xs '>2017-2018</p>
                        <p className='ph:mx-2 mx-1 ph:text-sm text-xs'>CGPA: <span className='text-green-500'>10.0</span></p>
                    </div>
                </div>
                
            </div>
        </div>
  )
}

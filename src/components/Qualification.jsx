import React from 'react';



export default function Qualification() {
  return (
    <div className='m-8 p-2'>
            <h2 className='text-2xl font-bold'> Education</h2>
            <div className='flex flex-col  h-[100%]' >
                <div className='mt-4'>
                    <div className=' relative border  border-white border-x-2 border-y-2 p-2'>
                        <h2 className='text-[#825ca6] text-xl font-bold m-2'> Bachelor's</h2>
                        <h3 className='text-[#6b5cde] text-base m-2'>Pragati Engineering College</h3>
                        <h3 className='text-[#49e3e0] text-base m-2'>B.Tech in Computer Science specialization in data Science</h3>
                        <p className='absolute right-3 m-1 bottom-1 '>2020-Present</p>
                        <p className='mx-2'>Cgpa: <span className='text-green-500'>8.3</span> </p>
                    </div>
                    <div className='w-full h-8 flex flex-row justify-center '>
                        <div className='w-[1px]  h-8 border border-white'></div>
                    </div>
                </div>
                <div className=''>
                    <div className='relative border border-white border-x-2 border-y-2 p-2'>
                        <h2 className='text-[#825ca6] text-xl  m-2 font-bold'>Intermediate</h2>
                        <h3 className='text-[#6b5cde] text-base m-2'>Narayana Junior College</h3>
                        <h3 className='text-[#49e3e0] text-base m-2'>Maths,Physics,Chemistry</h3>
                        <p className='absolute right-3 m-1 bottom-1 '>2018-2020</p>
                        <p className='mx-2'>CGPA: <span className='text-green-500'>9.82</span></p>
                    </div>
                    <div className='w-full h-8 flex flex-row justify-center '>
                        <div className='w-[1px]  h-8 border border-white'></div>
                    </div>
                </div>
                <div className=''>
                    <div className=' relative border  border-white border-x-2 border-y-2 p-2'>
                        <h2 className='text-[#825ca6] text-xl font-bold m-2'>School of Secondary Education</h2>
                        <h3 className='text-[#6b5cde] text-base m-2'>Vignan English Medium School</h3>
                        <p className='absolute right-3 m-1 bottom-1 '>2017-2018</p>
                        <p className='mx-2'>CGPA: <span className='text-green-500'>10.0</span></p>
                    </div>
                </div>
                
            </div>
        </div>
  )
}

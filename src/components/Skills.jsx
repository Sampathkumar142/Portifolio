import React from 'react'

export default function Skills() {
  return (
    <div className="ph:m-8 ph:p-2 m-3 p-1">
        <h2 className='ph:text-2xl text-lg font-bold'> Skills</h2>
        <div className='flex flex-col '>
            <div className='m-2'>
                <h1 className='ph:text-base text-xs font-semibold my-3'>Programming Languages</h1>
                <ul  className='flex flex-row justify-between my-2 ph:text-sm text-[11px]'>
                    <li className="ph:mr-4 mr-2 text-[#49e3e0] border border-white p-2 rounded-xl">Python</li>
                    <li className="ph:mr-4 mr-2 text-[#49e3e0] border border-white p-2 rounded-xl">Java</li>
                    <li className="ph:mr-4 mr-2 text-[#49e3e0] border border-white p-2 rounded-xl">JavaScript</li>
                </ul>
            </div>
            <div className='m-2'>
                <h1 className='ph:text-base text-xs font-semibold my-3'>FrameWorks & Libraries</h1>
                <ul  className='flex flex-row justify-between my-2 ph:text-sm text-[11px] overflow-x-auto'>
                    <li className=" mr-4 text-[#49e3e0] border border-white p-2 rounded-xl">React JS</li>
                    <li className=" mr-4 text-[#49e3e0] border border-white p-2 rounded-xl">Django</li>
                    <li className="mr-4 text-[#49e3e0] border border-white p-2 rounded-xl">Tailwind CSS</li>
                    <li className="mr-4 text-[#49e3e0] border border-white p-2 rounded-xl">MySql</li>
                    <li className="mr-4  text-[#49e3e0] border border-white p-2 rounded-xl">Mongodb</li>
                </ul>
            </div>
            <div className='m-2'>
                <h1 className='ph:text-base text-xs font-semibold my-3'>Tools & PlatForms</h1>
                <ul  className='flex flex-row justify-between my-2 ph:text-sm text-[11px] overflow-x-auto'>
                    <li className="mr-4  text-[#49e3e0] border border-white px-1 py-2 rounded-xl">Azure</li>
                    <li className="mr-4 text-[#49e3e0] border border-white px-1 py-2 rounded-xl">Git&Github</li>
                    <li className="mr-4 text-[#49e3e0] border border-white px-1 py-2 rounded-xl">Visual Studio</li>
                    <li className="mr-4 text-[#49e3e0] border border-white px-1 py-2 rounded-xl">Jupyter</li>
                </ul>
            </div>
            <div className='m-2'>
                <h1 className='ph:text-base text-xs font-semibold my-3'>Others</h1>
                <ul  className='flex flex-row justify-between my-2 ph:text-sm text-[11px]'>
                    <li className="mr-4 text-[#49e3e0]  border border-white px-1 py-2 rounded-xl">Html5 & CSS</li>
                    <li className="mr-4 text-[#49e3e0]  border border-white px-1 py-2 rounded-xl">SQl</li>
                    <li className="mr-4 text-[#49e3e0]  border border-white px-1 py-2 rounded-xl">Data Science</li>
                    <li className="mr-4 text-[#49e3e0]  border border-white px-1 py-2 rounded-xl">Machine Learning</li>
                </ul>
            </div>
            <div className='m-2'>
                <h1 className='ph:text-base text-xs font-semibold my-3'>Extra Circular Activites</h1>
                <ul  className='flex flex-row justify-between my-2 ph:text-sm text-[11px]'>
                    <li className="mr-4 text-[#49e3e0]  border border-white px-1 py-2 rounded-xl">Teaching</li>
                    <li className="mr-4 text-[#49e3e0]  border border-white px-1 py-2 rounded-xl">Public Speaking</li>
                    <li className="mr-4 text-[#49e3e0]  border border-white px-1 py-2 rounded-xl">Research</li>
                </ul>
            </div>
        </div>

        </div>
  )
}

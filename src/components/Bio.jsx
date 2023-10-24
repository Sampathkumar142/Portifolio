import React from 'react'
import bioimg from '../asserts/bio.png';
export default function Bio() {
  return (
    <section className='grid grid-cols-2 w-full h-[80vh] my-2 gap-6'>
        <div className=' flex flex-col justify-end m-4  '>
            <h2 className='my-3 text-xl '>Hi,This is <span className='text-2xl text-[#ff6347]'>Sampath Kumar Parvathini </span>!</h2>
            <p className='text-ellipsis text-base indent-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nesciunt ullam perspiciatis nam, libero velit eveniet. Consequuntur suscipit dolores, delectus iusto, harum consectetur minus inventore natus soluta vitae, cupiditate excepturi in! Corrupti amet rerum asperiores eveniet unde quia illo sunt neque beatae atque nisi deserunt, nam pariatur et odio recusandae sit molestiae dicta ipsam repellat? Officia ipsum numquam ea tempore, repudiandae ut, cum facilis labore, beatae sed repellat saepe harum.</p>
        </div>
        <div className='flex justify-center items-center' >
          <img  className='h-[70vh] w-[80%]' src={bioimg} alt="" />

        </div>
    </section>
  )
}

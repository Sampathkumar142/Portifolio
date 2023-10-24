import React from 'react';
import Qualification from './Qualification';
import Skills from './Skills';


export default function Education() {
  return (
    <section className='grid grid-cols-2 gap-4 w-full h-[80vh]'>
        <Qualification></Qualification>
        <Skills></Skills>
    </section>
  )
}

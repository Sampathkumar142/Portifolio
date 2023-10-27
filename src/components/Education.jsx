import React from 'react';
import Qualification from './Qualification';
import Skills from './Skills';


export default function Education() {
  return (
    <section className='ph:grid ph:grid-cols-2 ph:gap-4  overflow-hidden'>
        <Qualification></Qualification>
        <Skills></Skills>
    </section>
  )
}

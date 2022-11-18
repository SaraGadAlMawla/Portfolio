import React from 'react'

function Intro() {
  return (
  <div className='flex items-center justify-center flex-col text-center pt-20 pb-6 dark:text-white'>
    <h1 className='text-4xl md:text-7xl mb-1 md:mb-3 font-bold'>Sara Gadelmoula</h1>
    <p className='text-base md:text-xl mb-3 font-medium'>Frontend Developer</p>
    <p className='text-sm max-w-xl mb-6 font-bold'>
      React developer with a passion for responsive design.
      <br/>
      React JS | ES6 | HTML 5 | CSS 3 | Git
      <br/>
      Working on developing my back-end skills using Node JS.
      <br/>
      Additional programming languages: Python, C
      <br/>
      GitHub: <a href='https://github.com/SaraGadAlMawla'
      target="_blank"
      className='text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600'
      rel='noreferrer noopener'>@SaraGadAlMawla</a>
      <br/>
      Reach me at: sara.abdelkhalek170@gmail.com
    </p>
  </div>
  )
}

export default Intro
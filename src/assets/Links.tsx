// import { useState } from 'react'
import Link from './Link'
import './Links.css'

function Links() {
  return (
    <div className='links asset-container'>
      <Link title={'LinkedIn'} url={'https://www.linkedin.com/in/alan-w-u/'} />
      <Link title={'GitHub'} url={'https://github.com/alan-w-u'} />
      <Link title={'Website'} url={'https://alan-w-u.github.io/'} />
      <button>+</button>
    </div>
  )
}

export default Links

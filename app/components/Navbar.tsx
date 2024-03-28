import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className="flex justify-between items-center h-16">
      <h1 className='font-medium text-xl hover:text-accent hover:shadow-md'>
        <Link href={'/'}>Next St</Link>
      </h1>
      <ul className='flex gap-8'>
        <li className='hover:text-accent'>
          <Link href={'/blog'}>Blog</Link>
        </li>
        <li className='hover:text-accent'>
          <Link href={'/working-space'}>Working Space</Link>
        </li>
        <li className='hover:text-accent'>
          <Link href={'/job-vacancy'}>Job Vacancy</Link>
        </li>
        <li className='hover:text-accent'>
          <Link href={'/contact'}>Contact</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
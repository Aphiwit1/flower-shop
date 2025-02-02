"use client"

import React, { useState } from 'react'
import MobileSidebar from './MobileSidebar/MobileSidebar'
import Link from 'next/link'

export default function Navbar() {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false)

  const handleOnToggleMobileSidebar = (isOpen: boolean) => {
    setIsMobileSidebarOpen(isOpen)
  }
  return (
    <nav className="border-gray-200 bg-gray-50 cursor-pointer">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
   <Link href='/' className="text-gray-700 font-bold">Bloem.wednesday</Link>

      <button onClick={() =>handleOnToggleMobileSidebar(true)} className="text-gray-700 flex gap-2 items-center border border-gray-700 rounded-md px-3 py-1 cursor-pointer">
     
      <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
      </svg>
      <span className='text-xs'>Menu</span>
      </button>

{isMobileSidebarOpen &&  <MobileSidebar handleOnToggleMobileSidebar={handleOnToggleMobileSidebar}/>}
     
  </div>
</nav>
  )
}

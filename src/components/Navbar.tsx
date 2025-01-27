"use client"

import React, { useState } from 'react'
import MobileSidebar from './MobileSidebar/MobileSidebar'

export default function Navbar() {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false)

  const handleOnToggleMobileSidebar = (isOpen: boolean) => {
    setIsMobileSidebarOpen(isOpen)
  }
  return (
    <nav className="border-gray-200 bg-gray-50 cursor-pointer">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
   <div className="text-gray-700">ชื่อร้านค้า</div>

      <button onClick={() =>handleOnToggleMobileSidebar(true)} className="text-gray-700 flex gap-2 items-center border border-gray-700 rounded-md px-3 py-1 cursor-pointer">
     
      <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
      </svg>
      <span>รายการดอกไม้</span>
      </button>

{isMobileSidebarOpen &&  <MobileSidebar handleOnToggleMobileSidebar={handleOnToggleMobileSidebar}/>}
     
  </div>
</nav>
  )
}


"use client"
import withMobileSidebar from './withMobileSidebar'
import { MobileSidebarProps } from './interface'
import Link from 'next/link'



interface SidebarLinkProps {
  href: string
  icon: unknown
  label: string
  onClick: () => void
  isExternalLink?: boolean
}

const SidebarLink = ({
  href,
  label,
  onClick,
  isExternalLink = false,
}: SidebarLinkProps) => {
  if (isExternalLink) {
    return (
      <a
        href={href}
        target='_blank'
        rel='noopener noreferrer'
        className='flex items-center gap-x-2 text-black-6'
      >
        <span>{label}</span>
      </a>
    )
  }

  return (
    <div onClick={onClick}>
      <Link className='flex items-center gap-x-2 cursor-pointer' href={href}>
        <span className='text-black-6'>{label}</span>
      </Link>
    </div>
  )
}

const MobileSidebar = ({ handleOnToggle, }: MobileSidebarProps) => {

//   const { ref, animationClassName } = useMobileSidebarAnimation(isVisible)

  const handleClose = () => handleOnToggle(false)

  return (
    <nav

      className={(
        'bg-sky-50 h-full w-full fixed top-0 left-0 z-20 p-5'
      )}
    >
      <div className='h-full max-w-7xl mx-auto flex flex-col'>
        <section className='flex justify-between pb-2 border-b border-gray-700 text-gray-700'>
          <div>ชื่อร้านค้า</div>
          <div className='text-gray-700 flex gap-2 items-center border border-gray-700 rounded-md px-3 py-1 cursor-pointer' onClick={handleClose}>
          X ปิดเมนู
          </div>
        </section>

        <section className='flex flex-col justify-between h-full'>
          <div className='flex flex-col mt-10 gap-y-6 text-gray-700'>
            <SidebarLink
              href='/flower-a'
              icon={''}
              label={'ดอกไม้ A'}
              onClick={handleClose}
            />

<SidebarLink
              href='/flower-b'
              icon={''}
              label={'ดอกไม้ B'}
              onClick={handleClose}
            />
          </div>

      
        </section>
      </div>
    </nav>
  )
}

const WrappedComponent = withMobileSidebar(MobileSidebar)
export default WrappedComponent
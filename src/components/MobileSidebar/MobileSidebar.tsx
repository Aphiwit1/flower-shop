
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
  className?:string
}

const SidebarLink = ({
  href,
  label,
  onClick,
  className,
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
      <Link className={'flex items-center gap-x-2 cursor-pointer ' + className} href={href}>
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
        'bg-[#ECE0EA] h-full w-full fixed top-0 left-0 z-20 p-5'
      )}
    >
      <div className='h-full max-w-7xl mx-auto flex flex-col '>
        <section className='flex justify-between pb-2 border-b border-gray-700 text-gray-700'>
          <div className="text-gray-700 font-bold">Bloem.wednesday</div>
          <div className='text-gray-700 flex gap-2 items-center rounded-md px-3 py-1  font-boldcursor-pointer' onClick={handleClose}>
          X 
          {/* <span className='text-xs'>close menu</span> */}
          </div>
        </section>

        <section className='flex flex-col justify-between h-full'>
          <div className='flex flex-col mt-5 gap-y-6 text-gray-700'>
            <div className=' pb-5  flex flex-col gap-y-5 border-b-2 border-dashed border-pink-300'>
            <SidebarLink
              href='/view-your-collection'
              icon={''}
              label={'Your collection'}
              onClick={handleClose}
            />
               <SidebarLink
              href='/customize-your-collection'
              icon={''}
              label={'Customize your own'}
              onClick={handleClose}
            />
            </div>

            <div className='pb-5  flex flex-col gap-y-5 border-b-2 border-dashed border-pink-300'>
            <SidebarLink
              href='/view-viva-collection'
              icon={''}
              label={'Viva collection'}
              onClick={handleClose}
            />
               <SidebarLink
              href='customize-viva-collection'
              icon={''}
              label={'Customize your own'}
              onClick={handleClose}
            />
            </div>

            <div className='pb-5  flex flex-col gap-y-5 border-b-2 border-dashed border-pink-300'>
            <SidebarLink
              href='/view-blair-collection'
              icon={''}
              label={'Blair collection'}
              onClick={handleClose}
            />
               <SidebarLink
              href='customize-blair-collection'
              icon={''}
              label={'Customize your own'}
              onClick={handleClose}
            />
            </div>

            <div className=' border-gray-800 flex flex-col gap-y-5'>
            <SidebarLink
              href='/flower-a'
              icon={''}
              label={'Your collection'}
              onClick={handleClose}
            />
               <SidebarLink
              href='/flower-a'
              icon={''}
              label={'Customize your own'}
              onClick={handleClose}
            />
            </div>

            

          </div>

      
        </section>
      </div>
    </nav>
  )
}

const WrappedComponent = withMobileSidebar(MobileSidebar)
export default WrappedComponent
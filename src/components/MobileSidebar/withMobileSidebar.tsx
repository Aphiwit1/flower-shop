

import { useState } from 'react'
import { MobileSidebarAcceptProps, MobileSidebarProps } from './interface'
  
  const withMobileSidebar = (Component: React.FC<MobileSidebarProps>) => {
    const Hoc = ({handleOnToggleMobileSidebar}:MobileSidebarAcceptProps) => {
      const [isVisible, setIsVisible] = useState(true)
      const handleOnToggle = (isOpen: boolean) => {
        handleOnToggleMobileSidebar(isOpen)
        setIsVisible(isOpen)
      }
  
      const newProps: MobileSidebarProps = {
        handleOnToggle,
        isVisible,
      }
      return <Component {...newProps} />
    }
  
    return Hoc
  }
  export default withMobileSidebar
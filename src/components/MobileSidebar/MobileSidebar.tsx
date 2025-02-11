"use client";
import withMobileSidebar from "./withMobileSidebar";
import { MobileSidebarProps } from "./interface";
import Link from "next/link";

import { FaRegHandPointRight } from "react-icons/fa";


interface SidebarLinkProps {
  href: string;
  icon: unknown;
  label: string;
  onClick: () => void;
  isExternalLink?: boolean;
  className?: string;
}



import { usePathname } from "next/navigation"; // Import usePathname

const SidebarLink = ({
  href,
  label,
  onClick,
  className,
  isExternalLink = false,
}: SidebarLinkProps) => {
  const pathname = usePathname(); // Get the current pathname

  const isActive = pathname === href; // Compare current pathname with href to check if active

  const activeClass = isActive ? 'border-b-2 border-pink-500 ' : ''; // Define active state styles

  if (isExternalLink) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center gap-x-2 text-black-6 ${activeClass}`}
      >
        <span>{label}</span>
      </a>
    );
  }

  return (
    <div onClick={onClick}>
      <Link
        className={`flex items-center gap-x-2 cursor-pointer ${className} `}
        href={href}
      >
       <FaRegHandPointRight />
       <span className={`text-black-6 ${activeClass}`}>{label}</span>
      </Link>
    </div>
  );
};



const MobileSidebar = ({ handleOnToggle }: MobileSidebarProps) => {
  //   const { ref, animationClassName } = useMobileSidebarAnimation(isVisible)

  const handleClose = () => handleOnToggle(false);

  return (
    <nav className={"bg-[#ECE0EA] h-full w-full fixed top-0 left-0 z-20 p-5"}>
      <div className="h-full max-w-7xl mx-auto flex flex-col ">
        <section className="flex justify-between pb-2 border-b border-gray-700 text-gray-700">
          <Link href="/" className="text-gray-700 font-bold">
            Bloem.wednesday
          </Link>
          <div
            className="text-gray-700 flex gap-2 items-center rounded-md px-3 py-1  font-boldcursor-pointer"
            onClick={handleClose}
          >
            X{/* <span className='text-x'>close menu</span> */}
          </div>
        </section>

        <section className="flex flex-col justify-between h-full">
          <div className="flex flex-col mt-5 gap-y-4 text-gray-700">
            <div className="pb-3  flex flex-col gap-y-5   border-b-2 border-dashed border-gray-400">
              <SidebarLink
                href="/promotion"
                icon={""}
                label={"Promotion"}
                onClick={handleClose}
                className="!text-pink-600  font-bold"
              />
              <SidebarLink
                href="/special-deal"
                icon={""}
                label={"Special deal"}
                onClick={handleClose}
                className="!text-pink-600 font-bold"
              />
            </div>

            <div className=" pb-3  flex flex-col gap-y-5 border-b-2 border-dashed border-gray-400">
              <SidebarLink
                href="/view-your-collection"
                icon={""}
                label={"Yours collection"}
                onClick={handleClose}
                className="!text-pink-600 font-semibold"
              />
              <SidebarLink
                href="/customize-your-collection"
                icon={""}
                label={"Price list"}
                onClick={handleClose}
                className="!text-gray-60 pl-5"
              />
            </div>

            <div className="pb-3  flex flex-col gap-y-5 border-b-2 border-dashed border-gray-400">
              <SidebarLink
                href="/view-viva-collection"
                icon={""}
                label={"Viva collection"}
                onClick={handleClose}
                className="!text-pink-600 font-semibold"
              />
              <SidebarLink
                href="/customize-viva-collection"
                icon={""}
                label={"Price list"}
                onClick={handleClose}
                className="!text-gray-600 pl-5"
              />
            </div>

            <div className="pb-3  flex flex-col gap-y-5 border-b-2 border-dashed border-gray-400">
              <SidebarLink
                href="/view-blair-collection"
                icon={""}
                label={"Blair collection"}
                onClick={handleClose}
                className="!text-pink-600 font-semibold"
              />
              <SidebarLink
                href="/customize-blair-collection"
                icon={""}
                label={"Price list"}
                onClick={handleClose}
                className="!text-gray-600 pl-5"
              />
            </div>

            <div className="pb-3  flex flex-col gap-y-5 border-b-2 border-dashed border-gray-400">
              <SidebarLink
                href="/view-riri-collection"
                icon={""}
                label={"Riri's collection"}
                onClick={handleClose}
                className="!text-pink-600 font-semibold"
              />
              <SidebarLink
                href="/customize-riri-collection"
                icon={""}
                label={"Price list"}
                onClick={handleClose}
                className="!text-gray-600 pl-5"
              />
            </div>
          </div>
        </section>
      </div>
    </nav>
  );
};

const WrappedComponent = withMobileSidebar(MobileSidebar);
export default WrappedComponent;

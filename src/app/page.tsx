import { Metadata } from "next";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative max-w-[500px] mx-auto pt-7">

      <Image
        src="/img/bloem-home-logo-4x.png" // Ensure this path is correct
        alt="Bloem Home Logo"
        width={300} // Adjust size as needed
        height={150} // Adjust size as needed
        className="absolute top-0"
      />


      <Image
        src="/img/home-image-4x.png" // Ensure this path is correct
        alt="Bloem Home Logo"
        width={300} // Adjust size as needed
        height={150} // Adjust size as needed
        className="w-full"
      />


    </div>
  );
}

export const metadata: Metadata = {
  title: 'Bloem wednesday | home',
  description: '...',
}
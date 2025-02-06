import Image from "next/image";

export default function Page() {
  return (
    <div className="relative max-w-[500px] mx-auto pt-14">
      <Image
        src="/img/promotion/promotion-1-4x.png"
        alt="view your collection 1"
        width={300}
        height={150}
        className="w-full"
      />
      <Image
        src="/img/promotion/promotion-2-4x.png"
        alt="view your collection 2"
        width={300}
        height={150}
        className="w-full"
      />
      <Image
        src="/img/promotion/promotion-3-4x.png"
        alt="view your collection 3"
        width={300}
        height={150}
        className="w-full"
      />
    </div>
  );
}

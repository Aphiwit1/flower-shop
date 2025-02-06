import Image from "next/image";

export default function Page() {
  return (
    <div className="relative max-w-[500px] mx-auto pt-14 px-2 bg-pink-50 flex flex-col gap-y-2">
      <Image
        src="/img/special-deal/special-deal-1-4x.png"
        alt="view your collection 1"
        width={300}
        height={150}
        className="w-full"
      />
      <Image
        src="/img/special-deal/special-deal-2-4x.png"
        alt="view your collection 2"
        width={300}
        height={150}
        className="w-full"
      />
      <Image
        src="/img/special-deal/special-deal-3-4x.png"
        alt="view your collection 3"
        width={300}
        height={150}
        className="w-full"
      />
    </div>
  );
}

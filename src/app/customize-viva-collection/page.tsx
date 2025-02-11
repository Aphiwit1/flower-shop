import Image from "next/image";

export default function Page() {
  return (
    <div className="relative max-w-[500px] mx-auto pt-14 px-2 bg-pink-50 flex flex-col gap-y-2 ">
      <Image
        src="/img/viva-collection/viva-collection-detail-1-4x.png"
        alt="viva-collection-detail-1-4x"
        width={300}
        height={150}
        className="w-full"
      />
    </div>
  );
}

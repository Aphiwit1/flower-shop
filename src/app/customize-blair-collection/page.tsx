import Image from "next/image";

export default function Page() {
  return (
    <div className="relative max-w-[500px] mx-auto pt-7">
      <Image
        src="/img/blair-collection/blair-collection-detail-1-4x.png"
        alt="blair-collection-detail-1-4x"
        width={300}
        height={150}
        className="w-full"
      />

    </div>
  );
}

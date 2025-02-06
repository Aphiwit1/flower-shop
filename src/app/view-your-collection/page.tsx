import Image from "next/image";

export default function Page() {
  return (
    <div className="relative max-w-[500px] mx-auto pt-7">
      <Image
        src="/img/your-collection/your-collection-1-4x.png"
        alt="view your collection 1"
        width={300}
        height={150}
        className="w-full"
      />

      <Image
        src="/img/your-collection/your-collection-2-4x.png"
        alt="view your collection 1"
        width={300}
        height={150}
        className="w-full"
      />

      <Image
        src="/img/your-collection/your-collection-3-4x.png"
        alt="view your collection 1"
        width={300}
        height={150}
        className="w-full"
      />

      <Image
        src="/img/your-collection/your-collection-4-4x.png"
        alt="view your collection 1"
        width={300}
        height={150}
        className="w-full"
      />

      <Image
        src="/img/your-collection/your-collection-5-4x.png"
        alt="view your collection 1"
        width={300}
        height={150}
        className="w-full"
      />
    </div>
  );
}

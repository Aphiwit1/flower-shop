import Image from "next/image";

export default function Page() {
  return (
    <div className="relative max-w-[500px] mx-auto pt-14">
      <Image
        src="/img/riri-collection/riri-collection-1-4x.png"
        alt="view riri collection 1"
        width={300}
        height={150}
        className="w-full"
      />

      <Image
        src="/img/riri-collection/riri-collection-2-4x.png"
        alt="view riri collection 1"
        width={300}
        height={150}
        className="w-full"
      />

      <Image
        src="/img/riri-collection/riri-collection-3-4x.png"
        alt="view riri collection 1"
        width={300}
        height={150}
        className="w-full"
      />

      <Image
        src="/img/riri-collection/riri-collection-4-4x.png"
        alt="view riri collection 1"
        width={300}
        height={150}
        className="w-full"
      />
    </div>
  );
}

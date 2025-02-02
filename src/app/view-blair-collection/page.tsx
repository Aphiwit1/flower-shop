import Image from "next/image";

export default function Page() {
    return (
        <div className="relative max-w-[500px] mx-auto">
            <Image
                src="/img/blair-collection/blair-collection-1-4x.png"
                alt="view blair collection 1"
                width={300}
                height={150}
                className="w-full"
            />

            <Image
                     src="/img/blair-collection/blair-collection-2-4x.png"
                alt="view blair collection 1"
                width={300}
                height={150}
                className="w-full"
            />

            <Image
                      src="/img/blair-collection/blair-collection-3-4x.png"
                alt="view blair collection 1"
                width={300}
                height={150}
                className="w-full"
            />
        </div>
    );
}

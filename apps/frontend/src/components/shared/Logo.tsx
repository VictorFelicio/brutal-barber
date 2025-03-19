import Image from 'next/image';
import Link from 'next/link';

export function Logo() {
    return (
        <Link
            href="/"
            className="flex items-center"
        >
            <Image
                src="/logo.png"
                alt="logo"
                width={65}
                height={65}
                className="hidden sm:block"
            />
            <Image
                src="/logo.png"
                alt="logo"
                width={50}
                height={50}
                className="block sm:hidden"
            />
            <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-extralight tracking-widest leading-6 text-gradient">
                    Brutal
                </span>
                <span className="text-[20px] sm:text-[24px] font-bold  leading-6 text-gradient ">
                    Barber
                </span>
            </div>
        </Link>
    );
}

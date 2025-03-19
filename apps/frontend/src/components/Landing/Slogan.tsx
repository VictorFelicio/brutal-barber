import Image from 'next/image';
import { Navbar } from '../shared/Navbar';
import Link from 'next/link';

export function Slogan() {
    return (
        <div className="relative h-[450px] sm:h-[700px]">
            <Image
                src="/banners/principal.webp"
                alt="logo image"
                fill
                className="object-cover"
            />
            <div className=" flex flex-col items-center absolute top-0 left-0 w-full h-full bg-black/65">
                <Navbar />
                <div className="flex flex-col items-center flex-1 justify-center gap-5">
                    <h1 className="flex flex-col items-center">
                        <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-thin tracking-wider text-zinc-300">
                            Transformações
                        </span>
                        <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-gradient">
                            Lendárias
                        </span>
                    </h1>
                    <p className="text-zinc-300 text-base  sm:text-lg font-extralight ">
                        🤘 Seu estilo é nosso estilo! 🤘
                    </p>
                    <Link
                        href="/agendamento"
                        className="bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold text-base md:text-lg px-4 py-2 rounded-sm hover:to-green-900"
                    >
                        Agendar Agora
                    </Link>
                </div>
            </div>
        </div>
    );
}

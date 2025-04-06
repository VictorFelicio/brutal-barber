import Image from 'next/image';
import { Logo } from './Logo';

export default function Processing() {
    return (
        <div className="h-screen">
            <Image
                src="/banners/principal.webp"
                alt="Banner"
                fill
            />
            <div
                className="
                flex flex-col
                justify-center
                items-center
                absolute 
                top-0 left-0 w-full h-full bg-black/90 gap-2 text-center"
            >
                <Logo />
                <span className='font-light text-zinc-500 ml-9'>Aguarde...</span>
            </div>
        </div>
    );
}

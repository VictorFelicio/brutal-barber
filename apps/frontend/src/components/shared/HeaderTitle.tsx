import Image from 'next/image';
import { Navbar } from './Navbar';

interface HeaderTitleProps {
    title: string;
    description: string;
}
export function HeaderTitle(props: HeaderTitleProps) {
    return (
        <div className="relative h-[180px]">
            <Image
                src="/banners/principal.webp"
                alt="Barbearia"
                fill
                className="object-cover"
            />
            <div className="flex flex-col absolute top-0 left-0 w-full h-full bg-black/65">
                <Navbar />
                <div className="container flex flex-col justify-center items-center">
                    <h1 className="text-3xl font-bold text-zinc-300">{props.title}</h1>
                    <p className="text-sm font-light text-zinc-400">{props.description}</p>
                </div>
            </div>
        </div>
    );
}

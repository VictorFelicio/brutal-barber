import Image from 'next/image';

interface SectionBackgroundProps {
    children: React.ReactNode;
    image: string;
}
export function SectionBackground(props: SectionBackgroundProps) {
    return (
        <div className="relative">
            <Image
                src={props.image}
                alt="image background"
                fill
                className="object-cover -z-30"
            />
            <div className="bg-black/70 sm:bg-transparent bg-gradient-to-r from-black/60  via-black/90 to-blac/60">
                <div className="container py-10">{props.children}</div>
            </div>
        </div>
    );
}

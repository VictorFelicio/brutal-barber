import Image from 'next/image';
import { ServiceCardProps } from '../interface/index';

export function ServiceCard(props: ServiceCardProps) {
    return (
        <div className="flex rounded-xl bg-zinc-800 overflow-hidden">
            <Image
                src={props.service.imageURL}
                alt={props.service.name}
                className="object-cover"
                width={150}
                height={150}
            />
            <div className="flex flex-col p-5 gap-2">
                <span className="text-xl font-black text-zinc-300">
                    {props.service.name}
                </span>
                <span className="text-xs text-zinc-400 flex-1">
                    {props.service.description}
                </span>
                <span className="text-zinc-300">R${props.service.price.toFixed(2)}</span>
            </div>
        </div>
    );
}

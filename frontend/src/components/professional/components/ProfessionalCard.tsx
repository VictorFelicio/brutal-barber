import Image from 'next/image';
import { IconBrandInstagram, IconBrandX, IconBrandYoutube } from '@tabler/icons-react';
import { ProfessionalCardProps } from '../interface';
import { Stars } from '@/components/shared/Stars';

export function ProfessionalCard(props: ProfessionalCardProps) {
    return (
        <div className="flex flex-col rounded-xl bg-zinc-800 overflow-hidden">
            <div className="relative h-72 w-full">
                <Image
                    src={props.professional.imageURL}
                    alt={props.professional.name}
                    fill
                    className="object-cover object-top"
                />
            </div>
            <div className="flex flex-col p-4 gap-5">
                <span className="text-2xl font-black text-zinc-300 text-gradient">
                    {props.professional.name}
                </span>
                <span className="text-sm text-zinc-400 flex-1">
                    {props.professional.description}
                </span>

                <Stars
                    rating={props.professional.stars}
                    qtyComments={props.professional.qtyReviews}
                />

                <div className="flex gap-3 text-zinc-300">
                    <IconBrandYoutube stroke={1} />
                    <IconBrandInstagram stroke={1} />
                    <IconBrandX stroke={1} />
                </div>
            </div>
        </div>
    );
}

import { IconStar, IconStarFilled, IconStarHalfFilled } from '@tabler/icons-react';

interface StarsProps {
    rating: number;
    qtyComments: number;
}
export function Stars(props: StarsProps) {
    const stars = Array.from({ length: 5 }, (_, index) => {
        const value = index + 1;
        if (value <= props.rating) {
            return (
                <IconStarFilled
                    key={index}
                    size={18}
                />
            );
        } else if (props.rating > value - 1) {
            return (
                <IconStarHalfFilled
                    key={index}
                    size={18}
                />
            );
        } else {
            return (
                <IconStar
                    key={index}
                    size={18}
                />
            );
        }
    });

    return (
        <div className="flex itens-center gap-2">
            <div className="flex text-yellow-400 gap-0.5">{stars}</div>
            <span className="text-xs text-zinc-300 ml-2">({props.qtyComments})</span>
        </div>
    );
}

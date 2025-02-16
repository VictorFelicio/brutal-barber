import { ClientCardProps } from '../interface';

export function ClientCard(props: ClientCardProps) {
    return (
        <div>
            <p className="font-bold text-4xl text-white">{props.client.name}</p>
            <p className="my-4 text-zinc-300">{props.client.review}</p>
        </div>
    );
}

import { TitleSection } from '@/components/shared/TitleSection';
import { clients } from '@/data/constants/clients';
import { ClientCard } from './ClientCard';
import { LayoutGrid } from '@/components/ui/layout-grid';

export function OurClients() {
    const classes = ['md:col-span-2', 'col-span-1', 'col-span-1', 'md:col-span-2'];
    const cards = clients.map((clt, i) => {
        return {
            id: clt.id,
            content: <ClientCard client={clt} />,
            thumbnail: clt.imagemURL,
            className: classes[i],
        };
    });
    return (
        <div className="flex flex-col gap-y-16">
            <TitleSection
                tag="Clientes"
                main="Quem Manda Aqui"
                secondary="Nossos clientes são os chefes! Aqui, eles mandam, desmandam e ainda saem no estilo!"
            />
            <div className="h-[900px] w-full">
                <LayoutGrid cards={cards} />
            </div>
        </div>
    );
}

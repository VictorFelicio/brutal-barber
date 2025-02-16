import { TitleSection } from '@/components/shared/TitleSection';
import { clients } from '@/data/constants/clients';
import { ClientCard } from './ClientCard';

export function OurClients() {
    return (
        <div className="flex flex-col gap-y-16">
            <TitleSection
                tag="Clientes"
                main="Quem Manda Aqui"
                secondary="Nossos clientes são os chefes! Aqui, eles mandam, desmandam e ainda saem no estilo!"
            />
            <div>
                {clients.map((client) => (
                    <ClientCard
                        key={client.id}
                        client={client}
                    />
                ))}
            </div>
        </div>
    );
}

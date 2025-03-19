import { services } from '@/data/constants/services';
import { ServiceCard } from './ServiceCard';
import { TitleSection } from '@/components/shared/TitleSection';

export function OurServices() {
    return (
        <div className="flex flex-col gap-y-16">
            <TitleSection
                tag="Serviços"
                main="Do Clássico ao Rock"
                secondary="Cabelo afiado, barba de lenhador e mãos de motoqueiro, tudo ao som de rock pesado!"
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
                {services.map((service) => (
                    <ServiceCard
                        key={service.id}
                        service={service}
                    />
                ))}
            </div>
        </div>
    );
}

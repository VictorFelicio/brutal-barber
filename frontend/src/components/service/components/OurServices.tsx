import { services } from '@/data/constants/services';
import { ServiceCard } from './ServiceCard';

export function OurServices() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
            {services.map((service) => (
                <ServiceCard
                    key={service.id}
                    service={service}
                />
            ))}
        </div>
    );
}

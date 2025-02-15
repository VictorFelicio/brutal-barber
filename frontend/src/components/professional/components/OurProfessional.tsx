import { professionals } from '@/data/constants/professionals';
import { ProfessionalCard } from './ProfessionalCard';

export function OurProfessional() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
            {professionals.map((professional) => (
                <ProfessionalCard
                    key={professional.id}
                    professional={professional}
                />
            ))}
        </div>
    );
}

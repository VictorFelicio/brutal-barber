import { professionals } from '@/data/constants/professionals';
import { ProfessionalCard } from './ProfessionalCard';
import { TitleSection } from '@/components/shared/TitleSection';

export function OurProfessional() {
    return (
        <div className="flex flex-col gap-16">
            <TitleSection
                tag="Time"
                main="Nossos Brutos"
                secondary="Só os mais brabos aqui! Temos o orgulho de ter o time mais qualificado do Brasil!"
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
                {professionals.map((professional) => (
                    <ProfessionalCard
                        key={professional.id}
                        professional={professional}
                    />
                ))}
            </div>
        </div>
    );
}

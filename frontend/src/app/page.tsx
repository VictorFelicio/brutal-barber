import { OurProfessional } from '@/components/Professional/components/OurProfessional';
import { OurServices } from '@/components/Service/components/OurServices';
import { SectionBackground } from '@/components/shared/SectionBackground';

export default function Landing() {
    return (
        <div className="flex flex-col">
            <div className="container py-10">
                <h1 className="text-6xl py-20">Landing Teste</h1>
            </div>
            <SectionBackground image="/banners/servicos.webp">
                <OurServices />
            </SectionBackground>

            <SectionBackground image="/banners/profissionais.webp">
                <OurProfessional />
            </SectionBackground>
        </div>
    );
}

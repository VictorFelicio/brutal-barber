import { Slogan } from '@/components/Landing/Slogan';
import { SectionBackground } from '@/components/shared/SectionBackground';
import { OurClients } from '@/components/Client/components/OurClients';
import { OurProfessional } from '@/components/Professional/components/OurProfessional';
import { OurServices } from '@/components/Service/components/OurServices';
import { Footer } from '@/components/shared/Footer';

export default function Landing() {
    return (
        <div className="flex flex-col">
            <Slogan />

            <SectionBackground image="/banners/servicos.webp">
                <OurServices />
            </SectionBackground>

            <SectionBackground image="/banners/profissionais.webp">
                <OurProfessional />
            </SectionBackground>

            <SectionBackground image="/banners/clientes.webp">
                <OurClients />
            </SectionBackground>

            <Footer />
        </div>
    );
}

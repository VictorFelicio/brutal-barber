import { OurProfessional } from '@/components/Professional/components/OurProfessional';
import { OurServices } from '@/components/Service/components/OurServices';
import { Footer } from '@/components/shared/Footer';
import { Navbar } from '@/components/shared/Navbar';
import { SectionBackground } from '@/components/shared/SectionBackground';

export default function Landing() {
    return (
        <div className="flex flex-col">
            <Navbar />
            <div className="container py-10">
                <h1 className="text-6xl">Landing Teste</h1>
            </div>
            <SectionBackground image="/banners/servicos.webp">
                <OurServices />
            </SectionBackground>

            <SectionBackground image="/banners/profissionais.webp">
                <OurProfessional />
            </SectionBackground>
            <Footer />
        </div>
    );
}

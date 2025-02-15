import { OurProfessional } from '@/components/Professional/components/OurProfessional';
import { OurServices } from '@/components/Service/components/OurServices';

export default function Landing() {
    return (
        <div className="flex flex-col gap-10 container">
            <h1 className="text-6xl py-20">Landing Teste</h1>
            <OurServices />
            <OurProfessional />
        </div>
    );
}

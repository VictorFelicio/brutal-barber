'use client';

import FormScheduling from '@/components/scheduling/FormScheduling';
import { HeaderTitle } from '@/components/shared/HeaderTitle';

export default function Scheduling() {
    return (
        <div className="flex flex-col gap-5">
            <HeaderTitle
                title="Agendamento de serviços"
                description="Seja atendido exatamente no horário marcado!"
            />
            <div className="container py-10">
                <FormScheduling />
            </div>
        </div>
    );
}

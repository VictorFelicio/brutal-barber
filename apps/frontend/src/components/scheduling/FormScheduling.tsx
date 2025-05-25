import { Professional, Service } from '@brutalbarber/core';
import SelectInputProfessional from '../Professional/components/SelectInputProfessional';
import { useState } from 'react';
import CheckboxInputServices from '../Service/components/CheckboxServices';
import InputDate from '../shared/Form/InputDate';
import useAPI from '@/data/hooks/useAPI';
import { useSession } from '@/data/hooks/useSession';

export default function FormScheduling() {
    const [professional, setProfessional] = useState<Professional | null>(null);
    const [services, setServices] = useState<Service[]>([]);
    const [date, setDate] = useState<Date>(new Date());

    const { apiHttpPost } = useAPI();
    const { user } = useSession();

    async function handleScheduling() {
        console.log({ professional, services, date, user });

        await apiHttpPost('/scheduling', {
            date,
            user,
            professional,
            services,
        });
    }
    return (
        <div className="flex flex-col gap-5">
            <SelectInputProfessional
                className="input"
                label="Profissional"
                value={professional}
                onChange={setProfessional}
            />
            <CheckboxInputServices
                className="input"
                label="Serviços"
                value={services}
                onChange={setServices}
            />

            <InputDate
                className="input"
                label="Data"
                value={date}
                onChange={setDate}
                onlyFutureDates={true}
            />
            <div>
                <button
                    onClick={handleScheduling}
                    className="button bg-blue-500"
                >
                    Agendar
                </button>
            </div>
        </div>
    );
}

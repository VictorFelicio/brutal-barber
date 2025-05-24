import { Professional, Service } from '@brutalbarber/core';
import SelectInputProfessional from '../Professional/components/SelectInputProfessional';
import { useState } from 'react';
import CheckboxInputServices from '../Service/components/CheckboxServices';
import InputDate from '../shared/Form/InputDate';

export default function FormScheduling() {
    const [professional, setProfessional] = useState<Professional | null>(null);
    const [services, setServices] = useState<Service[]>([]);
    const [date, setDate] = useState<Date>(new Date());

    function handleSercices(services: Service[]) {
        setServices(services);
        console.log(services.map((s) => s.name));
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
                onChange={handleSercices}
            />

            <InputDate
                className="input"
                label="Data"
                value={date}
                onChange={setDate}
                onlyFutureDates
            />
        </div>
    );
}

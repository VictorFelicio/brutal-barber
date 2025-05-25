'use client';

import { Professional, Service } from '@brutalbarber/core';
import { createContext, useState } from 'react';
import useAPI from '../hooks/useAPI';
import { useSession } from '../hooks/useSession';

export interface SchedulingContextProps {
    professional: Professional | null;
    services: Service[];
    date: Date;
    selectProfessional: (professional: Professional) => void;
    selectService: (service: Service[]) => void;
    selectDate: (date: Date) => void;
    handleScheduling: () => Promise<void>;
}

const SchedulingContext = createContext<SchedulingContextProps>({} as SchedulingContextProps);

export function SchedulingProvider(props: { children: React.ReactNode }) {
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
        <SchedulingContext.Provider
            value={{
                professional,
                services,
                date,
                selectProfessional: setProfessional,
                selectService: setServices,
                selectDate: setDate,
                handleScheduling,
            }}
        >
            {props.children}
        </SchedulingContext.Provider>
    );
}

export default SchedulingContext;

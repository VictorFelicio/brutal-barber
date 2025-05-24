import { useServices } from '@/data/hooks/useServices';
import { Service } from '@brutalbarber/core';
import React from 'react';

export interface CheckboxInputServicesProps
    extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> {
    label?: string;
    value: Service[];
    onChange: (value: Service[]) => void;
}

export default function CheckboxInputServices(props: CheckboxInputServicesProps) {
    const { services } = useServices();

    function onChange(e: React.ChangeEvent<HTMLInputElement>, service: Service) {
        const newServices = props.value.filter((s) => s.id !== service.id);

        props.onChange(e.target.checked ? [...newServices, service] : newServices);
    }

    return services ? (
        <div className="C">
            {props.label && <span>{props.label}</span>}

            <div className="grid grid-cols-3 gap-7">
                {services.map((svc) => (
                    <div
                        key={svc.id}
                        className="flex gap-2 items-center"
                    >
                        <input
                            {...props}
                            type="checkbox"
                            value={svc.id}
                            onChange={(e) => onChange(e, svc)}
                            checked={props.value.some((item) => item.id === svc.id)}
                        />
                        <span>{svc.name}</span>
                    </div>
                ))}
            </div>
        </div>
    ) : null;
}

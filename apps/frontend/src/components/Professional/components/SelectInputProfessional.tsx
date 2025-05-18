import { useProfessionals } from '@/data/hooks/useProfessionals';
import { Professional } from '@brutalbarber/core';

export interface SelectInputProfessionalProps
    extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'value' | 'onChange'> {
    label?: string;
    value: Professional | null;
    onChange: (value: Professional) => void;
}

export default function SelectInputProfessional(props: SelectInputProfessionalProps) {
    const { professionals } = useProfessionals();

    function onChange(e: React.ChangeEvent<HTMLSelectElement>) {
        const id = +e.target.value;
        const professional = professionals.find((professional) => professional.id === id);
        if (professional) {
            props.onChange(professional);
        }
    }

    return professionals ? (
        <div className="flex flex-col">
            {props.label && <span>{props.label}</span>}
            <select
                {...props}
                value={props.value?.id ?? professionals[0].id}
                onChange={onChange}
            >
                {professionals.map((professional) => (
                    <option
                        key={professional.id}
                        value={professional.id}
                    >
                        {professional.name}
                    </option>
                ))}
            </select>
        </div>
    ) : null;
}

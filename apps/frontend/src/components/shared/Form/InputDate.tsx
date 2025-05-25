import React from 'react';

export interface InputDateProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> {
    label?: string;
    value: Date | null;
    onlyFutureDates?: boolean;
    onChange: (value: Date) => void;
}

export default function InputDate(props: InputDateProps) {
    const { onlyFutureDates, ...rest } = props;

    function onChange(e: React.ChangeEvent<HTMLInputElement>) {
        props.onChange(new Date(`${e.target.value}:00Z`));
    }
    const minDate = onlyFutureDates ? new Date().toISOString().substring(0, 16) : undefined;

    return (
        <div className="flex flex-col">
            {props.label && <span>{props.label}</span>}
            <input
                {...rest}
                type="datetime-local"
                value={props.value?.toISOString().substring(0, 16) ?? ''}
                onChange={onChange}
                min={minDate}
            />
        </div>
    );
}

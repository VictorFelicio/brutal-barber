import { InputHTMLAttributes } from 'react';

export interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
    onChangeInput?: (s: string) => void;
}

export default function InputText(props: InputTextProps) {
    return (
        <input
            className="input"
            type="text"
            value={props.value}
            placeholder="Nome"
            onChange={(e) => {
                props.onChange?.(e);
                props.onChangeInput?.(e.target.value);
            }}
            {...props}
        />
    );
}

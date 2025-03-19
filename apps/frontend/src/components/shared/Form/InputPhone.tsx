import { InputHTMLAttributes } from 'react';

export interface InputPhoneProps extends InputHTMLAttributes<HTMLInputElement> {
    onChangeInput?: (s: string) => void;
}

export default function InputPhone(props: InputPhoneProps) {
    return (
        <input
            className="input"
            type="tel"
            value={props.value}
            placeholder="Telefone"
            onChange={(e) => {
                props.onChange?.(e);
                props.onChangeInput?.(e.target.value);
            }}
            {...props}
        />
    );
}

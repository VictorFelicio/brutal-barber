import { InputHTMLAttributes } from 'react';

export interface InputEmailProps extends InputHTMLAttributes<HTMLInputElement> {
    onChangeInput?: (s: string) => void;
}

export default function InputEmail(props: InputEmailProps) {
    return (
        <input
            className="input"
            type="email"
            value={props.value}
            placeholder="E-mail"
            onChange={(e) => {
                props.onChange?.(e);
                props.onChangeInput?.(e.target.value);
            }}
            {...props}
        />
    );
}

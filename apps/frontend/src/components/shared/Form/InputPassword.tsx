import { IconEye, IconEyeOff } from '@tabler/icons-react';
import { InputHTMLAttributes, useState } from 'react';

export interface InputPasswordProps extends InputHTMLAttributes<HTMLInputElement> {
    onChangeInput?: (s: string) => void;
}

export default function InputPassword(props: InputPasswordProps) {
    const [showPassword, setShowPassword] = useState(false);

    function toggleShowPassword() {
        setShowPassword(!showPassword);
    }
    return (
        <div className="flex input">
            <input
                className="flex-1 bg-transparent outline-none"
                type={showPassword ? 'text' : 'password'}
                value={props.value}
                name="password"
                placeholder="Senha"
                onChange={(e) => {
                    props.onChange?.(e);
                    props.onChangeInput?.(e.target.value);
                }}
            />
            {showPassword ? (
                <IconEyeOff onClick={toggleShowPassword} />
            ) : (
                <IconEye onClick={toggleShowPassword} />
            )}
        </div>
    );
}

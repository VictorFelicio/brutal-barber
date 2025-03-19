import { ChangeEvent, useState } from 'react';
import useAPI from './useAPI';

export function useFormAuth() {
    const [mode, setMode] = useState<'login' | 'register'>('login');
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [phone, setPhone] = useState<string>('');

    const { apiHttpPost } = useAPI();

    function toggleMode() {
        setMode(mode === 'login' ? 'register' : 'login');
    }

    function resetForm() {
        setEmail('');
        setPassword('');
        setName('');
        setPhone('');
        setMode('login');
    }

    async function submit() {
        if (mode === 'login') {
            const token = await apiHttpPost('auth/login', { email, password });
            console.log(token);
            resetForm();
        }

        if (mode === 'register') {
            const token = await apiHttpPost('auth/register', {
                name,
                email,
                password,
                phone,
            });
            resetForm();
            console.log(token);
        }
    }

    function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;

        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
                break;
            case 'phone':
                setPhone(value);
                break;
            default:
                break;
        }
    }

    return {
        name,
        email,
        password,
        phone,
        mode,
        toggleMode,
        submit,
        handleOnChange,
    };
}

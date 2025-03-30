import { ChangeEvent, useState } from 'react';
import useAPI from './useAPI';
import { useSession } from './useSession';
import { useRouter } from 'next/navigation';

export function useFormAuth() {
    const [mode, setMode] = useState<'login' | 'register'>('login');
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [phone, setPhone] = useState<string>('');

    const { apiHttpPost } = useAPI();
    const { startSession } = useSession();
    const router = useRouter();

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

    async function login() {
        const token = await apiHttpPost('auth/login', { email, password });
        startSession(token);
        router.push('/');
    }

    async function register() {
        await apiHttpPost('auth/register', {
            name,
            email,
            password,
            phone,
        });
    }

    async function submit() {
        if (mode === 'login') {
            login();
        }

        if (mode === 'register') {
            register();
            login();
        }

        resetForm();
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

'use client';
import { useFormAuth } from '@/data/hooks/useFormAuth';
import Image from 'next/image';
import Link from 'next/link';
import InputPassword from '../shared/Form/InputPassword';
import { Logo } from '../shared/Logo';
import InputText from '../shared/Form/InputText';
import InputPhone from '../shared/Form/InputPhone';
import InputEmail from '../shared/Form/InputEmail';

export function FormAuth() {
    //
    const {
        email,
        name,
        password,
        phone,
        mode,
        submit,
        toggleMode,
        handleOnChange,
    } = useFormAuth();
    return (
        <div className="h-screen">
            <Image
                src="/banners/principal.webp"
                alt="Banner"
                fill
            />
            <div className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-full bg-black/80 gap-10 ">
                <Logo />
                <div>
                    {mode === 'login' ? (
                        <h1 className="text-xl font-light">Seja bem vindo</h1>
                    ) : (
                        <h1 className="text-xl font-light">Cadastro</h1>
                    )}
                </div>
                <div className="flex flex-col gap-4 w-80">
                    {mode === 'register' && (
                        <InputText
                            onChange={(e) => handleOnChange(e)}
                            value={name}
                            name="name"
                        />
                    )}

                    <InputEmail
                        value={email}
                        onChange={handleOnChange}
                        name="email"
                    />
                    <InputPassword
                        value={password}
                        onChange={handleOnChange}
                        name="password"
                    />
                    {mode === 'register' && (
                        <InputPhone
                            value={phone}
                            onChange={handleOnChange}
                            name="phone"
                        />
                    )}
                </div>
                <div className="flex gap-2">
                    <button
                        className="button flex-1 bg-green-600"
                        onClick={submit}
                    >
                        {mode === 'register' ? 'Cadastrar' : 'Entrar'}
                    </button>
                    <Link
                        className="button flex-1 flex justify-center"
                        href={'/'}
                    >
                        Cancelar
                    </Link>
                </div>
                <div className="flex mt-4 cursor-pointer">
                    <button
                        onClick={toggleMode}
                        className=" flex-1 button-outline"
                    >
                        {mode === 'login' ? (
                            <div>
                                Ainda não possui uma conta?{' '}
                                <span className="text-yellow-400 font-bold">
                                    Cadastre-se!
                                </span>
                            </div>
                        ) : (
                            <div>
                                Já possui uma conta?{' '}
                                <span className="text-yellow-400 font-bold">
                                    Entre na plataforma!
                                </span>
                            </div>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}

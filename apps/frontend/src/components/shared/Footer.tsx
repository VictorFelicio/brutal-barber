import {
    IconBrandFacebook,
    IconBrandInstagram,
    IconBrandWhatsapp,
    IconBrandYoutube,
} from '@tabler/icons-react';
import { Logo } from './Logo';

export function Footer() {
    return (
        <footer className="flex flex-col text-zinc-300 bg-black py-10">
            <div className="container">
                <div className="flex flex-col md:flex-row md:items-start items-center  gap-5 md:gap-0 md:text-left text-center justify-between">
                    <Logo />
                    <div className="flex flex-col gap-1">
                        <span className="font-bold text-2xl text-zinc-200 pb-2">
                            Sobre
                        </span>
                        <span className="text-sm">Nossa História</span>
                        <span className="text-sm">Politica de Privacidade</span>
                        <span className="text-sm">Termos de Uso</span>
                    </div>
                    <div className="flex flex-col gap-1 text-zinc-200 pb-2">
                        <span className="font-bold text-2xl">Contato</span>
                        <span className="text-sm">suporte@barberbrutal.app</span>
                        <div className="flex items-center gap-2 justify-center md:justify-start md:text-left">
                            <IconBrandWhatsapp
                                size={20}
                                className="text-green-400"
                            />
                            <span>Whatsapp</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-1.5 justify-between">
                    <div className="flex gap-2">
                        <IconBrandYoutube
                            size={28}
                            stroke={1}
                        />
                        <IconBrandInstagram
                            size={28}
                            stroke={1}
                        />
                        <IconBrandFacebook
                            size={28}
                            stroke={1}
                        />
                    </div>
                    <div className="flex flex-col items-center md:flex-row gap-1.5">
                        <div className="flex gap-1.5">
                            <span>Feito com</span>
                            <span>🪓</span>
                            <span>em {new Date().getFullYear()}</span>
                        </div>
                        <span className="hidden sm:inline-block"> - </span>
                        <span>Todos os direitos reservador</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

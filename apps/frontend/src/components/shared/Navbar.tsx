import Link from 'next/link';
import { Logo } from './Logo';

export function Navbar() {
    return (
        <header className=" flex items-center h-24 bg-black/60 self-stretch">
            <nav className="flex items-center justify-between container">
                <Logo />

                <div>
                    <Link
                        href="/login"
                        className="text-zinc-300"
                    >
                        Entrar
                    </Link>
                </div>
            </nav>
        </header>
    );
}

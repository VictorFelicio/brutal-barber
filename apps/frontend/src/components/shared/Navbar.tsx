'use client';
import Link from 'next/link';
import { Logo } from './Logo';
import { useSession } from '@/data/hooks/useSession';
import MenuUser from './MenuUser';

export function Navbar() {
    const { user } = useSession();
    return (
        <header className=" flex items-center h-24 bg-black/60 self-stretch">
            <nav className="flex items-center justify-between container">
                <Logo />
                <div>
                    {user ? (
                        <MenuUser />
                    ) : (
                        <Link
                            href="/login"
                            className="text-zinc-300"
                        >
                            Entrar
                        </Link>
                    )}
                </div>
            </nav>
        </header>
    );
}

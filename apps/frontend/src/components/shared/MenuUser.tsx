'use client';
import { useSession } from '@/data/hooks/useSession';
import { IconCalendar, IconHome, IconLogout } from '@tabler/icons-react';
import Image from 'next/image';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuSeparator,
} from '../ui/dropdown-menu';
import Link from 'next/link';

export default function MenuUser() {
    const { user, closeSession } = useSession();
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <div className="flex items-center gap-3">
                    <div className="flex flex-col items-end">
                        <span className="font-bold">{user.name}</span>
                        <span className="text-xs text-zinc-400">{user.email}</span>
                    </div>
                    <div className="bg-zinc-700 w-10 h-10 rounded-full p-1">
                        <Image
                            src={'/avatar.png'}
                            alt="avatar"
                            width={40}
                            height={40}
                        />
                    </div>
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem>
                    <Link
                        href={'/'}
                        className="flex gap-2"
                    >
                        <IconHome size={18} />
                        <span>Início</span>
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <Link
                        href={'/scheduling'}
                        className="flex gap-2"
                    >
                        <IconCalendar size={18} />
                        <span>Agendamento</span>
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                    onClick={closeSession}
                    className="flex gap-2 text-red-500"
                >
                    <IconLogout />
                    <span>Sair</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

'use client';
import { useSession } from '@/data/hooks/useSession';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import Image from 'next/image';
import { IconLogout } from '@tabler/icons-react';

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

'use client';

import { useSession } from '@/data/hooks/useSession';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function ForceAuth(props: any) {
    const { user, isLoading } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (!isLoading && !user?.email) {
            router.push('/login');
        }
    }, [isLoading, user, router]);

    if (isLoading && !user?.email) return <div>Loading...</div>;

    return <div>{props.children}</div>;
}

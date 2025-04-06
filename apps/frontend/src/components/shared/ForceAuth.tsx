'use client';

import { useSession } from '@/data/hooks/useSession';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Processing from './Processing';

export default function ForceAuth(props: any) {
    const { user, isLoading } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (!isLoading && !user?.email) {
            router.push('/login');
        }
    }, [isLoading, user, router]);

    if (isLoading) return <Processing />;

    if (!user?.email) return null;

    return <div>{props.children}</div>;
}

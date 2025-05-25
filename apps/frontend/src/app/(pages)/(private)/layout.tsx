'use client';
import ForceAuth from '@/components/shared/ForceAuth';
import { PageMain } from '@/components/shared/PageMain';
import { ReactNode } from 'react';

export default function Layout(props: { children: ReactNode }) {
    return (
        <ForceAuth>
            <PageMain>{props.children}</PageMain>
        </ForceAuth>
    );
}

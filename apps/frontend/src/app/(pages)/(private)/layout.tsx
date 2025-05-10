'use client';
import ForceAuth from '@/components/shared/ForceAuth';
import { ReactNode } from 'react';

export default function Layout(props: { children: ReactNode }) {
    return <ForceAuth>{props.children}</ForceAuth>;
}

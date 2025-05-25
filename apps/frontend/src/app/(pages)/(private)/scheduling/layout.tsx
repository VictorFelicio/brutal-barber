'use client';

import { SchedulingProvider } from '@/data/context/SchedulingContext';
import { ReactNode } from 'react';

export default function Layout(props: { children: ReactNode }) {
    return <SchedulingProvider>{props.children}</SchedulingProvider>;
}

'use client';

import FormScheduling from '@/components/scheduling/FormScheduling';
import { Navbar } from '@/components/shared/Navbar';

export default function Scheduling() {
    return (
        <div className="flex flex-col gap-5">
            <Navbar />
            <div className="container py-10">
                <span className="text-5xl">Scheduling</span>
                <FormScheduling />
            </div>
        </div>
    );
}

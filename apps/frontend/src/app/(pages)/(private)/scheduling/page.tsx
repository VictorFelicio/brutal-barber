'use client';

import FormScheduling from '@/components/scheduling/FormScheduling';

export default function Scheduling() {
    return (
        <div className="flex flex-col gap-5 p-96">
            <span className="text-8xl">Scheduling</span>
            <FormScheduling />
        </div>
    );
}

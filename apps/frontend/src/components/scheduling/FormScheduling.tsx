import { Professional } from '@brutalbarber/core';
import SelectInputProfessional from '../Professional/components/SelectInputProfessional';
import { useState } from 'react';

export default function FormScheduling() {
    const [professional, setProfessional] = useState<Professional | null>(null);
    return (
        <div className="flex flex-col gap-5">
            <SelectInputProfessional
                className="input"
                label="Profissional"
                value={professional}
                onChange={setProfessional}
            />
        </div>
    );
}

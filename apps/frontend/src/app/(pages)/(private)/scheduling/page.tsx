'use client';
import useAPI from '@/data/hooks/useAPI';
import Link from 'next/link';

export default function Scheduling() {
    const { apiHttpGet } = useAPI();
    async function handleSchedule() {
        const resp = await apiHttpGet('scheduling');
        console.log(resp);
    }
    return (
        <div className="flex flex-col gap-5 justify-center items-center h-screen">
            <span className="text-8xl">Scheduling</span>
            <div className="flex gap-5">
                <button
                    className="button"
                    onClick={handleSchedule}
                >
                    Testar agendamento
                </button>
                <Link
                    href={'/'}
                    className="button"
                >
                    Voltar
                </Link>
            </div>
        </div>
    );
}

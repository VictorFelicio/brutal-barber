import Link from 'next/link';

export default function Scheduling() {
    return (
        <div className="flex flex-col gap-5 justify-center items-center h-screen">
            <span className="text-8xl">Scheduling</span>
            <Link
                href={'/'}
                className="button"
            >
                Voltar
            </Link>
        </div>
    );
}

import { Footer } from './Footer';

export interface PageMainProps {
    children: React.ReactNode;
    className?: string;
}

export function PageMain(props: PageMainProps) {
    return (
        <div className="flex flex-col min-h-screen w-screen">
            <main className={props.className ?? ''}>{props.children}</main>
            <Footer />
        </div>
    );
}

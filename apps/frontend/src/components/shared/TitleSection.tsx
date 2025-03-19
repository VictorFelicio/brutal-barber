interface TitleSectionProps {
    main: string;
    secondary: string;
    tag?: string;
}

export function TitleSection(props: TitleSectionProps) {
    return (
        <div className="flex flex-col items-center">
            {props.tag && (
                <div className="bg-zinc-700 px-4 py-1.5 rounded-md font-black mb-2 text-sm md:text-base text-zinc-300">
                    {props.tag}
                </div>
            )}
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gradient">
                {props.main}
            </h2>
            <h3 className="text-zinc-500 md:w-[450px] px-7 md:px-0 text-center">
                {props.secondary}
            </h3>
        </div>
    );
}

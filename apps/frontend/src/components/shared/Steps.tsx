import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import { ReactNode, useState } from 'react';

export interface StepsProps {
    labels: string[];
    children: ReactNode[];
}

export default function Steps(props: StepsProps) {
    const [currentStep, setCurrentStep] = useState(0);

    function handlePreviousStep() {
        if (currentStep === 0) return;
        setCurrentStep(currentStep - 1);
    }
    function handleNextStep() {
        if (currentStep === props.labels.length - 1) return;
        setCurrentStep(currentStep + 1);
    }

    function renderLabesl() {
        return (
            <div className="flex gap-4">
                {props.labels.map((label, index) => {
                    const selectedStep = index === currentStep;
                    return (
                        <div
                            key={index}
                            className="flex items-center gap-2"
                        >
                            <span
                                className={`
                                    flex items-center justify-center
                                    w-9 h-9 rounded-full
                                   ${selectedStep ? 'bg-white text-black font-bold' : 'bg-zinc-700 text-zinc-400'} `}
                            >
                                {index + 1}
                            </span>
                            <span className={`${selectedStep ? ' text-white font-bold' : ' text-zinc-400'} `}>
                                {label}
                            </span>
                        </div>
                    );
                })}
            </div>
        );
    }

    return (
        <div className="flex gap-10 flex-col">
            <div>{renderLabesl()}</div>
            <div>{props?.children[currentStep] ?? null}</div>
            <div className="flex gap-3">
                <button
                    onClick={handlePreviousStep}
                    className="flex gap-1 items-center button"
                >
                    <IconChevronLeft size={20} />
                    <span>Anterior</span>
                </button>
                <button
                    onClick={handleNextStep}
                    className="flex gap-1 items-center button"
                >
                    <span>Próximo</span>
                    <IconChevronRight size={20} />
                </button>
            </div>
        </div>
    );
}

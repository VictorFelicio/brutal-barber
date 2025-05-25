import { useScheduling } from '@/data/hooks/useScheduling';
import SelectInputProfessional from '../Professional/components/SelectInputProfessional';
import CheckboxInputServices from '../Service/components/CheckboxServices';
import InputDate from '../shared/Form/InputDate';
import Steps from '../shared/Steps';

export default function FormScheduling() {
    const { date, professional, services, handleScheduling, selectDate, selectProfessional, selectService } =
        useScheduling();

    return (
        <div className="flex flex-col gap-5">
            <Steps labels={['Selecione o Profissional', 'Selecione os Serviços', 'Escolha o Horário']}>
                <SelectInputProfessional
                    className="input"
                    label="Profissional"
                    value={professional}
                    onChange={selectProfessional}
                />
                <CheckboxInputServices
                    className="input"
                    label="Serviços"
                    value={services}
                    onChange={selectService}
                />

                <InputDate
                    className="input"
                    label="Data"
                    value={date}
                    onChange={selectDate}
                    onlyFutureDates={true}
                />
            </Steps>
            <div>
                <button
                    onClick={handleScheduling}
                    className="button bg-blue-500"
                >
                    Agendar
                </button>
            </div>
        </div>
    );
}

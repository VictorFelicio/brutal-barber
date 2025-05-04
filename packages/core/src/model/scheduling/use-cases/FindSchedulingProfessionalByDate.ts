import UseCase from '../../../shared/UseCase';
import IScheduling from '../entity/Scheduling';
import ISchedulingRepository from '../provider/SchedulingRepository';

type Input = {
    professional: number;
    date: Date;
};

export default class FindSchedulingProfessionalByDate implements UseCase<Input, IScheduling[]> {
    constructor(private readonly repository: ISchedulingRepository) {}

    execute(data: Input): Promise<IScheduling[]> {
        return this.repository.findByProfessionalAndDate(data.professional, data.date);
    }
}

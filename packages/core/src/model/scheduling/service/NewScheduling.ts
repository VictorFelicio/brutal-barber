import UseCase from '../../../shared/UseCase';
import { User } from '../../user';
import IScheduling from '../entity/Scheduling';
import ISchedulingRepository from '../provider/SchedulingRepository';

type NewSchedulingParams = {
    scheduling: IScheduling;
    user: User;
};

export default class NewScheduling implements UseCase<NewSchedulingParams, void> {
    constructor(private readonly repository: ISchedulingRepository) {}
    async execute(params: NewSchedulingParams): Promise<void> {
        const { scheduling, user } = params;

        if (scheduling.user.id !== user.id) {
            throw new Error(
                'Não é possível criar um agendamento para outro usuário'
            );
        }

        await this.repository.create(scheduling);
    }
}

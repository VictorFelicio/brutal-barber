import UseCase from '../../../shared/UseCase';
import { User } from '../../user';
import IScheduling from '../entity/Scheduling';
import ISchedulingRepository from '../provider/SchedulingRepository';

export default class FindSchedulingByClient implements UseCase<User, IScheduling[]> {
    constructor(private readonly repository: ISchedulingRepository) {}

    async execute(user: User): Promise<IScheduling[]> {
        const scheduling = await this.repository.findByEmailUser(user.email);

        if (!scheduling) throw new Error('Agendamentos não encontrados');

        return scheduling;
    }
}

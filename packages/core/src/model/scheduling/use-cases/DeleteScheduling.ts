import UseCase from '../../../shared/UseCase';
import { User } from '../../user';
import ISchedulingRepository from '../provider/SchedulingRepository';
type Input = {
    user: User;
    id: number;
};

export default class DeleteScheduling implements UseCase<Input, void> {
    //
    constructor(private readonly repository: ISchedulingRepository) {}

    async execute(data: Input): Promise<void> {
        const { user, id } = data;
        const scheduling = await this.repository.findById(id);

        if (!scheduling) throw new Error('Agendamento nao encontrado');

        const isClient = scheduling.user.email == user.email;
        const isBarber = user.barber;

        if (!isClient && !isBarber) throw new Error('Usuário não autorizado');

        await this.repository.delete(id);
    }
}

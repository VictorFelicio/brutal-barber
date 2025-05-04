import IScheduling from '../entity/Scheduling';

export default interface ISchedulingRepository {
    create: (scheduling: IScheduling) => Promise<void>;
    findByEmailUser: (email: string) => Promise<IScheduling[]>;
    findByProfessionalAndDate: (
        professional: number,
        date: Date
    ) => Promise<IScheduling[]>;
    delete: (id: string) => Promise<void>;
}

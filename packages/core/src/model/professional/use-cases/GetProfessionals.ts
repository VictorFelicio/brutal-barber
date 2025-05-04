import UseCase from '../../../shared/UseCase';
import Professional from '../entity/Professional';
import ProfessionalRepository from '../provider/ProfessionalRepository';

export default class GetProfessionals implements UseCase<void, Professional[]> {
    constructor(private readonly repo: ProfessionalRepository) {}

    async execute(): Promise<Professional[]> {
        return this.repo.getAll();
    }
}

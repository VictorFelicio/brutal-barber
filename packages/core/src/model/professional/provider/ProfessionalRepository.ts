import Professional from '../entity/Professional';

export default interface ProfessionalRepository {
    getAll(): Promise<Professional[]>;
}

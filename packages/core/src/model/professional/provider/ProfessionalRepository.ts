import Professional from '../model/Professional';

export default interface ProfessionalRepository {
    getAll(): Promise<Professional[]>;
}

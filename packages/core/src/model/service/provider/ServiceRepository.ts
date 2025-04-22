import Service from '../model/Service';

export default interface ServiceRepository {
    getAll(): Promise<Service[]>;
}

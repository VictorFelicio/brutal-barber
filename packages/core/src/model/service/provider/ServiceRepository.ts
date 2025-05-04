import Service from '../entity/Service';

export default interface ServiceRepository {
    getAll(): Promise<Service[]>;
}

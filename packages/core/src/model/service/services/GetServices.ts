import UseCase from '../../../shared/UseCase';
import Service from '../model/Service';
import ServiceRepository from '../provider/ServiceRepository';

export default class GetServices implements UseCase<void, Service[]> {
    constructor(private readonly repo: ServiceRepository) {}

    async execute(): Promise<Service[]> {
        return this.repo.getAll();
    }
}

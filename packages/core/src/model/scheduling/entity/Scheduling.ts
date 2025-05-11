import { Professional } from '../../professional';
import { Service } from '../../service';
import { User } from '../../user';

export default interface IScheduling {
    id: number;
    date: Date;
    user: User;
    professional: Partial<Professional>;
    services: Partial<Service>[];
}

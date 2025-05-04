import { Professional } from '../../professional';
import { Service } from '../../service';
import { User } from '../../user';

export default interface IScheduling {
    id: string;
    date: Date;
    user: User;
    professional: Professional;
    services: Service[];
}

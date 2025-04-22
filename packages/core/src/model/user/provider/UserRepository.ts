import User from '../model/User';

export default interface UserRepository {
    save(user: User): Promise<void>;
    findByEmail(email: string): Promise<User | null>;
}

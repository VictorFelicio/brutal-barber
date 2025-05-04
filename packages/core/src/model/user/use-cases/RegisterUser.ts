import UseCase from '../../../shared/UseCase';
import User from '../entity/User';
import ProviderCrypto from '../provider/ProviderCrypto';
import UserRepository from '../provider/UserRepository';

export default class RegisterUser implements UseCase<User, void> {
    constructor(
        private readonly repo: UserRepository,
        private readonly crypto: ProviderCrypto
    ) {}

    async execute(user: User): Promise<void> {
        const hasUser = await this.repo.findByEmail(user.email);

        if (hasUser) {
            throw new Error('Usuário já cadastrado');
        }

        const hashPassword = await this.crypto.encrypt(user.password);

        const newUser = {
            ...user,
            password: hashPassword,
            barber: false,
        };
        await this.repo.save(newUser);
    }
}

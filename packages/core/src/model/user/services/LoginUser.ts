import UseCase from '../../../shared/UseCase';
import User from '../model/User';
import ProviderCrypto from '../provider/ProviderCrypto';
import UserRepository from '../provider/UserRepository';

type DataUser = {
    email: string;
    password: string;
};

export default class LoginUser implements UseCase<DataUser, User> {
    constructor(
        private readonly repo: UserRepository,
        private readonly crypt: ProviderCrypto
    ) {}
    async execute(data: DataUser): Promise<User> {
        const user = await this.repo.findByEmail(data.email);

        if (!user) throw new Error('Usuário não encontrado');

        const isValidPassword = await this.crypt.compare(data.password, user.password);

        if (!isValidPassword) throw new Error('Senha inválida');

        delete user.password;

        return user;
    }
}

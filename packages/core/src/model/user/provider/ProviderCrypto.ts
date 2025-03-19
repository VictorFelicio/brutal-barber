export default interface ProviderCrypto {
    encrypt(password: string): Promise<string>;
    compare(password: string, hash: string): Promise<boolean>;
}

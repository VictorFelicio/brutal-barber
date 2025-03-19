export default interface UseCase<INPUT, OUTPUT> {
    execute(data: INPUT): Promise<OUTPUT>;
}

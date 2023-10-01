export default interface UseCase<E, T> {
    execute(entrece: E): Promise<T>;
};
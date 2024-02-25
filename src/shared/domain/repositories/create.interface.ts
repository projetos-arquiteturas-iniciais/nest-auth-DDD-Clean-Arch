export interface ICreate<T = unknown> {
  create<D>(data: D): Promise<T>;
}

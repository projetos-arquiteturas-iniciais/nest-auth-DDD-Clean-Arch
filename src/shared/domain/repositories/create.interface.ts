export interface ICreate<T = unknown, D = unknown> {
  create(data: D): Promise<T>;
}

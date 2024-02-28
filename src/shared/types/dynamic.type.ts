export type DynamicType<O, T> = {
  [K in keyof O]: T;
};

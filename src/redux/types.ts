// tslint:disable:no-any
export type func = (...args: any[]) => any;
// tslint:enable:no-any
export type FunctionPropertyNames<T> = { [K in keyof T]: T[K] extends func ? K : never }[keyof T];
export type NonFunctionPropertyNames<T> = { [K in keyof T ]: T[K] extends func ? never: K }[keyof T];
export type FunctionProperties<T> = Pick<T, FunctionPropertyNames<T>>;
export type NonFunctionProperties<T> = Pick<T, NonFunctionPropertyNames<T>>;
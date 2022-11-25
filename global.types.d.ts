export {};

declare global {
  type obj = { [key: string]: string };
  type NumberLike = number | `${number}`;
  type Primitive = number | string | boolean;
  type Maybe<T> = null | undefined | T;
  type MaybeFields<T> = {
    [Key in keyof T]: Maybe<T[Key]>;
  };
  type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;
  type RecursiveMaybeFields<T> = {
    [Key in keyof T]: T[Key] extends Record<string, unknown> ? RecursiveMaybeFields[T[Key]] : Maybe<T[Key]>;
  };
  type ValueOf<T> = T[keyof T];
  type ArrayElement<ArrayType extends readonly unknown[]> = ArrayType extends readonly (infer ElementType)[]
    ? ElementType
    : never;

  // this utility type is designed to create a nonnullable type from nested array type like:
  // agents: (agent | null)[] | null
  // by throwing away the null on the property and inside the array
  type NonNullArrayItem<T, Key extends keyof NonNullable<T>> = NonNullable<NonNullable<T>[Key]> extends unknown[] // this ternary here is to check whether the property is an array or not
    ? NonNullable<NonNullable<NonNullable<T>[Key]>[0]>[] // the extra here is to pull the array type out
    : NonNullable<NonNullable<T>[Key]>;
}
declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // extends React's HTMLAttributes
    ['data-component-key']?: string;
    ['data-page-component-key']?: string;
  }
}

export type TypeReadonly<T, K extends 'object' | 'array'> = K extends 'object'
  ? Readonly<T>
  : readonly Readonly<T>[];

export type TypeSVGColor = 'light' | 'dark';
export type TypeSVGColorProps = Record<'color', TypeSVGColor>;

export type TypePaths = Record<string, `/${string}`>;

export type TypeAboutItem = Record<'title' | 'subtitle' | 'text', string>;

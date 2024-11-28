import { HTMLAttributes } from 'react';

export type TypeReadonly<T, K extends 'object' | 'array'> = K extends 'object'
  ? Readonly<T>
  : readonly Readonly<T>[];

export type TypeClassname<T extends HTMLElement> = NonNullable<
  HTMLAttributes<T>['className']
>;

export type TypePropsClassname<T extends HTMLElement> = {
  className?: TypeClassname<T>;
};

export type TypeSVGColor = 'light' | 'dark';
export type TypeSVGColorProps = Record<'color', TypeSVGColor>;

export type TypePath = `/${string}`;
export type TypeUrl = `https://${string}`;
export type TypePaths = Record<string, TypePath>;

export type TypeAboutItem = Record<'title' | 'subtitle' | 'text', string>;

export type TypeBonus = string;

export type TypeService = {
  src: TypePath | TypeUrl;
  title: string;
  text: string;
};

export type TypeStyle = 'Лофт' | 'Скандинавский';

export type TypeProject = {
  id: `project-${number}`;
  title: string;
  style: TypeStyle;
  footage: number;
  src: TypeUrl;
};

import { TypePaths, TypeSVGColor } from '@/types';

export const SVG_COLORS: Record<TypeSVGColor, string> = {
  light: 'var(--svg-color-light)',
  dark: 'var(--svg-color-dark)'
} as const;

export const PHONE_NUMBER = '+7 (929) 759 64 55';
export const PATHS = {
  projects: '/',
  calculate: '/'
} satisfies TypePaths;

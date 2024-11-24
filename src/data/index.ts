import { TypeSVGColor } from '@/types';

export const SVG_COLORS: Record<TypeSVGColor, string> = {
  light: 'var(--svg-color-light)',
  dark: 'var(--svg-color-dark)'
} as const;

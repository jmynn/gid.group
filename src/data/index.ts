import {
  TypeAboutItem,
  TypeBonus,
  TypePaths,
  TypeReadonly,
  TypeSVGColor
} from '@/types';

export const SVG_COLORS = {
  light: 'var(--svg-color-light)',
  dark: 'var(--svg-color-dark)'
} as TypeReadonly<Record<TypeSVGColor, string>, 'object'>;

export const PHONE_NUMBER = '+7 (929) 759 64 55';
export const PATHS = {
  projects: '/',
  calculate: '/'
} as TypeReadonly<TypePaths, 'object'>;

export const ABOUT_INFO = [
  {
    title: '100+',
    subtitle: 'Реализованные проекты',
    text: 'Работаем с любой недвижимостью –\n от дворцов до квартир'
  },
  {
    title: '10 лет',
    subtitle: 'Безупречная репутация',
    text: 'Наши специалисты постоянно\n стажируются у лидеров строительных\n работ'
  },
  {
    title: '3 года',
    subtitle: 'Гарантии на все работы',
    text: 'Мы внимательно изучаем рынок\n отделочных материалов и\n инновационной техники'
  },
  {
    title: 'Сроки',
    subtitle: 'Процесс',
    text: 'Нужно лучшее – закажи\n это у лучших!'
  }
] as TypeReadonly<TypeAboutItem, 'array'>;

export const BONUSES = [
  'чек листы на 5 ошибок в\n строительстве',
  '5 трендов 2021 года на дизайн\n интерьеров'
] as TypeReadonly<TypeBonus, 'array'>;

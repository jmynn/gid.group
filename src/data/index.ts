import {
  TypeAboutItem,
  TypeBonus,
  TypePaths,
  TypeReadonly,
  TypeService,
  TypeSVGColor
} from '@/types';

export enum SIZES {
  MOBILE = 375,
  TABLET = 834,
  DESKTOP = 1920
}

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

export const SERVICES = [
  {
    src: 'https://firebasestorage.googleapis.com/v0/b/avion-d6f01.appspot.com/o/gid%2Fmain%20page%2Fservices%2Fser-1.png?alt=media&token=97f8794b-2554-481d-9fdb-c484930a54bf',
    title: '3D-дизайн',
    text: 'Идейные соображения высшего порядка, а также внедрение современных методик обеспечивает актуальность глубокомысленных рассуждений.'
  },
  {
    src: 'https://firebasestorage.googleapis.com/v0/b/avion-d6f01.appspot.com/o/gid%2Fmain%20page%2Fservices%2Fser-2.png?alt=media&token=caf525b1-1477-4255-8778-ea866a71ea78',
    title: 'Ремонт',
    text: 'Мы вынуждены отталкиваться от того, что глубокий уровень погружения допускает внедрение своевременного выполнения сверхзадачи.'
  },
  {
    src: 'https://firebasestorage.googleapis.com/v0/b/avion-d6f01.appspot.com/o/gid%2Fmain%20page%2Fservices%2Fser-3.png?alt=media&token=719a7a22-e2b3-4753-849c-bedac4b4f765',
    title: 'Строительство',
    text: 'Мы вынуждены отталкиваться от того, что глубокий уровень погружения допускает внедрение своевременного выполнения сверхзадачи.'
  },
  {
    src: 'https://firebasestorage.googleapis.com/v0/b/avion-d6f01.appspot.com/o/gid%2Fmain%20page%2Fservices%2Fser-4.png?alt=media&token=387eb941-bb93-49cf-a7c3-f03db549cce3',
    title: 'Ландшафтный дизайн',
    text: 'Идейные соображения высшего порядка обеспечивает актуальность глубокомысленных рассуждений. '
  }
] as TypeReadonly<TypeService, 'array'>;

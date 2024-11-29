import IconCalculator from '@/components/ui/Icons/IconCalculator';
import IconMail from '@/components/ui/Icons/IconMail';
import IconObject from '@/components/ui/Icons/IconObject';
import IconPaper from '@/components/ui/Icons/IconPaper';
import IconRoller from '@/components/ui/Icons/IconRoller';
import IconRuler from '@/components/ui/Icons/IconRuler';
import {
  TypeAboutItem,
  TypeBonus,
  TypePaths,
  TypeProject,
  TypeReadonly,
  TypeService,
  TypeStage,
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

export const PROJECTS = [
  {
    id: `project-${0}`,
    title: 'Квартира на Академической',
    style: 'Лофт',
    footage: 130,
    src: `https://firebasestorage.googleapis.com/v0/b/avion-d6f01.appspot.com/o/gid%2Fmain%20page%2Fprojects%2Fproj-1.png?alt=media&token=4123edb1-73c9-48ff-bf6e-ec07fc5dae5c`
  },
  {
    id: `project-${1}`,
    title: 'Квартира на Рижской',
    style: 'Скандинавский',
    footage: 94,
    src: `https://firebasestorage.googleapis.com/v0/b/avion-d6f01.appspot.com/o/gid%2Fmain%20page%2Fprojects%2Fproj-2.png?alt=media&token=468367b4-1b90-4132-b614-173384ce6624`
  },
  {
    id: `project-${2}`,
    title: 'Квартира на Чистых прудах',
    style: 'Лофт',
    footage: 68,
    src: `https://firebasestorage.googleapis.com/v0/b/avion-d6f01.appspot.com/o/gid%2Fmain%20page%2Fprojects%2Fproj-3.png?alt=media&token=bff7c4d9-37c6-49ee-b54f-e4155a14f696`
  },
  {
    id: `project-${3}`,
    title: 'Квартира на Рижской',
    style: 'Скандинавский',
    footage: 94,
    src: `https://firebasestorage.googleapis.com/v0/b/avion-d6f01.appspot.com/o/gid%2Fmain%20page%2Fprojects%2Fproj-4.png?alt=media&token=dea4ba2c-22b8-45dc-91a9-665edfb2db11`
  },
  {
    id: `project-${4}`,
    title: 'Квартира на Чистых прудах',
    style: 'Лофт',
    footage: 85,
    src: `https://firebasestorage.googleapis.com/v0/b/avion-d6f01.appspot.com/o/gid%2Fmain%20page%2Fprojects%2Fproj-5.png?alt=media&token=bc185ecd-a259-43e2-bd42-0877691d00ec`
  },
  {
    id: `project-${5}`,
    title: 'Квартира на Академической',
    style: 'Лофт',
    footage: 108,
    src: `https://firebasestorage.googleapis.com/v0/b/avion-d6f01.appspot.com/o/gid%2Fmain%20page%2Fprojects%2Fproj-6.png?alt=media&token=d3afc57c-d88c-4bf3-9c22-feb1041db489`
  },
  {
    id: `project-${6}`,
    title: 'Квартира на Академической',
    style: 'Лофт',
    footage: 111,
    src: `https://firebasestorage.googleapis.com/v0/b/avion-d6f01.appspot.com/o/gid%2Fmain%20page%2Fprojects%2Fproj-1.png?alt=media&token=4123edb1-73c9-48ff-bf6e-ec07fc5dae5c`
  },
  {
    id: `project-${7}`,
    title: 'Квартира на Рижской',
    style: 'Скандинавский',
    footage: 222,
    src: `https://firebasestorage.googleapis.com/v0/b/avion-d6f01.appspot.com/o/gid%2Fmain%20page%2Fprojects%2Fproj-2.png?alt=media&token=468367b4-1b90-4132-b614-173384ce6624`
  },
  {
    id: `project-${8}`,
    title: 'Квартира на Чистых прудах',
    style: 'Лофт',
    footage: 333,
    src: `https://firebasestorage.googleapis.com/v0/b/avion-d6f01.appspot.com/o/gid%2Fmain%20page%2Fprojects%2Fproj-3.png?alt=media&token=bff7c4d9-37c6-49ee-b54f-e4155a14f696`
  }
] as TypeReadonly<TypeProject, 'array'>;

export const STAGES = [
  {
    icon: <IconMail />,
    title: 'Заявка',
    text: 'Оставляйте заявку на сайте и получите 2 варианта планировки квартиры БЕСПЛАТНО',
    description: 'Оставить заявку'
  },
  {
    icon: <IconRuler />,
    title: 'Дизайн',
    text: 'Собираете на сайте стиль из четырех готовых решений с возможностью редактирования',
    description: 'Выбрать дизайн'
  },
  {
    icon: <IconCalculator />,
    title: 'Расчет',
    text: 'Расчитываете финальную стоимость ремонта с помощью онлайн-калькулятора',
    description: 'Посчитать'
  },
  {
    icon: <IconPaper />,
    title: 'Договор',
    text: 'Собираете на сайте стиль из четырех готовых решений с возможностью редактирования',
    description: 'Оставить заявку'
  },
  {
    icon: <IconRoller />,
    title: 'Ремонт',
    text: 'Собираете на сайте стиль из четырех готовых решений с возможностью редактирования',
    description: 'Оставить заявку'
  },
  {
    icon: <IconObject />,
    title: 'Сдача объекта',
    text: 'Расчитываете финальную стоимость ремонта с помощью онлайн-калькулятора'
  }
] as TypeReadonly<TypeStage, 'array'>;

export const INTERIOR = [
  'Требуется высокое качество ремонтных работ',
  'Нужно четко соблюсти Бюджет ',
  'Необходимо ответственно подойти к процессу'
] as TypeReadonly<string, 'array'>;

export const INSTAGRAM = [
  'https://firebasestorage.googleapis.com/v0/b/avion-d6f01.appspot.com/o/gid%2Fmain%20page%2Finstagram%2Finst-1.png?alt=media&token=ff95cb39-0f88-40c2-9b6c-d16d802206ad',
  'https://firebasestorage.googleapis.com/v0/b/avion-d6f01.appspot.com/o/gid%2Fmain%20page%2Finstagram%2Finst-2.png?alt=media&token=08c0da5b-cc06-476d-90b1-d767c222d96e',
  'https://firebasestorage.googleapis.com/v0/b/avion-d6f01.appspot.com/o/gid%2Fmain%20page%2Finstagram%2Finst-3.png?alt=media&token=8417699f-5c4f-4c1c-b6fd-26f745cfd80f',
  'https://firebasestorage.googleapis.com/v0/b/avion-d6f01.appspot.com/o/gid%2Fmain%20page%2Fprojects%2Fproj-5.png?alt=media&token=bc185ecd-a259-43e2-bd42-0877691d00ec',
  'https://firebasestorage.googleapis.com/v0/b/avion-d6f01.appspot.com/o/gid%2Fmain%20page%2Fprojects%2Fproj-6.png?alt=media&token=d3afc57c-d88c-4bf3-9c22-feb1041db489',
  'https://firebasestorage.googleapis.com/v0/b/avion-d6f01.appspot.com/o/gid%2Fmain%20page%2Fprojects%2Fproj-4.png?alt=media&token=dea4ba2c-22b8-45dc-91a9-665edfb2db11',
  'https://firebasestorage.googleapis.com/v0/b/avion-d6f01.appspot.com/o/gid%2Fmain%20page%2Finstagram%2Finst-7.png?alt=media&token=fe83fa26-caae-4afa-a061-b2b0bfca1e34',
  'https://firebasestorage.googleapis.com/v0/b/avion-d6f01.appspot.com/o/gid%2Fmain%20page%2Finstagram%2Finst-8.png?alt=media&token=42a0d857-3e60-464f-b1df-1a1034223730'
] as TypeReadonly<string, 'array'>;

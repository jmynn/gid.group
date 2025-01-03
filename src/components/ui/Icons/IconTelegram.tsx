import { SVG_COLORS } from '@/data';
import { TypeSVGColorProps } from '@/types';
import { FunctionComponent, ReactNode } from 'react';

type Props = TypeSVGColorProps;

const IconTelegram: FunctionComponent<Props> = ({ color }): ReactNode => {
  return (
    <svg viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="41" height="41" rx="5" fill={SVG_COLORS[color]} />
      <path
        d="M34.9202 11.1844L30.6948 31.5513C30.3757 32.9885 29.5446 33.3463 28.3635 32.6696L21.9248 27.8203L18.8185 30.8746C18.4745 31.2263 18.1874 31.5196 17.5244 31.5196L17.9874 24.8182L29.9197 13.7981C30.4387 13.3258 29.8067 13.0631 29.1136 13.5364L14.362 23.0304L8.01134 20.9983C6.6302 20.5578 6.6052 19.5867 8.29938 18.909L33.139 9.12773C34.2891 8.68717 35.2952 9.38941 34.9202 11.1854V11.1844Z"
        fill={color === 'dark' ? SVG_COLORS.light : SVG_COLORS.dark}
      />
    </svg>
  );
};

export default IconTelegram;

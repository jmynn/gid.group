import { SVG_COLORS } from '@/data';
import { TypeSVGColorProps } from '@/types';
import { FunctionComponent, ReactNode } from 'react';

type Props = TypeSVGColorProps;

const IconYoutube: FunctionComponent<Props> = ({ color }): ReactNode => {
  return (
    <svg viewBox="0 0 44 41" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M22 0C0.3784 0 0 2.32688 0 20.5C0 38.6731 0.3784 41 22 41C43.6216 41 44 38.6731 44 20.5C44 2.32688 43.6216 0 22 0ZM29.051 21.3892L19.173 26.9695C18.3084 27.454 17.6 26.9109 17.6 25.7555V15.2445C17.6 14.0918 18.3084 13.546 19.173 14.0305L29.051 19.6108C29.9156 20.1006 29.9156 20.8993 29.051 21.3892Z"
        fill={SVG_COLORS[color]}
      />
    </svg>
  );
};

export default IconYoutube;

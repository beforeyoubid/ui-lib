import { type FC, type SVGAttributes } from 'react';

interface IconProps extends SVGAttributes<SVGElement> {
  color?: string;
  size?: string | number;
}

export type Icon = FC<IconProps>;

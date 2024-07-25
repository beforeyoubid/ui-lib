import { type SVGAttributes, type FC } from 'react';

export interface TablerIconProps extends SVGAttributes<SVGElement> {
  color?: string;
  size?: string | number;
}
export type IconComponent = React.FC<TablerIconProps>;
export interface CustomIconProps extends SVGAttributes<SVGElement> {
  color?: string;
  size?: string | number;
}

export type Icon = FC<CustomIconProps>;

import { type SVGAttributes } from 'react';

import { type Colors } from '../../theme.types';

export interface TablerIconProps extends SVGAttributes<SVGElement> {
  color?: string;
  size?: string | number;
}
export type IconComponent = React.FC<TablerIconProps>;

export type IconProps = {
  size?: string | number;
  color: keyof Colors;
  icon: IconComponent;
  className?: string;
};

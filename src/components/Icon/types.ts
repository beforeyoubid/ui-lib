import { CSSProperties } from 'react';

export type IconProps = {
  type?: string;
  height?: CSSProperties['height'];
  width?: CSSProperties['width'];
  fontSize?: 'inherit' | 'small';
  color?: 'inherit' | 'primary' | 'secondary' | 'action' | 'disabled' | 'error';
  onClick?: () => void;
  className?: string;
  style?: CSSProperties;
};

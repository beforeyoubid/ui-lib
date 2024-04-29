import { Tooltip as MuiToolTip, Fade } from '@mui/material';
import { Icon, IconProps } from './Icon';
import { Colors } from '../theme.types';
import { typedMemo } from '../utils';

export type TooltipProps = {
  title?: string;
  iconName?: IconProps['icon'];
  iconColor?: keyof Colors;
  iconSize?: number;
};

/**
 * A tooltip component that displays a description when hovered over on an icon.
 *
 * @param title - The title of the tooltip.
 * @param iconColor - The color of the icon. Default value is 'dark75'.
 * @param iconName - The name of the icon. Default value is 'InfoCircle'.
 * @param iconSize - The size of the icon. Default value is 12.
 */
const TooltipNoMemo: React.FC<TooltipProps> = ({
  title,
  iconColor = 'dark75',
  iconName = 'InfoCircle',
  iconSize = 12,
}) => {
  return (
    <span>
      <MuiToolTip title={title} arrow TransitionComponent={Fade} TransitionProps={{ timeout: 600 }}>
        <span>
          <Icon icon={iconName} color={iconColor} size={iconSize} />
        </span>
      </MuiToolTip>
    </span>
  );
};

const Tooltip = typedMemo(TooltipNoMemo);

export { Tooltip };

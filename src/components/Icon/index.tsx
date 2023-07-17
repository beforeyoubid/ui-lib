import React, { useMemo } from 'react';
import * as Icons from 'tabler-icons-react';

import { Colors } from '../../theme.types';
import { colorPalette } from '../../mui-theme';

export type IconProps = {
  icon: keyof typeof Icons;
  size?: string | number;
  color: keyof Colors;
  className?: string;
};

function IconNoMemo(props: IconProps) {
  const IconComponent = useMemo(() => Icons[props.icon], [props.icon]);

  return <IconComponent color={colorPalette[props.color]} className={props.className} size={props.size} />;
}

const Icon = React.memo(IconNoMemo);
export { Icon };

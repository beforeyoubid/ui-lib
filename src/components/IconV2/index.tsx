import React, { useMemo } from 'react';
import * as Icons from 'tabler-icons-react';

import { Colors } from '../../theme.types';
import { colorPalette } from '../../mui-theme';

export type IconProps = {
  icon: keyof typeof Icons;
  color: keyof Colors;
};

function IconNoMemo(props: IconProps) {
  const IconComponent = useMemo(() => Icons[props.icon], [props.icon]);

  return <IconComponent color={colorPalette[props.color]} />;
}

const Icon = React.memo(IconNoMemo);
export { Icon };

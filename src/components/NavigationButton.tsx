import React, { useCallback, useMemo } from 'react';
import { styled } from '@mui/material/styles';
import { ChevronDown, ChevronRight } from 'tabler-icons-react';

import { Typography } from './Typography';
import { Icon, IconProps } from './IconV2';
import FlexWrapper from './FlexWrapper';

type NavigationButtonVariant = 'regular' | 'dark';
export type NavigationButtonProps = {
  variant?: NavigationButtonVariant;
  label: string;
  value: string;
  icon?: IconProps['icon'];
  selected: boolean;
  onClick: (value: string, e: React.MouseEvent) => void;
  expandable?: boolean;
  expanded?: boolean;
  onExpand?: (value: string, e: React.MouseEvent) => void;
  child?: boolean;
};

function NavigationButtonNoMemo(props: NavigationButtonProps) {
  const onClickWrapper = useCallback(
    (e: React.MouseEvent) => props.onClick(props.value, e),
    [props.onClick, props.value]
  );
  const onExpandWrapper = useCallback(
    (e: React.MouseEvent) => props.onExpand?.(props.value, e),
    [props.onExpand, props.value]
  );
  const selectedIcon = useMemo(
    () => (props.icon ? <StyledIcon icon={props.icon} color="dark90" /> : <></>),
    [props.icon]
  );
  return (
    <Button variant={props.variant ?? 'regular'} selected={props.selected} onClick={onClickWrapper}>
      <FlexWrapper width="100%" align="center">
        <FlexWrapper gap={10} align="center" style={{ flexGrow: 1 }} width="100%">
          {props.child && <div style={{ width: 16 }}></div>}
          {selectedIcon}
          <Typography class="roman" size="base" color="dark90" padding={0}>
            {props.label}
          </Typography>
        </FlexWrapper>
        {props.expandable && (
          <>
            <div style={{ width: 18, height: 18 }} onClick={onExpandWrapper} className="expand-icon">
              {props.expanded ? <ChevronDown size="18" /> : <ChevronRight size="18" />}
            </div>
          </>
        )}
      </FlexWrapper>
    </Button>
  );
}

const NavigationButton = React.memo(NavigationButtonNoMemo);
export { NavigationButton };

const Button = styled('div')<{
  variant: NavigationButtonProps['variant'];
  selected: NavigationButtonProps['selected'];
}>(({ theme, selected }) => ({
  width: 200,
  minHeight: 24,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  fontFamily: theme.typography.fontFamily,
  fontSize: theme.typography.size['base'].fontSize,
  lineHeight: theme.typography.size['base'].lineHeight,
  fontWeight: theme.typography.fontWeight['roman'],
  color: theme.palette.colors.dark90,
  padding: theme.spacing(1, 1.25),
  backgroundColor: selected ? theme.palette.colors.mintL3 : undefined,
  outline: selected ? `1px solid ${theme.palette.colors.mintL2}` : undefined,
  border: selected ? '1px' : undefined,
  borderRadius: '4px',
  userSelect: 'none',
  '&:hover': {
    backgroundColor: selected ? theme.palette.colors.mintL2 : theme.palette.colors.lightL2,
    transition: 'background 0.5s',
  },
  '&:active': {
    border: '1px !important',
    outline: `1px solid ${selected ? theme.palette.colors.mintL1 : theme.palette.colors.lightL3}`,
  },
}));

const StyledIcon = styled(Icon)(({ theme }) => ({
  width: 21,
  height: 21,
  marginRight: theme.spacing(1.5),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  ['& svg']: {
    height: 18,
    width: 18,
  },
}));

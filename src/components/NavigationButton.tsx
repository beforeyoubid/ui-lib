import { styled } from '@mui/material/styles';

type NavigationButtonVariant = 'regular' | 'dark';
export type NavigationButtonProps = {
  variant?: NavigationButtonVariant;
  text: string;
  selected: boolean;
};

export function NavigationButton(props: NavigationButtonProps) {
  return (
    <Button variant={props.variant ?? 'regular'} selected={props.selected}>
      <StyledIcon />
      <StyledText>{props.text}</StyledText>
    </Button>
  );
}
const Button = styled('div')<{
  variant: NavigationButtonProps['variant'];
  selected: NavigationButtonProps['selected'];
}>(({ theme, selected }) => ({
  width: 200,
  height: 37,
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

const Icon = ({ className }: { className?: string }) => (
  <div className={className}>
    <svg width="12" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1.5 14.25V12.75C1.5 11.9544 1.81607 11.1913 2.37868 10.6287C2.94129 10.0661 3.70435 9.75 4.5 9.75H7.5C8.29565 9.75 9.05871 10.0661 9.62132 10.6287C10.1839 11.1913 10.5 11.9544 10.5 12.75V14.25M3 3.75C3 4.54565 3.31607 5.30871 3.87868 5.87132C4.44129 6.43393 5.20435 6.75 6 6.75C6.79565 6.75 7.55871 6.43393 8.12132 5.87132C8.68393 5.30871 9 4.54565 9 3.75C9 2.95435 8.68393 2.19129 8.12132 1.62868C7.55871 1.06607 6.79565 0.75 6 0.75C5.20435 0.75 4.44129 1.06607 3.87868 1.62868C3.31607 2.19129 3 2.95435 3 3.75Z"
        stroke="#444A5A"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </div>
);

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

const StyledText = styled('span')(({ theme }) => ({
  height: 21,
}));

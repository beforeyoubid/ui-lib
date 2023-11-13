import { Radio, useTheme } from '@mui/material';

export function Circle({ disabled = false, ...props }: { disabled?: boolean }) {
  return (
    <Radio
      disabled={disabled}
      icon={<Icon disabled={disabled} />}
      checkedIcon={<CheckedIcon disabled={disabled} />}
      {...props}
    />
  );
}
const Icon = ({ disabled }: { disabled: boolean }) => {
  const theme = useTheme();
  const fillColor = disabled ? theme.palette.colors.lightL3 : theme.palette.colors.lightWhite;
  return (
    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5" y="1" width="19" height="19" rx="9.5" fill={fillColor} />
      <rect x="0.5" y="1" width="19" height="19" rx="9.5" stroke={theme.palette.colors.dark30} />
    </svg>
  );
};

const CheckedIcon = ({ disabled }: { disabled: boolean }) => {
  const theme = useTheme();
  const fillColor = disabled ? theme.palette.colors.lightL3 : theme.palette.colors.lightWhite;
  const mainColor = disabled ? theme.palette.colors.dark30 : theme.palette.colors.mint60;
  return (
    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5" y="1" width="19" height="19" rx="9.5" fill={fillColor} />
      <rect x="0.5" y="1" width="19" height="19" rx="9.5" stroke={mainColor} />
      <circle cx="10" cy="10.5" r="4" fill={mainColor} />
    </svg>
  );
};

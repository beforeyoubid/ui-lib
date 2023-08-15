import { Avatar } from '@mui/material';
import { theme } from '../../mui-theme';

export type ProfilePictureProps = {
  link: string;
  alt: string;
  className?: string;
  size: number;
};

export const ProfilePicture = (props: ProfilePictureProps) => {
  return (
    <Avatar
      className={props.className}
      alt={props.alt}
      src={props.link}
      sx={{
        borderRadius: '200px',
        border: `1px solid ${theme.palette.colors.lightL2}`,
        width: props.size,
        height: props.size,
        backgroundColor: theme.palette.colors.lightWhite,
      }}
    />
  );
};

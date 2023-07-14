import { Avatar } from '@mui/material';
import { theme } from '../../mui-theme';

export type ProfilePictureProps = {
  link: string;
  alt: string;
  borderRadius?: number;
  margin?: number;
  height?: number;
  width?: number;
};

export const ProfilePicture = (props: ProfilePictureProps) => {
  return (
    <Avatar
      style={{ margin: props.margin }}
      alt={props.alt}
      src={props.link}
      sx={{
        borderRadius: props.borderRadius,
        border: 2,
        borderColor: theme.palette.colors.transparentButtonB,
        width: props.height,
        height: props.width,
      }}
    />
  );
};

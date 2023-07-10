import Avatar from '@mui/material/Avatar';
import { theme } from '../../mui-theme';

export type ProfilePictureProps = {
  link: string;
  alt: string;
  borderRadious?: number;
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
        borderRadius: props.borderRadious,
        border: 2,
        borderColor: theme.palette.colors.transparentButtonB,
        width: props.height,
        height: props.width,
      }}
    />
  );
};

import Avatar from '@mui/material/Avatar';
import { ProfilePictureProps } from './types';

export const ProfilePicture = (profilePictureProps: ProfilePictureProps) => {
  return (
    <Avatar
      style={{ margin: profilePictureProps.margin }}
      alt={profilePictureProps.alt}
      src={profilePictureProps.link}
      sx={{
        borderRadius: profilePictureProps.borderRadious,
        border: 2,
        borderColor: '#F2F4F7',
        width: profilePictureProps.height,
        height: profilePictureProps.width,
      }}
    />
  );
};

import Link from '@mui/material/link';
import { LinkTextProps } from './types';
import React from 'react';

const LinkText = ({
  href,
  text,
  showUnderLine = 'none',
  openInNewtab = false,
  textColor = '#808080',
  hoverColor = '#007A69',
}: LinkTextProps) => {
  return (
    <Link
      href={href}
      underline={showUnderLine}
      target={openInNewtab ? '_blank' : '_self'}
      color={textColor}
      sx={{
        '&:hover': {
          color: { hoverColor }, //grey color
        },
      }}
    >
      {text}
    </Link>
  );
};

export default LinkText;

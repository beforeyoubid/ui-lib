import React from 'react';
import { SvgIcon } from '@material-ui/core';
import { IconProps } from './types';

export const Edit = (props: IconProps) => {
  return (
    <SvgIcon width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M12.3530882,4.08436621 L10.1658161,1.89709405 L4.3330903,7.72981981 L4.3330903,9.91709197 L6.52036246,9.91709197 L12.3530882,4.08436621 Z M14.079575,2.35787939 L12.9363608,3.50109364 L10.7490886,1.31382148 L11.8923029,0.170607228 C12.1197792,-0.0568690761 12.4872409,-0.0568690761 12.7147172,0.170607228 L14.079575,1.53546506 C14.3070513,1.76294136 14.3070513,2.13040308 14.079575,2.35787939 Z M2,11.6669097 L15.9985418,11.6669097 L15.9985418,14 L2,14 L2,11.6669097 Z"
        id="Shape"
        fillRule="nonzero"
      />
    </SvgIcon>
  );
};

import { Meta, Story } from '@storybook/react';
import LinkText from '../components/LinkText';
import { LinkTextProps } from '../components/LinkText/types';
import React from 'react';

export default {
  title: 'ui-lib/LinkText',
  component: LinkText,
} as Meta;

const Template: Story<LinkTextProps> = args => (
  <div>
    <LinkText {...args} />
  </div>
);

export const Main = Template.bind({});

Main.args = {
  text: 'Before You Bid (BYB)',
  href: 'https://staging-backyard.beforeyoubid.com.au/',
  textColor: '#808080',
  hoverColor: '#007A69',
  openInNewtab: false,
  showUnderLine: 'none',
};

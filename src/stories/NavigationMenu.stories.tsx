import { useState } from 'react';

import { BuildingCommunity, User } from 'tabler-icons-react';

import { NavigationMenu } from '../components/NavigationMenu';

import type { Meta, StoryObj } from '@storybook/react';

// import { ThemedApp } from './styles';

const meta: Meta<typeof NavigationMenu> = {
  component: NavigationMenu,
  title: 'Navigation/NavigationMenu',
};

export default meta;
type Story = StoryObj<typeof NavigationMenu>;

const MenuWrapper = () => {
  const [selected, setSelected] = useState('my-company');
  return (
    <NavigationMenu
      label="Settings"
      onClick={setSelected}
      value={selected}
      items={[
        { label: 'My Account', value: 'my-account', icon: User },
        {
          label: 'My Company',
          value: 'my-company',
          icon: BuildingCommunity,
          items: [
            { label: 'Company Profile', value: 'profile' },
            { label: 'Company Documents', value: 'documents' },
            { label: 'Areas Serviced', value: 'areas-serviced' },
            { label: 'Credentials', value: 'credentials' },
            { label: 'Company Descriptions', value: 'descriptions' },
            { label: 'Gallery', value: 'gallery' },
            { label: 'Services and Rates', value: 'services' },
            { label: 'Available Reports', value: 'reports' },
          ],
        },
        {
          label: 'My Team',
          icon: User,
          value: 'my-team',
          items: [],
        },
      ]}
    />
  );
};

export const Main: Story = {
  render: () => <MenuWrapper />,
};

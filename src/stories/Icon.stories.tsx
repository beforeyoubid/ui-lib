import React, { useMemo, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import * as Icons from 'tabler-icons-react';
import * as CustomIcons from '../components/Icon/Custom';
import { Icon } from '../components/Icon';
import { Typography } from '../components/Typography';
import { Flex, TextInput } from '../components';
import { useTheme } from '@mui/material';

const iconNames = Object.keys({ ...Icons, ...CustomIcons }) as (keyof typeof Icons | keyof typeof CustomIcons)[];

const IconList = () => {
  const theme = useTheme();
  const [search, setSearch] = useState('');
  const icons = useMemo(
    () =>
      (search
        ? iconNames.filter(name => name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
        : iconNames
      ).sort(),
    [search]
  );
  return (
    <Flex gap={theme.spacing(2)} direction="column" width="100%">
      <Flex gap={theme.spacing(2)} direction="column" width="40%">
        <TextInput value={search} placeholder="Search..." label="" onChange={event => setSearch(event.target.value)} />
      </Flex>
      <Flex gap={theme.spacing(1.5)} direction="row" style={{ flexWrap: 'wrap', maxWidth: '80vw' }}>
        {icons.map(iconName => (
          <IconWrapper icon={iconName} key={iconName} />
        ))}
      </Flex>
    </Flex>
  );
};

const IconWrapperNoMemo = ({ icon }: { icon: keyof typeof Icons | keyof typeof CustomIcons }) => {
  const theme = useTheme();
  return (
    <Flex
      direction="column"
      key={icon}
      align="center"
      justify="center"
      style={{ padding: theme.spacing(0.5), borderRadius: 4, backgroundColor: theme.palette.colors.dark15 }}
    >
      <div style={{ display: 'flex', flexDirection: 'row', gap: 8 }}>
        <Icon icon={icon} color="dark90" />
      </div>
      <Typography color="dark100" class="roman" size="base">
        {icon}
      </Typography>
    </Flex>
  );
};
const IconWrapper = React.memo(IconWrapperNoMemo);

const meta: Meta<typeof IconList> = {
  component: IconList,
  title: 'Utils/Icon',
};

export default meta;
type Story = StoryObj<typeof IconList>;

export const Main: Story = {};

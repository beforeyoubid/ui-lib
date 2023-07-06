import type { Meta, StoryObj } from '@storybook/react';

import { Colors } from '../theme.types';
import { colorPalette } from '../mui-theme';
import { Typography } from '../components';
import { Tooltip } from '@mui/material';

const colorNames = Object.keys(colorPalette) as (keyof Colors)[];
const colorGroups = colorNames.reduce((groups, name) => {
  const [groupName] = name.match(/^([a-z]+)/) ?? [];
  if (!groupName) return groups;
  if (!groups[groupName]) groups[groupName] = [];
  groups[groupName].push(name);
  return groups;
}, {} as Record<string, (keyof Colors)[]>);

const ColorPalette = () =>
  Object.entries(colorGroups).map(([groupName, colors]) => (
    <>
      <Typography color="dark100" class="roman" size="2xl">
        {groupName}
      </Typography>
      <div style={{ display: 'flex', flexDirection: 'row', gap: 8 }}>
        {colors.map(color => (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Tooltip title={colorPalette[color]}>
              <div
                style={{
                  backgroundColor: colorPalette[color],
                  height: 60,
                  width: 60,
                  borderRadius: 2,
                  cursor: 'pointer',
                }}
                onClick={() => navigator.clipboard.writeText(colorPalette[color])}
              />
            </Tooltip>
            <Typography color="dark90" class="roman" size="sm" padding={0.5}>
              {color}
            </Typography>
            <Typography color="dark75" class="roman" size="sm" padding={0.5}>
              {colorPalette[color]}
            </Typography>
          </div>
        ))}
      </div>
    </>
  ));

const meta: Meta<typeof ColorPalette> = {
  component: ColorPalette,
};

export default meta;
type Story = StoryObj<typeof ColorPalette>;

export const Main: Story = {};

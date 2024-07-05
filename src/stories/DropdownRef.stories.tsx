import { useRef, useState } from 'react';

import { useTheme } from '@mui/material';

import { Button, Dropdown, Flex } from '../components';

import type { Meta, StoryObj } from '@storybook/react';

const DropdownRefStory = () => {
  const theme = useTheme();
  const [state, setState] = useState('NSW');
  const ref = useRef<HTMLInputElement>(null);
  return (
    <Flex width="100%" direction="row" gap={theme.spacing(2.5)} align="flex-end">
      <div style={{ width: '300px' }}>
        <Dropdown
          label="State"
          placeholder="Please select your state"
          errorText="You must select a state."
          options={['NSW', 'QLD', 'VIC', 'SA', 'WA', 'TAS', 'NT', 'ACT'].map(v => ({ label: v, value: v }))}
          value={state}
          disabled={false}
          fullWidth
          required
          backgroundColor="lightWhite"
          onChange={value => {
            console.log('Selected value:', value);
            setState(value.value);
          }}
          tooltip="Dropdown tooltip"
          ref={ref}
        />
      </div>
      <Button
        variant="primary"
        type="mint"
        size="md"
        wrap="narrow"
        title="Focus"
        onClick={() => ref.current?.focus()}
      />
    </Flex>
  );
};

const meta: Meta<typeof DropdownRefStory> = {
  component: DropdownRefStory,
  title: 'Input/Dropdown',
};

export default meta;
type Story = StoryObj<typeof DropdownRefStory>;

export const Focus: Story = {};

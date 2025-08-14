import { useState } from 'react';

import { MultiSelectDropdown, type MultiSelectDropdownProps } from '../components/MultiSelectDropdown';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<MultiSelectDropdownProps> = {
  component: MultiSelectDropdown,
  title: 'Input/MultiSelectDropdown',
};

export default meta;
type Story = StoryObj<MultiSelectDropdownProps>;

const OPTIONS = [
  { label: 'Sydney', value: 'syd' },
  { label: 'Melbourne', value: 'mel' },
  { label: 'Brisbane', value: 'bne' },
  { label: 'Perth', value: 'per' },
  { label: 'Adelaide', value: 'adl' },
];

function Example(args: MultiSelectDropdownProps) {
  const [values, setValues] = useState<string[]>(['syd']);
  return <MultiSelectDropdown {...args} values={values} onChange={setValues} options={OPTIONS} />;
}

export const Basic: Story = {
  render: args => <Example {...args} label="Cities" placeholder="Select cities" clearable />,
};

export const Disabled: Story = {
  render: args => <Example {...args} label="Cities" disabled />,
};

export const LimitedTags: Story = {
  render: args => <Example {...args} label="Cities" limitTags={2} clearable />,
};

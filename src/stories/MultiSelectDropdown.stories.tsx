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

function FullWidthExample(args: MultiSelectDropdownProps) {
  const [fullWidthValues, setFullWidthValues] = useState<string[]>(['syd']);
  const [fitContentValues, setFitContentValues] = useState<string[]>(['mel']);

  return (
    <div style={{ display: 'grid', gap: 24, padding: 16 }}>
      <div style={{ border: '2px solid #e0e0e0', padding: 16, borderRadius: 8 }}>
        <h3 style={{ margin: '0 0 16px 0', color: '#333' }}>Full Width (fullWidth=true)</h3>
        <MultiSelectDropdown
          {...args}
          automationKey="full-width-dropdown"
          label="Full Width Cities"
          placeholder="Select cities..."
          values={fullWidthValues}
          onChange={setFullWidthValues}
          options={OPTIONS}
          fullWidth
          clearable
        />
        <p style={{ margin: '8px 0 0 0', fontSize: '12px', color: '#666' }}>
          Should stretch to fill container width regardless of content
        </p>
      </div>

      <div style={{ border: '2px solid #e0e0e0', padding: 16, borderRadius: 8 }}>
        <h3 style={{ margin: '0 0 16px 0', color: '#333' }}>Fit Content (fullWidth=false)</h3>
        <MultiSelectDropdown
          {...args}
          automationKey="fit-content-dropdown"
          label="Fit Content Cities"
          placeholder="Select cities..."
          values={fitContentValues}
          onChange={setFitContentValues}
          options={OPTIONS}
          fullWidth={false}
          clearable
        />
        <p style={{ margin: '8px 0 0 0', fontSize: '12px', color: '#666' }}>
          Should only take space needed for content
        </p>
      </div>

      <div style={{ border: '2px solid #f0f0f0', padding: 16, borderRadius: 8, backgroundColor: '#fafafa' }}>
        <h3 style={{ margin: '0 0 16px 0', color: '#333' }}>Test: Add multiple items to see difference</h3>
        <p style={{ margin: '0', fontSize: '14px', color: '#666' }}>
          Try selecting multiple cities in both dropdowns above. The full width should maintain its width while fit
          content should expand as you add more items.
        </p>
      </div>
    </div>
  );
}

export const FullWidthComparison: Story = {
  render: args => <FullWidthExample {...args} />,
};

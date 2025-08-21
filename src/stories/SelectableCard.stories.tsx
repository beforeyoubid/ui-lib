import { useState } from 'react';

import { type Meta, type StoryObj } from '@storybook/react';
import { BuildingCommunity, Pool, Home } from 'tabler-icons-react';

import { Icon } from '../components/Icon';
import { LinkButton } from '../components/LinkButton';
import { SelectableCard, type SelectableCardProps } from '../components/SelectableCard';
import { Typography } from '../components/Typography';

const meta: Meta<SelectableCardProps> = {
  component: SelectableCard,
  title: 'Input/SelectableCard',
};

export default meta;
type Story = StoryObj<SelectableCardProps>;

function RadioExample(args: SelectableCardProps) {
  const [value, setValue] = useState<'strata' | 'pool'>('strata');
  return (
    <div style={{ display: 'grid', gap: 16 }}>
      <SelectableCard
        {...args}
        variant="radio"
        selected={value === 'strata'}
        onSelect={() => setValue('strata')}
        leftIcon={<Icon icon={BuildingCommunity} color="navy" size={24} />}
        title="Strata Report"
      />
      <SelectableCard
        {...args}
        variant="radio"
        selected={value === 'pool'}
        onSelect={() => setValue('pool')}
        leftIcon={<Icon icon={Pool} color="navy" size={24} />}
        title="Pool Report"
      />
    </div>
  );
}

export const RadioVariant: Story = {
  render: args => <RadioExample {...args} />,
};

function CheckboxExample(args: SelectableCardProps) {
  const [checked, setChecked] = useState(false);
  return (
    <SelectableCard
      {...args}
      variant="checkbox"
      selected={checked}
      onSelect={() => setChecked(v => !v)}
      leftIcon={<Icon icon={Pool} color="navy" size={24} />}
      title="Pool Report"
      rightAdornment={
        <div style={{ background: '#0aa', color: 'white', padding: '6px 12px', borderRadius: 8 }}>$50 off</div>
      }
    />
  );
}

export const CheckboxVariant: Story = {
  render: args => <CheckboxExample {...args} />,
};

function OptionExample(args: SelectableCardProps) {
  const [plan, setPlan] = useState<'shared' | 'buyer'>('shared');
  return (
    <div style={{ display: 'grid', gap: 16, gridTemplateColumns: '1fr 1fr' }}>
      <SelectableCard
        {...args}
        variant="option"
        selected={plan === 'shared'}
        onSelect={() => setPlan('shared')}
        title="Shared Cost"
        description="Share the cost to access the report & provide an affordable cost for buyers."
        footer={
          <Typography class="semibold" size="base" color="dark100">
            Vendor Cost $119+
          </Typography>
        }
      />
      <SelectableCard
        {...args}
        variant="option"
        selected={plan === 'buyer'}
        onSelect={() => setPlan('buyer')}
        title="Buyer Free"
        description="Buy the report outright & interested buyers can download for free"
        footer={
          <Typography class="semibold" size="base" color="dark100">
            $785
          </Typography>
        }
      />
    </div>
  );
}

export const OptionVariant: Story = {
  render: args => <OptionExample {...args} />,
};

function ExtendedOptionExample(args: SelectableCardProps) {
  const [selected, setSelected] = useState(false);
  return (
    <SelectableCard
      {...args}
      variant="option"
      selected={selected}
      onSelect={() => setSelected(!selected)}
      leftIcon={<Icon icon={Home} color="navy" size={24} />}
      title="Building & Pest Report"
      description={
        <>
          Existing M3 report available for buyers to purchase for $49.{' '}
          <LinkButton type="mint" title="Existing M3 report available" size="sm" onClick={() => {}} underline />
        </>
      }
      body={
        <div style={{ marginTop: 8 }}>
          <Typography class="roman" size="sm" color="dark75">
            Inspector: John Doe
          </Typography>
          <Typography class="roman" size="sm" color="dark75">
            Report Available since 28/04/2025
          </Typography>
        </div>
      }
      actionText="Order reinspection"
      onAction={() => console.log('Order reinspection clicked')}
    />
  );
}

export const ExtendedOptionVariant: Story = {
  render: args => <ExtendedOptionExample {...args} />,
};

function CustomPaddingExample(args: SelectableCardProps) {
  const [selected, setSelected] = useState(false);
  return (
    <div style={{ display: 'grid', gap: 16 }}>
      <SelectableCard
        {...args}
        variant="option"
        selected={selected}
        onSelect={() => setSelected(!selected)}
        leftIcon={<Icon icon={Home} color="navy" size={24} />}
        title="Compact Card"
        description="This card uses custom padding (2) for a more compact layout."
        padding={2}
      />
      <SelectableCard
        {...args}
        variant="option"
        selected={selected}
        onSelect={() => setSelected(!selected)}
        leftIcon={<Icon icon={Home} color="navy" size={24} />}
        title="Spacious Card"
        description="This card uses custom padding (8) for a more spacious layout."
        padding={8}
      />
    </div>
  );
}

export const CustomPaddingVariant: Story = {
  render: args => <CustomPaddingExample {...args} />,
};

function CustomColorsExample(args: SelectableCardProps) {
  const [selected, setSelected] = useState(false);
  return (
    <div style={{ display: 'grid', gap: 16 }}>
      <SelectableCard
        {...args}
        variant="option"
        selected={selected}
        onSelect={() => setSelected(!selected)}
        leftIcon={<Icon icon={Home} color="navy" size={24} />}
        title="Custom Colors Card"
        description="This card uses custom background and border colors for both states."
        unselectedBackgroundColor="#f0f8ff"
        selectedBackgroundColor="#e6f3ff"
        unselectedBorderColor="#4a90e2"
        selectedBorderColor="#2d5aa0"
      />
      <SelectableCard
        {...args}
        variant="option"
        selected={!selected}
        onSelect={() => setSelected(!selected)}
        leftIcon={<Icon icon={Home} color="navy" size={24} />}
        title="Warm Colors Card"
        description="This card uses warm colors for a different visual theme."
        unselectedBackgroundColor="#fff8f0"
        selectedBackgroundColor="#ffe6cc"
        unselectedBorderColor="#e2a04a"
        selectedBorderColor="#a06b2d"
      />
    </div>
  );
}

export const CustomColorsVariant: Story = {
  render: args => <CustomColorsExample {...args} />,
};

function FullWidthExample(args: SelectableCardProps) {
  const [selected, setSelected] = useState(false);
  return (
    <div style={{ display: 'grid', gap: 16 }}>
      <div style={{ border: '1px solid #ccc', padding: 16 }}>
        <h4>Full Width (default)</h4>
        <SelectableCard
          {...args}
          variant="option"
          selected={selected}
          onSelect={() => setSelected(!selected)}
          leftIcon={<Icon icon={Home} color="navy" size={24} />}
          title="Full Width Card"
          description="This card stretches to fill the container width."
        />
      </div>
      <div style={{ border: '1px solid #ccc', padding: 16 }}>
        <h4>Fit Content</h4>
        <SelectableCard
          {...args}
          variant="option"
          selected={selected}
          onSelect={() => setSelected(!selected)}
          leftIcon={<Icon icon={Home} color="navy" size={24} />}
          title="Fit Content Card"
          description="This card only takes the space it needs."
          fullWidth={false}
        />
      </div>
    </div>
  );
}

export const FullWidthVariant: Story = {
  render: args => <FullWidthExample {...args} />,
};

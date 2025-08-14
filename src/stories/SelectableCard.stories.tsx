import { useState } from 'react';

import { type Meta, type StoryObj } from '@storybook/react';
import { BuildingCommunity, Pool } from 'tabler-icons-react';

import { Icon } from '../components/Icon';
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
          <Typography class="heavy" size="base" color="dark100">
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
          <Typography class="heavy" size="base" color="dark100">
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

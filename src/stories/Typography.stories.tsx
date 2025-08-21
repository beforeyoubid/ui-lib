import { Typography } from '../components/Typography';

import type { Meta, StoryObj } from '@storybook/react';

// import { ThemedApp } from './styles';

const meta: Meta<typeof Typography> = {
  component: Typography,
  title: 'Display/Typography',
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Primary: Story = {
  args: {
    color: 'dark100',
    class: 'roman',
    size: 'base',
    children: 'Hi!',
  },
};

export const Bold: Story = {
  args: {
    color: 'dark100',
    class: 'bold',
    size: 'xl',
    children: 'Hi!',
  },
};

function FontSizeShowcase() {
  const sizes = ['4xl', '3xl', '2xl', 'xl', 'lg', 'base', 'sm', 'xs', '2xs'] as const;

  return (
    <div style={{ display: 'grid', gap: 16, padding: 16 }}>
      <h2>All Font Sizes</h2>
      {sizes.map(size => (
        <div key={size} style={{ display: 'flex', alignItems: 'baseline', gap: 16 }}>
          <code style={{ minWidth: 60, fontSize: 12, color: '#666' }}>{size}</code>
          <Typography class="roman" size={size} color="dark100">
            The quick brown fox jumps over the lazy dog ({size})
          </Typography>
        </div>
      ))}
    </div>
  );
}

function FontWeightShowcase() {
  const classes = ['roman', 'medium', 'semibold', 'bold', 'heavy'] as const;

  return (
    <div style={{ display: 'grid', gap: 16, padding: 16 }}>
      <h2>All Font Weights (size: lg)</h2>
      {classes.map(fontClass => (
        <div key={fontClass} style={{ display: 'flex', alignItems: 'baseline', gap: 16 }}>
          <code style={{ minWidth: 60, fontSize: 12, color: '#666' }}>{fontClass}</code>
          <Typography class={fontClass} size="lg" color="dark100">
            The quick brown fox jumps over the lazy dog ({fontClass})
          </Typography>
        </div>
      ))}
    </div>
  );
}

function ComparisonShowcase() {
  return (
    <div style={{ display: 'grid', gap: 16, padding: 16 }}>
      <h2>Font Weight Comparison (size: xl)</h2>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 16 }}>
        <code style={{ minWidth: 60, fontSize: 12, color: '#666' }}>semibold</code>
        <Typography class="semibold" size="xl" color="dark100">
          Semibold Text (weight: 600)
        </Typography>
      </div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 16 }}>
        <code style={{ minWidth: 60, fontSize: 12, color: '#666' }}>bold</code>
        <Typography class="bold" size="xl" color="dark100">
          Bold Text (weight: 700)
        </Typography>
      </div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 16 }}>
        <code style={{ minWidth: 60, fontSize: 12, color: '#666' }}>heavy</code>
        <Typography class="heavy" size="xl" color="dark100">
          Heavy Text (weight: 800)
        </Typography>
      </div>
    </div>
  );
}

export const AllFontSizes: Story = {
  render: () => <FontSizeShowcase />,
};

export const AllFontWeights: Story = {
  render: () => <FontWeightShowcase />,
};

export const BoldVsHeavyComparison: Story = {
  render: () => <ComparisonShowcase />,
};

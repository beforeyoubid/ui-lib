import { Meta, Story } from '@storybook/react';
import { TextField, TextFieldProps } from '../components/TextField';

export default {
  title: 'ui-lib/TextField',
  component: TextField,
  argTypes: {
    error: { control: { type: 'boolean' } },
    errorMessage: { control: { type: 'text' } },
    fullWidth: { control: { type: 'boolean' } },
    helperText: { control: { type: 'text' } },
    label: { control: { type: 'text' } },
    onChange: { table: { disable: true } },
    placeholder: { control: { type: 'text' } },
    required: { control: { type: 'boolean' } },
    readOnly: { control: { type: 'boolean' } },
    variant: {
      options: ['standard', 'filled', 'outlined'],
      control: { type: 'radio' },
    },
  },
} as Meta;

const Template: Story<TextFieldProps> = args => (
  <div style={{ maxWidth: 600 }}>
    <TextField {...args} />
  </div>
);

export const Main = Template.bind({});
Main.args = {
  error: false,
  errorMessage: '',
  fullWidth: true,
  helperText: 'This is the helper text',
  label: 'Label',
  required: true,
  variant: 'filled',
  readOnly: false,
};

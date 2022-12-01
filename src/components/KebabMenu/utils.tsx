export interface IMenuOption {
  type: string;
  label: string;
  description?: Maybe<string>;
  icon: string;
  disabled?: Maybe<boolean>;
  warnLevel?: Maybe<string>;
}

export type KebabMenuProps = {
  options: IMenuOption[];
  maxOptions?: number;
  optionHeight?: number;
  paddingHeight?: number;
  size?: 'sm' | 'md' | 'lg';
  highlight?: boolean;
  onClickCallback: (value: IMenuOption) => void;
};

import { useCallback, useState } from 'react';
import { NavigationButton, type NavigationButtonProps } from './NavigationButton';
import { Typography } from './Typography';

type Option = {
  label: string;
  value: string;
  icon?: NavigationButtonProps['icon'];
};

export type NavigationMenuProps = {
  label?: string;
  variant?: NavigationButtonProps['variant'];
  items: (Option & {
    items?: Option[];
  })[];
  value: string;
  onClick: NavigationButtonProps['onClick'];
};

export function NavigationMenu(props: NavigationMenuProps) {
  const [expandedItem, setExpandedItem] = useState<Maybe<string>>('settings');
  const setExpandedItemWrapper = useCallback((value: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setExpandedItem(oldValue => (oldValue === value ? undefined : value));
  }, []);
  return (
    <>
      {props.label && (
        <Typography class="bold" size="base" color="dark90">
          {props.label}
        </Typography>
      )}
      {props.items.map(({ value, label, items, icon }) => (
        <>
          <NavigationButton
            key={value}
            value={value}
            label={label}
            icon={icon}
            selected={props.value === value}
            onClick={props.onClick}
            expandable={Array.isArray(items)}
            expanded={expandedItem === value}
            onExpand={setExpandedItemWrapper}
          />
          {expandedItem === value &&
            Array.isArray(items) &&
            items.map(child => (
              <NavigationButton
                key={child.value}
                child
                {...child}
                selected={child.value === props.value}
                onClick={props.onClick}
              />
            ))}
        </>
      ))}
    </>
  );
}

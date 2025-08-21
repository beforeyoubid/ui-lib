import type React from 'react';

import { Check } from 'tabler-icons-react';

import { automation } from '../../utils';
import { Button } from '../Button';
import { RawCheckbox } from '../Checkbox';
import { Circle } from '../Circle';
import { Icon } from '../Icon';
import { Typography } from '../Typography';

import { Column, IndicatorBox, LeftIconBox, OptionIndicator, RightAdornmentBox, Wrapper, Row, Spacer } from './styles';
import { type SelectableCardProps } from './types';

/**
 * SelectableCard
 *
 * @param props - Props for the SelectableCard component.
 * @returns A SelectableCard component.
 */
export function SelectableCard(props: SelectableCardProps) {
  const {
    title,
    description,
    footer,
    body,
    actionText,
    onAction,
    leftIcon,
    rightAdornment,
    fullWidth = true,
    selected,
    padding,
    unselectedBackgroundColor,
    selectedBackgroundColor,
    unselectedBorderColor,
    selectedBorderColor,
  } = props;
  const isOption = props.variant === 'option';
  const Layout = isOption ? Column : Row;

  const handleActivate = (event: React.MouseEvent | React.KeyboardEvent) => {
    if (!props.disabled) props.onSelect(event);
  };

  const onClick: React.MouseEventHandler<HTMLButtonElement> = event => handleActivate(event);
  const onKeyDown: React.KeyboardEventHandler<HTMLButtonElement> = event => {
    if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault();
      handleActivate(event);
    }
  };

  const renderIndicator = () => {
    if (props.variant === 'radio') {
      const circleProps: any = { checked: selected, onChange: () => {}, disabled: props.disabled };
      return <Circle {...circleProps} />;
    }
    if (props.variant === 'checkbox') return <RawCheckbox size="md" checked={selected} onChange={() => {}} />;
    return (
      <OptionIndicator selected={selected}>
        {selected ? <Icon icon={Check} color="lightWhite" size={16} /> : null}
      </OptionIndicator>
    );
  };

  const renderOptionContent = () => (
    <>
      <Row>
        <IndicatorBox aria-hidden>{renderIndicator()}</IndicatorBox>
        <Typography class="semibold" size="base" color="dark100">
          {title}
        </Typography>
      </Row>
      {description && (
        <Typography class="roman" size="base" color="dark75">
          {description}
        </Typography>
      )}
      {body && <div>{body}</div>}
      {footer && <div>{footer}</div>}
      {actionText && onAction && (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 16 }}>
          <Button variant="primary" type="mint" size="md" wrap="narrow" title={actionText} onClick={onAction} />
        </div>
      )}
    </>
  );

  const renderRowContent = () => (
    <>
      <IndicatorBox aria-hidden>{renderIndicator()}</IndicatorBox>
      {leftIcon && <LeftIconBox>{leftIcon}</LeftIconBox>}
      <Typography class="semibold" size="base" color="dark100">
        {title}
      </Typography>
      <Spacer />
      {rightAdornment && <RightAdornmentBox>{rightAdornment}</RightAdornmentBox>}
    </>
  );

  return (
    <Wrapper
      id={props.id}
      disabled={props.disabled}
      aria-label={props.ariaLabel}
      onClick={onClick}
      onKeyDown={onKeyDown}
      fullWidth={fullWidth}
      selected={selected}
      variant={props.variant}
      padding={padding}
      unselectedBackgroundColor={unselectedBackgroundColor}
      selectedBackgroundColor={selectedBackgroundColor}
      unselectedBorderColor={unselectedBorderColor}
      selectedBorderColor={selectedBorderColor}
      role={isOption ? undefined : props.variant}
      aria-checked={isOption ? undefined : selected}
      aria-disabled={props.disabled}
      type="button"
      {...automation([props.automationKey], { title: typeof title === 'string' ? title : undefined })}
    >
      <Layout>{isOption ? renderOptionContent() : renderRowContent()}</Layout>
    </Wrapper>
  );
}

export type { SelectableCardProps } from './types';

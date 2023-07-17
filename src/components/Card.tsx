import React from 'react';
import { styled, useTheme } from '@mui/material';

import { Button } from './Button';
import FlexWrapper from './FlexWrapper';
import { IconProps } from './Icon';
import { Typography } from './Typography';

type CardButtonsProps = {
  editing: boolean;
  editButtonTitle?: string;
  editButtonIcon?: IconProps['icon'];
  canSave: boolean;
  onSave: () => void;
  onCancel: () => void;
};

export type CardProps = {
  title: string;
  children: React.ReactNode;
} & (({ editable: true } & CardButtonsProps) | { editable: false });

export function Card(props: CardProps) {
  const theme = useTheme();
  return (
    <Wrapper direction="column" gap={theme.spacing(4)}>
      <FlexWrapper direction="row" width="100%" align="center">
        <Typography color="navy" class="bold" size="2xl" padding={0}>
          {props.title}
        </Typography>
        {props.editable && (
          <CardButtons
            editing={props.editing}
            editButtonTitle={props.editButtonTitle}
            editButtonIcon={props.editButtonIcon}
            canSave={props.canSave}
            onSave={props.onSave}
            onCancel={props.onCancel}
          />
        )}
      </FlexWrapper>
      <ChildrenWrapper>{props.children}</ChildrenWrapper>
    </Wrapper>
  );
}

function CardButtonsNoMemo(props: CardButtonsProps) {
  const theme = useTheme();
  const { editButtonIcon = 'Pencil', editButtonTitle = 'Update' } = props;
  return (
    <FlexWrapper align="center" width="100%" justify="flex-end" gap={theme.spacing(1)}>
      {props.editing && (
        <>
          <Typography color="dark90" size="base" class="medium">
            Cancel
          </Typography>

          <Button
            primaryVariant="secondary"
            size="small"
            secondaryVariant="mint"
            title="Save Changes"
            onClick={props.onSave}
            disabled={props.canSave}
          />
        </>
      )}
      {!props.editing && (
        <Button
          title={editButtonTitle}
          primaryVariant="tertiary"
          size="small"
          leadingIcon={editButtonIcon}
          secondaryVariant="mint"
        />
      )}
    </FlexWrapper>
  );
}

const CardButtons = React.memo(CardButtonsNoMemo);

const Wrapper = styled(FlexWrapper)(({ theme }) => ({
  outline: `1px solid ${theme.palette.colors.dark15}`,
  backgroundColor: theme.palette.colors.lightWhite,
  padding: theme.spacing(6, 5),
}));

const ChildrenWrapper = styled('div')({
  width: '100%',
});

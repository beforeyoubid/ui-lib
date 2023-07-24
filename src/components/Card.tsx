import React from 'react';
import { styled, useTheme } from '@mui/material';

import { Button } from './Button';
import { Flex } from './Flex';
import { IconProps } from './Icon';
import { Typography } from './Typography';
import { LinkButton } from './LinkButton';

type CardButtonsProps = {
  editing: boolean;

  editButtonIcon?: IconProps['icon'];
  editButtonTitle?: string;
  saveButtonTitle?: string;
  cancelButtonTitle?: string;

  canSave: boolean;

  onEdit: () => void;
  onSave: () => void;
  onCancel: () => void;
};

export type CardProps = {
  title: string;
  children: React.ReactNode;
  fullWidth?: boolean;
} & (({ editable: true } & CardButtonsProps) | { editable: false });

export function Card(props: CardProps) {
  const theme = useTheme();
  return (
    <Wrapper direction="column" gap={theme.spacing(4)} fullWidth={props.fullWidth ?? true}>
      <Flex direction="row" width="100%" align="center">
        <Typography color="navy" class="bold" size="2xl" padding={0}>
          {props.title}
        </Typography>
        {props.editable && (
          <CardButtons
            editing={props.editing}
            editButtonIcon={props.editButtonIcon}
            editButtonTitle={props.editButtonTitle}
            cancelButtonTitle={props.cancelButtonTitle}
            saveButtonTitle={props.saveButtonTitle}
            canSave={props.canSave}
            onEdit={props.onEdit}
            onSave={props.onSave}
            onCancel={props.onCancel}
          />
        )}
      </Flex>
      <ChildrenWrapper>{props.children}</ChildrenWrapper>
    </Wrapper>
  );
}

function CardButtonsNoMemo(props: CardButtonsProps) {
  const theme = useTheme();
  const {
    editButtonIcon = 'Pencil',
    editButtonTitle = 'Update',
    cancelButtonTitle = 'Cancel',
    saveButtonTitle = 'Save changes',
  } = props;
  return (
    <Flex align="center" width="100%" justify="flex-end" gap={theme.spacing(1)}>
      {props.editing && (
        <>
          <LinkButton onClick={props.onCancel} type="grey" title={cancelButtonTitle} size="md" />

          <Button
            variant="secondary"
            size="sm"
            type="mint"
            wrap="wide"
            title={saveButtonTitle}
            onClick={props.onSave}
            disabled={!props.canSave}
          />
        </>
      )}
      {!props.editing && (
        <Button
          title={editButtonTitle}
          variant="tertiary"
          wrap="wide"
          size="sm"
          leadingIcon={editButtonIcon}
          onClick={props.onEdit}
          type="mint"
        />
      )}
    </Flex>
  );
}

const CardButtons = React.memo(CardButtonsNoMemo);

const Wrapper = styled(Flex)<{ fullWidth: boolean }>(({ theme, fullWidth }) => ({
  outline: `1px solid ${theme.palette.colors.dark15}`,
  backgroundColor: theme.palette.colors.lightWhite,
  padding: theme.spacing(6, 5),
  width: fullWidth ? `calc(100% - ${theme.spacing(5)})` : undefined,
  maxWidth: `calc(100% - ${theme.spacing(10)})`,
}));

const ChildrenWrapper = styled('div')({
  width: '100%',
});

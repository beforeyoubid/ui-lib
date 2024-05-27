import { memo } from 'react';
import type React from 'react';

import { styled, useTheme } from '@mui/material';
import { Pencil } from 'tabler-icons-react';

import { Button } from './Button';
import { Flex } from './Flex';
import { type IconComponent } from './Icon';
import { LinkButton } from './LinkButton';
import { Typography } from './Typography';

type CardButtonsProps = {
  editing: boolean;

  editButtonIcon?: IconComponent;
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
  loading?: boolean;
  loadingComponent?: React.ReactNode;
} & (({ editable: true } & CardButtonsProps) | { editable: false });

export function Card(props: CardProps) {
  const theme = useTheme();
  return (
    <Wrapper direction="column" gap={theme.spacing(4)} fullWidth={props.fullWidth ?? true}>
      <Flex direction="row" width="100%" align="center">
        <Flex direction="row" align="center" grow={1}>
          <Typography color="navy" class="bold" size="2xl" padding={0}>
            {props.title}
          </Typography>
        </Flex>
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
      {props.loading ? (
        props.loadingComponent ? (
          <ChildrenWrapper>{props.loadingComponent}</ChildrenWrapper>
        ) : (
          <Typography color="dark75" class="medium" size="base" padding={0}>
            Loading ...
          </Typography>
        )
      ) : (
        <ChildrenWrapper>{props.children}</ChildrenWrapper>
      )}
    </Wrapper>
  );
}

function CardButtonsNoMemo(props: CardButtonsProps) {
  const theme = useTheme();
  const {
    editButtonIcon = Pencil,
    editButtonTitle = 'Update',
    cancelButtonTitle = 'Cancel',
    saveButtonTitle = 'Save changes',
  } = props;
  return (
    <Flex align="center" grow={1} justify="flex-end" gap={theme.spacing(2)}>
      {props.editing && (
        <>
          <LinkButton onClick={props.onCancel} type="grey" title={cancelButtonTitle} size="md" />
          <Button
            variant="secondary"
            size="sm"
            type={props.canSave ? 'mint' : 'disabled'}
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

const CardButtons = memo(CardButtonsNoMemo);

const Wrapper = styled(Flex)<{ fullWidth: boolean }>(({ theme, fullWidth }) => ({
  outline: `1px solid ${theme.palette.colors.dark15}`,
  backgroundColor: theme.palette.colors.lightWhite,
  padding: theme.spacing(6, 5),
  width: fullWidth ? `calc(100% - ${theme.spacing(5)})` : undefined,
  maxWidth: theme.spacing(100),
}));

const ChildrenWrapper = styled('div')({
  width: '100%',
});

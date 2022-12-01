import { Menu, PaperProps, PopoverOrigin } from '@material-ui/core';
import { useCallback, useMemo, useState } from 'react';
import { Keys } from '../../my-constants';
import { automation } from '../../utils';
import { CopyContainer, Description, IconButton, KebabMenuIcon, MenuItemIcon, StyledMenuItem, Wrapper } from './styles';
import { IMenuOption, KebabMenuProps } from './utils';

export const KebabMenu = ({
  options,
  maxOptions = 6,
  optionHeight = 50,
  paddingHeight = 8,
  size = 'sm',
  highlight = false,
  onClickCallback,
}: KebabMenuProps) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const open = Boolean(anchorEl);

  const handleOpenMenu = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    },
    [setAnchorEl]
  );
  const handleCloseMenu = useCallback(() => setAnchorEl(null), [setAnchorEl]);

  const handleOptionClicked = useCallback(
    (option: IMenuOption) => {
      if (!option.disabled) {
        handleCloseMenu();
        onClickCallback(option);
      }
    },
    [handleCloseMenu, onClickCallback]
  );

  const transformOrigin = useMemo(() => {
    return {
      vertical: 'top',
      horizontal: 'right',
    } as PopoverOrigin;
  }, []);

  const paperProps = useMemo(() => {
    return {
      style: {
        maxHeight: maxOptions * optionHeight + 2 * paddingHeight,
        width: size === 'sm' ? '35ch' : size === 'md' ? '45ch' : '55ch',
      },
    } as PaperProps;
  }, [maxOptions, optionHeight, paddingHeight, size]);

  return (
    <>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleOpenMenu}
        {...automation([Keys.Component.KebabMenu.Root], {
          label: 'more',
        })}
        highlight={highlight}
      >
        <KebabMenuIcon type="kebab-menu" color="inherit" />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleCloseMenu}
        transformOrigin={transformOrigin}
        PaperProps={paperProps}
      >
        {options?.map((option: IMenuOption) => (
          <StyledMenuItem
            key={option.label}
            onClick={() => handleOptionClicked(option)}
            {...automation([Keys.Component.KebabMenu.MenuItem], {
              label: option.label,
            })}
            highlightOrange={option.warnLevel === 'medium'}
            highlightRed={option.warnLevel === 'high'}
            isDisabled={option.disabled ?? false}
          >
            <Wrapper disabled={option.disabled ?? false}>
              {option.icon && <MenuItemIcon className="kebab-menu-option-icon" type={option.icon} />}
              <CopyContainer>
                {option.label}
                {option.description && (
                  <Description className="kebab-menu-option-description" size={size}>
                    {option.description}
                  </Description>
                )}
              </CopyContainer>
            </Wrapper>
          </StyledMenuItem>
        ))}
      </Menu>
    </>
  );
};

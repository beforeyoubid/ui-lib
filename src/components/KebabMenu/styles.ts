import styled, { css } from 'styled-components';
import Color from 'color';
import { MenuItem, IconButton as UnstyledIconButton } from '@mui/material';

import { Icon } from '../Icon';

const IconButton = styled(UnstyledIconButton)<{ highlight?: boolean }>`
  ${p => {
    if (p.highlight) {
      return `
      background: ${Color(p.theme.colors.lightGrey).fade(0.6).string()};
    
      &:hover {
        background: ${Color(p.theme.colors.lightGrey).fade(0.2).string()};
      }
      `;
    }
  }}
`;

const KebabMenuIcon = styled(Icon)`
  font-size: 18px;
`;

const MenuItemIcon = styled(Icon)`
  font-size: 18px;
  margin: auto;
  margin-right: 15px;
  color: ${props => props.theme.colors.persian};
`;

const StyledMenuItem = styled(MenuItem)<{
  highlightOrange?: boolean;
  highlightRed?: boolean;
  isDisabled?: boolean;
}>`
  &&& {
    padding: 20px;
    color: ${props => props.theme.colors.darkerBlue};
    height: 50px;
    width: 100%;

    &:hover {
      color: ${props => props.theme.colors.darkerBlue};
    }

    &:hover .kebab-menu-option-description {
      height: 100%;
      transform-origin: top;
      transform: scaleY(1);
    }

    ${p => {
      if (p.isDisabled) return 'cursor: not-allowed;';
    }}

    ${p => {
      let colorCss = '';
      let targetColor;

      if (p.highlightOrange) {
        targetColor = p.isDisabled ? p.theme.colors.darkerBlue : p.theme.colors.warning;
      } else if (p.highlightRed) {
        targetColor = p.isDisabled ? p.theme.colors.darkerBlue : p.theme.colors.thunderbird;
      }

      colorCss += `
      color: ${targetColor};
      &:hover {
        background: ${Color(targetColor).fade(0.95).string()};
        color: ${targetColor};
      }

      .kebab-menu-option-icon {
        color: ${targetColor};
      }
    `;
      return colorCss;
    }}
  }
`;

const Wrapper = styled.div<{ disabled?: boolean }>`
  display: flex;
  flex-direction: row;
  cursor: pointer;
  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
    `};
  svg {
    cursor: pointer;
    ${({ disabled }) =>
      disabled &&
      css`
        color: gray;
        cursor: not-allowed;
      `};
  }
`;

const Description = styled.div<{ size?: string }>`
  font-size: 10px;
  color: grey;

  transform: scaleY(0);
  height: 0;

  transition: all 0.2s ease-in-out;
  width: ${p => (p.size === 'sm' ? '32ch' : p.size === 'md' ? '48ch' : '60ch')};

  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const CopyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export { KebabMenuIcon, MenuItemIcon, StyledMenuItem, Wrapper, Description, CopyContainer, IconButton };

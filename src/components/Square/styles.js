import styled from 'styled-components';
import { colors, sizes } from '../../styles/variables';

export const Container = styled.button`
  height: ${sizes.chessTile}px;
  width: ${sizes.chessTile}px;

  background: ${(props) => {
    if (props.highlighted) {
      return colors.highlighted;
    }
    if (props.isBlack) {
      return colors.darkTile;
    }
    return colors.lightTile;
  }};
  border: solid 1px rgba(0, 0, 0, 0.2);
  ${(props) => {
    if (props.highlighted) {
      return `
      border: solid 1px ${colors.highlightGlow};
      animation: glowing 2000ms ease-out alternate infinite;
      @keyframes glowing {
        0% { box-shadow: 0 0 -10px ${colors.highlightGlow}, inset 0 0 -10px ${colors.highlightGlow}; }
        100% { box-shadow: 0 0 10px ${colors.highlightGlow}, inset 0 0 5px ${colors.highlightGlow}; }
      }
      `;
    }
    return '';
  }}

  transition: all 0.2s;

  &:hover {
    ${(props) => props.clickable && `background: ${colors.highlighted}`};
    cursor: ${(props) => (props.clickable ? 'pointer' : 'default')};
  }
  ${(props) =>
    props.clickable &&
    `
    &:focus {
      border: dashed 4px ${props.isBlack ? colors.lightTile : colors.darkTile};
    }
    `}
  img {
    width: 48px;
    height: 48px;
  }
`;

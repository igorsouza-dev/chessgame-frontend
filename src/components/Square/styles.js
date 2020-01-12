import styled from 'styled-components';

export const Container = styled.button`
  height: 55px;
  width: 55px;
  background: ${(props) => {
    if (props.highlighted) {
      return '#EFBDB5';
    }
    if (props.isBlack) {
      return '#623028';
    }
    return '#cd8955';
  }};
  ${(props) => {
    if (props.highlighted) {
      return `
      animation: glowing 2000ms ease-out alternate infinite;
      @keyframes glowing {
        0% { box-shadow: 0 0 -10px #eee, inset 0 0 -10px #eee; }
        100% { box-shadow: 0 0 10px #eee, inset 0 0 5px #eee; }
      }
      `;
    }
    return '';
  }}
  border: solid 1px rgba(0, 0, 0, 0.2);
  transition: all 0.2s;

  &:hover {
    ${(props) => props.clickable && 'background: #EFBDB5;'};
    cursor: ${(props) => (props.clickable ? 'pointer' : 'default')};
  }
  ${(props) =>
    props.clickable &&
    `
    &:focus {
      border: solid 2px #000;
      background: #EFBDB5;
    }
    `}
  img {
    width: 48px;
    height: 48px;
  }
`;

import styled from 'styled-components';
import { colors, sizes } from '../../styles/variables';

export const Outline = styled.div`
  padding: 10px;
  background: ${colors.darkTile};
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(8, ${sizes.chessTile}px);
  grid-template-rows: repeat(8, ${sizes.chessTile}px);
  border: dashed 5px ${colors.lightTile};
`;

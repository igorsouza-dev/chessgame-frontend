import React from 'react';

import { Container, Indicator } from './styles';

export default function StepsIndicator({ total, current, setPage }) {
  function renderIndicators() {
    const indicators = [];
    for (let i = 1; i <= total; i++) {
      indicators.push(
        <Indicator
          key={i}
          isSelected={current === i}
          isClickable={current !== i}
          onClick={() => setPage(i)}
        />
      );
    }
    return indicators;
  }
  return <Container>{[...renderIndicators()]}</Container>;
}

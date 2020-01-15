import React from 'react';
import PropTypes from 'prop-types';

import { Container, Indicator } from './styles';

function StepsIndicator({ total, current, setPage }) {
  function renderIndicators() {
    const indicators = [];
    for (let i = 1; i <= total; i++) {
      const element = (
        <Indicator
          key={i}
          isSelected={current === i}
          isClickable={current !== i}
          onClick={() => setPage(i)}
        />
      );
      indicators.push(element);
    }
    return indicators;
  }
  return <Container>{[...renderIndicators()]}</Container>;
}
StepsIndicator.propTypes = {
  total: PropTypes.number.isRequired,
  current: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
};
export default StepsIndicator;

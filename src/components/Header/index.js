import React from 'react';

import { Container, LogoContainer, ActionsContainer } from './styles';

export default function Header({ children }) {
  return (
    <Container>
      <LogoContainer>
        <img src="/chessboard-white.svg" alt="" />
        <span>Chess Game</span>
      </LogoContainer>
      <ActionsContainer>{children}</ActionsContainer>
    </Container>
  );
}

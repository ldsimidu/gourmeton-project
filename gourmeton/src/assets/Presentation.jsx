import React from 'react';
import styled from 'styled-components';

const PresentationWrapper = styled.section`
  padding: 50px;
  text-align: center;
  background-color: #ff6347;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: white;
`;

const Text = styled.p`
  font-size: 1.1rem;
  max-width: 800px;
  margin: 20px auto;
  color: white;
`;

const Presentation = () => {
  return (
    <PresentationWrapper>
      <Title>Descubra os Benefícios do GourmetOn</Title>
      <Text>Entrega rápida, uma grande variedade de restaurantes e um sistema de pagamento super fácil. Encomende já sua comida favorita sem complicações!</Text>
    </PresentationWrapper>
  );
};

export default Presentation;

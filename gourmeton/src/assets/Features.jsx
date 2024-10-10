import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import useOnScreen from '../hooks/useOnScreen';

const FeaturesWrapper = styled.section`
  padding: 50px;
  display: flex;
  justify-content: space-around;
  background-color: #f9f9f9;
`;

const FeatureBox = styled(motion.div)`
  width: 30%;
  text-align: center;
  opacity: 0; // Inicialmente oculto
  transform: translateY(20px); // Deslocado para baixo
`;

const Icon = styled.div`
  font-size: 3rem;
  margin-bottom: 20px;
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const FeatureDescription = styled.p`
  font-size: 1rem;
`;

const Features = () => {
  const feature1Ref = useRef();
  const feature2Ref = useRef();
  const feature3Ref = useRef();

  const isVisible1 = useOnScreen(feature1Ref);
  const isVisible2 = useOnScreen(feature2Ref);
  const isVisible3 = useOnScreen(feature3Ref);

  // Definindo a animação
  const featuresVariants = {
    visible: { opacity: 1, transform: 'translateY(0)' },
    hidden: { opacity: 0, transform: 'translateY(20px)' },
  };

  return (
    <FeaturesWrapper>
      <FeatureBox
        ref={feature1Ref}
        initial="hidden"
        animate={isVisible1 ? 'visible' : 'hidden'}
        variants={featuresVariants}
        transition={{ duration: 0.5 }}
      >
        <Icon>🍔</Icon>
        <FeatureTitle>Variedade de Comidas</FeatureTitle>
        <FeatureDescription>Encontre todos os tipos de comida na nossa plataforma.</FeatureDescription>
      </FeatureBox>
      <FeatureBox
        ref={feature2Ref}
        initial="hidden"
        animate={isVisible2 ? 'visible' : 'hidden'}
        variants={featuresVariants}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Icon>⚡</Icon>
        <FeatureTitle>Entrega Rápida</FeatureTitle>
        <FeatureDescription>Receba seus pratos favoritos no menor tempo possível.</FeatureDescription>
      </FeatureBox>
      <FeatureBox
        ref={feature3Ref}
        initial="hidden"
        animate={isVisible3 ? 'visible' : 'hidden'}
        variants={featuresVariants}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Icon>💳</Icon>
        <FeatureTitle>Pagamento Fácil</FeatureTitle>
        <FeatureDescription>Pague com cartões de crédito, débito ou carteiras digitais.</FeatureDescription>
      </FeatureBox>
    </FeaturesWrapper>
  );
};

export default Features;

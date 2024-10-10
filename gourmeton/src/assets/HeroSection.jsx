import React from 'react';
import styled from 'styled-components';
import backgroundImage from '/img/foodbackground.jpg';

const HeroWrapper = styled.section`
  height: 100vh;
  background: url(${backgroundImage}) no-repeat center center/cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5); 
    z-index: 1; 
  }
`;

const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 20px;
  z-index: 2;
`;

const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 30px;
  z-index: 2;
`;

const Button = styled.button`
  background-color: #ff6347;
  padding: 15px 30px;
  border-radius: 30px;
  color: white;
  font-weight: bold;
  z-index: 2;
  transition: background-color 0.3s;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #e5533d;
  }
`;

const HeroSection = ({ testimonialsRef }) => {
  const scrollToTestimonials = () => {
    if (testimonialsRef.current) {
      testimonialsRef.current.scrollIntoView({ behavior: 'smooth' }); // Scroll suave
    }
  };

  return (
    <HeroWrapper>
      <Title>GourmetOn</Title>
      <Description>O melhor delivery de comida ao seu alcance!</Description>
      <Button onClick={scrollToTestimonials}>Nos Conheça</Button>
    </HeroWrapper>
  );
};

export default HeroSection;

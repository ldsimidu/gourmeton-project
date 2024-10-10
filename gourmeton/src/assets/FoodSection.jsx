// src/assets/FoodSection.jsx
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

// Estilos usando Styled Components
const SectionWrapper = styled.section`
  padding: 50px;
  background-color: #ff6347;
  text-align: center;
`;

const Title = styled.h2`
  color: #ffffff; 
  margin-bottom: 20px; 
  font-size: 38px;
`;

const FoodGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

const FoodCard = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

const FoodImage = styled.img`
  width: 100%;
  border-radius: 10px;
  object-fit: cover;
  height: 200px;
`;

const FoodTitle = styled.h3`
  margin: 15px 0 10px;
  font-size: 1.5rem;
  color: #333;
`;

const FoodDescription = styled.p`
  color: #666;
`;

// Função para remover tags HTML da descrição
const stripHtmlTags = (text) => {
  return text.replace(/<\/?[^>]+(>|$)/g, ""); // Remove qualquer tag HTML
};

// Componente principal para a seção de comidas
const FoodSection = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const getFoodItems = async () => {
      try {
        const response = await fetch('https://api.spoonacular.com/recipes/random?apiKey=da2289a580ab4a529e0d5a6e701c07d4&number=4');
        if (!response.ok) {
          throw new Error('Falha ao buscar os itens da comida');
        }
        const data = await response.json();

        const items = data.recipes.map(item => ({
          id: item.id,
          title: item.title,
          image: item.image,
          description: stripHtmlTags(item.summary).length > 100 
            ? `${stripHtmlTags(item.summary).substring(0, 100)}...` 
            : stripHtmlTags(item.summary) || 'Delicioso prato disponível!',
        }));

        setFoods(items);
      } catch (error) {
        console.error(error);
      }
    };

    getFoodItems();
  }, []);

  return (
    <SectionWrapper>
      <Title>Explore Nossos Pratos</Title>
      <FoodGrid>
        {foods.map((food) => (
          <FoodCard key={food.id}>
            <FoodImage src={food.image} alt={food.title} />
            <FoodTitle>{food.title}</FoodTitle>
            <FoodDescription>{food.description}</FoodDescription>
          </FoodCard>
        ))}
      </FoodGrid>
    </SectionWrapper>
  );
};

export default FoodSection;

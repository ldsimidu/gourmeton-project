import React from 'react';
import styled from 'styled-components';

const TestimonialsWrapper = styled.section`
  padding: 50px;
  background-color: #f7f7f7;
  text-align: center;
`;

const TestimonialsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const TestimonialCard = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 30%;
  font-style: italic;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (max-width: 1024px) {
    width: 45%;
  }

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const ProfileImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 15px;
`;

const Name = styled.p`
  font-weight: bold;
  margin-top: 10px;
`;

const feedbacks = [
  { name: 'João Silva', feedback: 'O GourmetOn mudou a forma como peço comida. Tudo é rápido e eficiente!', image: 'https://randomuser.me/api/portraits/men/1.jpg' },
  { name: 'Maria Oliveira', feedback: 'A variedade de restaurantes é impressionante. Adoro!', image: 'https://randomuser.me/api/portraits/women/2.jpg' },
  { name: 'Carlos Santos', feedback: 'Ótimo atendimento e comida excelente!', image: 'https://randomuser.me/api/portraits/men/3.jpg' },
  { name: 'Ana Costa', feedback: 'Super recomendo! A entrega é muito rápida.', image: 'https://randomuser.me/api/portraits/women/4.jpg' },
  { name: 'Pedro Almeida', feedback: 'Comida deliciosa e ótimos preços. Vou pedir sempre!', image: 'https://randomuser.me/api/portraits/men/5.jpg' },
  { name: 'Luiza Pereira', feedback: 'A melhor experiência de delivery que já tive.', image: 'https://randomuser.me/api/portraits/women/6.jpg' }
];

const Testimonials = React.forwardRef((props, ref) => {
  return (
    <TestimonialsWrapper ref={ref}>
      <h2>O que nossos clientes dizem</h2>
      <TestimonialsGrid>
        {feedbacks.map((feedback, index) => (
          <TestimonialCard key={index}>
            <ProfileImage src={feedback.image} alt={feedback.name} />
            <p>"{feedback.feedback}"</p>
            <Name>- {feedback.name}</Name>
          </TestimonialCard>
        ))}
      </TestimonialsGrid>
    </TestimonialsWrapper>
  );
});

export default Testimonials;

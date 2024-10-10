import React, { useEffect, useState, useRef } from 'react';
import { GlobalStyle } from './styles/GlobalStyles';
import HeroSection from './assets/HeroSection';
import Presentation from './assets/Presentation';
import Features from './assets/Features';
import Testimonials from './assets/Testimonial'; // Certifique-se de que o caminho esteja correto
import ContactForm from './assets/ContactForm';
import Footer from './assets/Footer';
import FoodSection from './assets/FoodSection';

function App() {
  const [dishes, setDishes] = useState([]);
  const foodSectionRef = useRef(null); // Ref para a FoodSection
  const testimonialsRef = useRef(null); // Ref para a Testimonials

  useEffect(() => {
    const fetchDishes = async () => {
      const apiKey = import.meta.env.VITE_SPOONACULAR_API_KEY;
      const response = await fetch(`https://api.spoonacular.com/recipes/random?number=3&apiKey=${apiKey}`);
      const data = await response.json();
      setDishes(data.recipes);
    };

    fetchDishes();
  }, []);

  return (
    <>
      <GlobalStyle />
      {/* Passa o testimonialsRef para o HeroSection */}
      <HeroSection foodSectionRef={foodSectionRef} testimonialsRef={testimonialsRef} /> 
      <Presentation />
      <Features />
      <div ref={foodSectionRef}>
        <FoodSection dishes={dishes} />
      </div>
      {/* Passa o ref para a seção de Testimonials */}
      <div ref={testimonialsRef}>
        <Testimonials />
      </div>
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;

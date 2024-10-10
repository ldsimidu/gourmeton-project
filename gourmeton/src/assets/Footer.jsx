import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  padding: 20px;
  background-color: #333;
  color: white;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <p>&copy; 2024 GourmetOn. Todos os direitos reservados.</p>
    </FooterWrapper>
  );
};

export default Footer;

import React from 'react';
import styled from 'styled-components';

const FormWrapper = styled.section`
  padding: 50px;
  background-color: #f9f9f9;
  text-align: center;
`;

const Form = styled.form`
  max-width: 500px;
  margin: 0 auto;
`;

const Input = styled.input`
  padding: 10px;
  width: 100%;
  margin-bottom: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #ff6347;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const ContactForm = () => {
  return (
    <FormWrapper>
      <h2>Entre em contato</h2>
      <Form>
        <Input type="email" placeholder="Digite seu email" />
        <Button type="submit">Enviar</Button>
      </Form>
    </FormWrapper>
  );
};

export default ContactForm;

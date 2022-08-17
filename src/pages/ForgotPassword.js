import React, { useState } from 'react';
import {Container, WelcomeText, InputContainer, ButtonContainer, FormLogin, ContainerLogin} from "../styles/styles";
import Button from "../components/Button";
import Input from "../components/Input";
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  async function handleEmail(e){
    e.preventDefault();
    try {
      await api.get(`envEmail/${email}`)
      navigate(-1); 
    } catch (err) {
      alert('Falha no login! Tente novamente.', email);
    }    
  }
       
  return (
    <ContainerLogin>
    <Container>
      <FormLogin onSubmit={handleEmail}>
        <WelcomeText>Informe seu email</WelcomeText>
        <InputContainer>
          <Input 
            type="text" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => {setEmail(e.target.value)}}          
          />
        </InputContainer>
        <ButtonContainer>
          <Button disabled={!email} type="submit" content="Solicitar" />
        </ButtonContainer>
      </FormLogin>
    </Container>
    </ContainerLogin>
  );
}

export default ForgotPassword;
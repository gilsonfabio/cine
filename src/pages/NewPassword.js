import React, { useState, useEffect } from 'react';
import {Container, WelcomeText, InputContainer, ButtonContainer, FormLogin, ContainerLogin} from "../styles/styles";
import Button from "../components/Button";
import Input from "../components/Input";
import { useNavigate, useParams } from 'react-router-dom';
import api from '../services/api';

function ForgotPassword() {
  const [password, setPassword] = useState('');
  const [cnfPassword, setCnfPassword] = useState('');

  const params = useParams();
  
  const navigate = useNavigate();

  async function handlePassword(e){
    e.preventDefault();   
    
    const emailUsuario = params.email;
    api.put(`newpassword/${emailUsuario}`, {
        password
    }).then(() => {
      alert(`Senha foi alterada com sucesso!`)
    }).catch(() => {
      alert('Erro nao atualização!');
    })
  }

  return (
    <ContainerLogin>
    <Container>
      <FormLogin onSubmit={handlePassword}>
        <WelcomeText>Informe nova Senha</WelcomeText>
        <InputContainer>
          <Input 
            type="password" 
            placeholder="Nova Senha" 
            value={password} 
            onChange={(e) => {setPassword(e.target.value)}}   
          />
          <Input 
            type="password" 
            placeholder="Confirme a Senha" 
            value={cnfPassword} 
            onChange={(e) => {setCnfPassword(e.target.value)}}   
          />
        </InputContainer>
        <ButtonContainer>
          <Button disabled={!password} type="submit" content="Atualizar" />
        </ButtonContainer>
      </FormLogin>
    </Container>
    </ContainerLogin>
  );
}

export default ForgotPassword;
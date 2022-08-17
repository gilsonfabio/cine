import React, { useState, useEffect } from 'react';
import {Container, WelcomeText, InputContainer, ButtonContainer, ForgotPassword, FormLogin, ContainerLogin, Separator, NewUser} from "../styles/styles";
import Button from "../components/Button";
import Input from "../components/Input";
import { Link, useNavigate, useParams } from 'react-router-dom';
import api from '../services/api';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const params = useParams();

  async function handleSignIn(e){
    e.preventDefault();
    try {
        let parMov = params.idMov;
        let parAno = params.idAno;
        const response = await api.get(`signIn/${email}/${password}`)
        localStorage.setItem('usuarioId', response.data.usrId);
        localStorage.setItem('usuarioNome', response.data.usrNome);
        localStorage.setItem('usuarioToken', true);
        navigate(`/home/${parMov}/${parAno}`);
    } catch (err) {
        alert('Falha no login! Tente novamente.', email);
    }    
  }

  useEffect(() => {
    localStorage.clear();     
  },[]);
       
  return (
    <ContainerLogin>
    <Container>
      <FormLogin noValidate onSubmit={handleSignIn}>
        <WelcomeText>Bem-vindo</WelcomeText>
        <InputContainer>
          <Input 
            type="text" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => {setEmail(e.target.value)}}          
          />
          <Input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => {setPassword(e.target.value)}}   
          />
        </InputContainer>
        <ButtonContainer>
          <Button disabled={!email} type="submit" content="Entrar" />
        </ButtonContainer>
        <ForgotPassword>
          <Link to={'/forgotpassword'} style={{ textDecoration: 'none' }}>                     
            Esqueceu a senha?
          </Link>  
        </ForgotPassword>
        <Separator />
        <NewUser>
          <Link to={'/cadastro'} style={{ textDecoration: 'none' }}>                     
            Faça seu cadastro
          </Link>      
        </NewUser>
      </FormLogin>
    </Container>
    </ContainerLogin>
  );
}

export default Login;
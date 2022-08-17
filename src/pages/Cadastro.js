import React, { useState } from 'react';
import {Container, WelcomeText, InputContainer, ButtonContainer, FormLogin, ContainerLogin} from "../styles/styles";
import Button from "../components/Button";
import Input from "../components/Input";
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

//import retornoIcon from '../assets/icons/arrowbackicon.png';

function Cadastro() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nivAcesso, setNivAcesso] = useState(9);
  const [usuario, setUsuario] = useState(); 

  const navigate = useNavigate();

  async function handleCadastro(e){
    e.preventDefault();
   
    if (email === confirmEmail) {  
      api.get(`verUsuario/${email}`).then(response => {
        setUsuario(response.data);
        alert('Erro no email! Email já cadastrado para outro usuário.');
        navigate(-1);
      }).catch(() => {
        api.post('newuser', {
          usrNome: name,
          usrEmail: email,
          usrSenha: password,
          usrNivAcesso: nivAcesso    
        }).then(() => {
          alert('Usuário cadastrado com sucesso!')
          navigate(-1);
        }).catch(() => {
          alert('Erro no cadastro!');
        })   
      })
    }else {
      alert('Erro no email! Os dados não conferem.');
      navigate(-1);
    }  
  }
       
  return (
    <ContainerLogin>
    <Container>
      <FormLogin noValidate onSubmit={handleCadastro}>
        <WelcomeText>Informe seus dados</WelcomeText>
        <InputContainer>
          <Input 
            type="text" 
            placeholder="Nome" 
            value={name} 
            onChange={(e) => {setName(e.target.value)}}          
          />
          <Input 
            type="text" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => {setEmail(e.target.value)}}          
          />
          <Input 
            type="text" 
            placeholder="ConfirmEmail" 
            value={confirmEmail} 
            onChange={(e) => {setConfirmEmail(e.target.value)}}          
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
      </FormLogin>       
    </Container>
    </ContainerLogin>
  );
}

export default Cadastro;
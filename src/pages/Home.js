import React, {useState, useEffect} from "react";
import { Container, Header, Left, Right, Main, CardRight, Footer} from "../styles/home";
import { useNavigate, useParams } from 'react-router-dom';
import { parseISO, isAfter, isBefore } from 'date-fns'; 
import moment from "moment";
 
import votoIcon from '../assets/icons/voto.png';

import posterMovie from '../assets/images/TropaDeElitePoster.jpg';

import api from '../services/api';
 
export default function Home() {
  const [movies, setMovies] = useState([]);
  const [enquetes, setEnquetes] = useState([]);
  const [titulo, setTitulo] = useState('');
  const navigate = useNavigate();
  
  const idUsuario = localStorage.getItem('usuarioId');
  const nomeUsuario = localStorage.getItem('usuarioNome');
  const tokenUsuario = localStorage.getItem('usuarioToken');

  const params = useParams();

  const [isLogin, setIsLogin] = useState(tokenUsuario);

  const [mensagem, setMensagem] = useState("");
  const [msgButton, setMsgButton] = useState("");
    
  const labels = [];

  useEffect(() => {
    let idMov = params.parMov;
    //let idAno = params.parAno;
    setIsLogin(tokenUsuario);

    if (isLogin === 'true') {      
      setMensagem(`Bem-vindo: ${nomeUsuario}`);   
      setMsgButton('Você esta logado!');       
    }else {
      setMensagem(`Para concluir votação você precisa estar logado`);  
      setMsgButton('Faça seu login');
    }

    api.get(`searchMovie/${idMov}`).then(response => {
        setMovies(response.data);
        setTitulo(response.data[0].movTitulo);
    })    
     
    api.get(`enquetes`).then(resp => {
      setEnquetes(resp.data);          
    })
     
  },[]);

  useEffect(() => {
    let idMov = params.parMov;
    let anoEnq = params.parAno;
    setIsLogin(tokenUsuario);

    if (isLogin === 'true') {      
      setMensagem(`Bem-vindo: ${nomeUsuario}`);   
      setMsgButton('Você esta logado!');       
    }else {
      setMensagem(`Para concluir votação você precisa estar logado`);  
      setMsgButton('Faça seu login');  
    }

    api.get(`searchMovie/${idMov}`).then(response => {
        setMovies(response.data);
        setTitulo(response.data[0].movTitulo);
    })    
     
    api.get(`searchEnqMovie/${idMov}/${anoEnq}`).then(resp => {
      setEnquetes(resp.data);          
    })
     
  },[isLogin]);

  function handleLogin() {
    let idMov = params.parMov;
    let idAno = params.parAno;
    navigate(`/login/${idMov}/${idAno}`);
  } 

  function handleApuracao() {
    let idAno = params.parAno;
    navigate(`/apuracao/${idAno}`);
  } 

  function handleVotacao(row) {
    let categoria = row.enqDescricao;
    const iniData = moment(row.enqIniVotacao).format('YYYY-MM-DD');
    const fimData = moment(row.enqFimVotacao).format('YYYY-MM-DD');
    const datInicial = parseISO(iniData);
    const datFinal = parseISO(fimData);
    const staAfter = isAfter(new Date(),datInicial);
    const staBefore = isBefore(new Date(),datFinal);
  
    if (staAfter === false ) {
      alert(`Atenção! Data inferior a data inicial da votação!`);
    }else {
      if (staBefore === false ) {
        alert('Atenção! Data superior a data final da votação!');
      }else {
        const movAnoPart = params.parAno;
        const votMovie = params.parMov;
        const votUser = idUsuario;
        const votEnq = row.enqId;
        const votAno = movAnoPart;
        api.post('newvoto', {
          votUser,
          votEnq,
          votAno,
          votMovie
        }).then(() => {
          alert(`${nomeUsuario}, seu voto foi: ${titulo} - ${movAnoPart} para: ${categoria}`)
        }).catch(() => {
          alert('Erro no voto!');
        })
      }
    }   
  }
   
  function handleExit() {
    localStorage.clear();
    setIsLogin(false);
  }
   
  return (
    <Container>
      <Header> 
        <h1>FACI - Votação </h1>
        <h2>{mensagem}</h2>
        <button className="btnEnter" type="button" disabled={isLogin === 'true'} onClick={handleLogin}>
          {msgButton}                          
        </button>
        <button className="btnExit" type="button" onClick={handleExit}>
          Sair                      
        </button> 
      </Header>
      <Main>
        <Left>
          {movies.map((movie) => (               
              <>
                <img key={movie.movId} src={movie.movUrlPoster} alt="imagem" />
                <h1>Titulo: {movie.movTitulo}</h1>
                <h2>Diretor: {movie.movDiretor}</h2>
                <h2>Categoria: {movie.catDescricao}</h2>
                <h2>Participação: {movie.movAnoPart}</h2>
              </>               
            ))}
        </Left>
        <Right>
          {enquetes.map((row) => (  
            <li key={row.enqId}> 
              <CardRight>
                <button type="button" onClick={() => handleVotacao(row)}>
                  {row.enqDescricao}
                </button>  
              </CardRight>
            </li>            
          ))}
        </Right>
      </Main>   
      <Footer>
        <button className="btnApuracao" type="button" onClick={handleApuracao}>
          Apuração                      
        </button> 
      </Footer>     
    </Container>  
  );
}
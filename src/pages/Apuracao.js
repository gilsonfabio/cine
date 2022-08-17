import React, {useState, useEffect} from "react";
import { Container, Header, Left, Right, Main, CardRight, Footer} from "../styles/home";
import { useNavigate, useParams } from 'react-router-dom';
import { parseISO, isAfter, isBefore } from 'date-fns'; 
import moment from "moment";
 
import votoIcon from '../assets/icons/voto.png';
import api from '../services/api';
 
export default function Apuracao() {
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
    
  useEffect(() => {
    let anoEnq = params.parAno;
    api.get(`enquetes`).then(resp => {
      setEnquetes(resp.data);          
    })
     
  },[]);

  function handleApuracao(row) {
    let categoria = row.enqDescricao;
    let idEnq = row.enqId;
    let idAno = params.idAno;
    navigate(`/charts/${idEnq}/${idAno}`);
  }
   
  function handleExit() {
    localStorage.clear();
    setIsLogin(false);
  }
   
  return (
    <Container>
      <Header> 
        <h1>FACI - Apuração </h1>
        <h2>{mensagem}</h2>   
        <button className="btnExit" type="button"  onClick={() => navigate(-1)}>
          Sair                      
        </button>      
      </Header>
      <Main>        
        <Right>
          {enquetes.map((row) => (  
            <li key={row.enqId}> 
              <CardRight>
                <button type="button" onClick={() => handleApuracao(row)}>
                  {row.enqDescricao}
                </button>  
              </CardRight>
            </li>            
          ))}
        </Right>
      </Main>          
    </Container>  
  );
}
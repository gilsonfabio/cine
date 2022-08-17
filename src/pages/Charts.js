import React, {useEffect, useState } from 'react';
import { Container, Header, Title, Footer} from "../styles/charts";
import { Bar } from 'react-chartjs-2';
import { useNavigate, useParams } from 'react-router-dom';

import api from '../services/api';

const options = {
  indexAxis: 'y',

  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'right',
    },
    title: {
      display: true,
      text: 'Chart.js Horizontal Bar Chart',
    },
  },
};

export default function HorizontalBarChart () {
  const [enquetes, setEnquetes] = useState([]);
  const [atualiza, setAtualiza] = useState();
  
  const navigate = useNavigate();
  const params = useParams();

  const [movies, setMovies] = useState([]);
  const [votos, setVotos] = useState([]);
  const [desEnquete, setDesEnquete] = useState();
  
  const data = {
    labels: movies,
    datasets: [
      {
        label: '# Tot. Votos',
        data: votos,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  useEffect(() => {
    
    handleChart();

  },[]);

  async function handleChart() {
    let idEnq = params.idEnq;  
    let anoEnq = params.idAno;
    await api.get(`apuracao/${anoEnq}/${idEnq}`).then(response => {
      setEnquetes(response.data);
      setDesEnquete(response.data[0].enqDescricao);
      var auxMovies = [];
      var auxVotos = [];
      for (var i = 0; i < 9 ; i++) {
        auxMovies.push(response.data[i].movTitulo);
        auxVotos.push(response.data[i].vttQuant)         
      }
      setMovies(auxMovies);
      setVotos(auxVotos);
    }).catch((err) => {

    })
  }

  return (
  <Container>
    <Header>
      <Title className='title'>Apuração de votos da enquete: {desEnquete}</Title>         
    </Header>        
    <Bar data={data} options={options} />
    <Footer>
      <button className="btnVoltar" type="button" onClick={() => navigate(-1)}>
        Voltar                    
      </button> 
    </Footer>
  </Container>
  );
}

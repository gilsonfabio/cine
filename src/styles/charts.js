import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;  
  background: #111111;
  font-family: 'Montserrat', sans-serif;  
  max-width: 90%;
  margin: 0 auto;
`;

export const Header = styled.div`
  display: flex;  
  background: #111111;
  font-family: 'Montserrat', sans-serif;

  @media only screen and (max-width: 767px) {
    height: 50px;
  }

  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    
  }
  
  @media only screen and (min-width: 1024px) {    
    color: #f1cd31;
    font-size: 25px;
    font-family: 'Montserrat', sans-serif;  
  }
`;

export const Title = styled.h1`
  color: #f1cd31;
  font-family: 'Montserrat', sans-serif;  

  @media only screen and (max-width: 767px) {
    padding: 10px;
    margin: 0 auto;
    font-size: 10px;
  }

  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: 20px;
  }
  
  @media only screen and (min-width: 1024px) {    
    font-size: 25px;
  }
`;

export const Footer = styled.div`
  display: flex;  
  background: #111111;
  font-family: 'Montserrat', sans-serif;


  @media only screen and (max-width: 767px) {
    margin-top: 300px;
    width: 100vw;
    height: 50px;        
    flex-direction: row;
    align-items: center;
    justify-content: center;

    button.btnVoltar {
      width: 150px;
      height: 30px;
      border: 1px solid #fff;
      background: transparent;
      border-radius: 15px;
      margin-top: 10px;
      color: #fff;

      :hover {
        background: #fff;
        color: #000;
        font-weight: bold;
        cursor: pointer;      
      }
    } 
  }

  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    width: 100%;
    height: 50px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    
    button.btnVoltar {
      width: 250px;
      height: 40px;
      border: 1px solid #fff;
      background: transparent;
      border-radius: 20px;
      margin-top: 10px;
      color: #fff;

      :hover {
        background: #fff;
        color: #000;
        font-weight: bold;
        cursor: pointer;      
      }
    }
  }
      
  @media only screen and (min-width: 1024px) {
    width: 100%;
    height: 50px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;

    button.btnVoltar {
      width: 250px;
      height: 40px;
      border: 1px solid #fff;
      background: transparent;
      border-radius: 20px;
      margin-top: 10px;
      color: #fff;

      :hover {
        background: #fff;
        color: #000;
        font-weight: bold;
        cursor: pointer;      
      }
    }          
  }
`;
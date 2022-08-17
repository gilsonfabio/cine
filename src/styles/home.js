import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;  
  background: #111111;
  font-family: 'Montserrat', sans-serif;  
`;

export const Header = styled.div`
  display: flex;  
  background: #111111;
  font-family: 'Montserrat', sans-serif;

  @media only screen and (max-width: 767px) {
    margin-top: 10px;
    width: 100vw;
    height: 50px;
    
    h1 {
      width: 10%;
      height: 40px;
      font-size: 12px;
      margin-left: 5px;
      margin-right: 5px;
      align-items: center;
      color: #f1cd31;
      margin-top: 15px;
    }
    
    h2 {
      width: 50%;
      height: 50px;
      font-size: 10px;      
      margin-left: 10px;
      align-items: center;
      color: #fff;
      margin-top: 15px;
    }

    button.btnEnter {
      width: 120px;
      height: 30px;
      background: #000;
      box-shadow: 0 8px 32px 0 rgba(200, 200, 200, 0.37);
      border: 1px solid #f1cd31;
      border-radius: 15px;
      color: #f1cd31;
      margin-top: 10px;
      margin-bottom: 5px;
      margin-right: 5px;
      
      :hover {
        background: #f1cd31;
        color: #000;
      }
    }

    button.btnExit {
      width: 55px;
      height: 30px;
      background: #fff;
      box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
      border-radius: 12px;
      color: #000;
      margin-top: 10px;
      margin-bottom: 5px;
      margin-right: 15px;
       
      :hover {
        background: #646473;
        color: #fff;
      }
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    width: 100%;
    height: 50px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    h1 {
      width: 10%;
      height: 40px;
      font-size: 18px;
      margin-left: 5px;
      align-items: center;
      color: #f1cd31;
      margin-top: 15px;
    }

    h2 {
      width: 70%;
      height: 50px;
      font-size: 20px;      
      margin-left: 5px;
      align-items: center;
      color: #fff;
      margin-top: 20px;
    }

    button.btnEnter {
      width: 130px;
      height: 30px;
      background: #000;
      box-shadow: 0 8px 32px 0 rgba(200, 200, 200, 0.37);
      border: 1px solid #f1cd31;
      border-radius: 5px;
      color: #f1cd31;
      margin-bottom: 5px;
      
      :hover {
        background: #f1cd31;
        color: #000;
      }
    }

    button.btnExit {
      width: 80px;
      height: 30px;
      background: #fff;
      box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
      border-radius: 5px;
      color: #000;
      margin-bottom: 5px;
      margin-right: 15px;
      
      :hover {
        background: #646473;
        color: #fff;
      }
    }    
  }
  
  @media only screen and (min-width: 1024px) {
    width: 100%;
    height: 50px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;

    h1 {
      width: 30%;
      height: 40px;
      font-size: 18px;
      margin-left: 5px;
      align-items: center;
      color: #f1cd31;
      margin-top: 15px;
    }

    h2 {
      width: 70%;
      height: 50px;
      font-size: 20px;      
      margin-left: 5px;
      align-items: center;
      color: #fff;
      margin-top: 20px;
    }

    button.btnEnter {
      width: 135px;
      height: 30px;
      background: #000;
      box-shadow: 0 8px 32px 0 rgba(200, 200, 200, 0.37);
      border: 1px solid #f1cd31;
      border-radius: 15px;
      color: #f1cd31;
      margin-bottom: 5px;
      
      :hover {
        background: #f1cd31;
        color: #000;
      }
    }

    button.btnExit {
      width: 80px;
      height: 30px;
      background: #fff;
      box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
      border-radius: 15px;
      color: #000;
      margin-bottom: 5px;
      margin-right: 15px;
      
      :hover {
        background: #646473;
        color: #fff;
      }
    }
  }
`;

export const Main = styled.div`
  display: flex; 
  background: #111111;   
  
  @media only screen and (max-width: 767px) {
    width: 100vw; 
    flex-direction: column;   
  }
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    width: 100vw;
  }
  @media only screen and (min-width: 1024px) {
    width: 100vw;
    max-width: 1024px;
    margin: 0 auto;
    flex-direction: row;
  }
`;

export const Left = styled.div`
  display: flex;  
  background: #111111;  

  @media only screen and (max-width: 767px) {
    flex-direction: column;
    width: 100vw;
 
    img {
      width: 90vw;
      border-radius: 5px;
      margin: 0 auto;
      margin-top: 10px;      
    }

    h1 {
      margin-top: 10px;
      margin-left: 20px;
      width: 300px;
      font-family: 'Montserrat', sans-serif;
      font-size: 1rem;
      color: #fff;
    }

    h2 {
      margin-top: 5px;
      margin-left: 20px;
      width: 300px;
      font-family: 'Montserrat', sans-serif;
      font-size: 1rem;
      color: #fff;
    }

    p {
      margin-top: 5px;
      margin-left: 20px;
      margin-bottom: 5rem;
      width: 300px;
      font-family: 'Montserrat', sans-serif;
      text-align: justify;
      color: #fff;
    } 
  }
  
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    flex-direction: column;
    width: 50vw;
 
    img {
      width: 300px;
      border-radius: 5px;
      margin-top: 10px;
      margin-left: 20px;
    }

    h1 {
      margin-top: 10px;
      margin-left: 20px;
      width: 300px;
      font-family: 'Montserrat', sans-serif;
      font-size: 16px;
      color: #fff;
    }

    h2 {
      margin-top: 5px;
      margin-left: 20px;
      width: 300px;
      font-family: 'Montserrat', sans-serif;
      font-size: 1rem;
      color: #fff;
    }

    p {
      margin-top: 5px;
      margin-left: 20px;
      margin-bottom: 5rem;
      width: 300px;
      font-family: 'Montserrat', sans-serif;
      text-align: justify;
      color: #fff;
    } 
  }

  @media only screen and (min-width: 1024px) {
    flex-direction: column;
    width: 50vw;
 
    img {
      width: 300px;
      border-radius: 5px;
      margin-top: 10px;
      margin-left: 20px;
    }

    h1 {
      margin-top: 10px;
      margin-left: 20px;
      width: 300px;
      font-family: 'Montserrat', sans-serif;
      font-size: 16px;
      color: #fff;
    }

    h2 {
      margin-top: 5px;
      margin-left: 20px;
      width: 300px;
      font-family: 'Montserrat', sans-serif;
      font-size: 1rem;
      color: #fff;
    }

    p {
      margin-top: 5px;
      margin-left: 20px;
      margin-bottom: 5rem;
      width: 300px;
      font-family: 'Montserrat', sans-serif;
      text-align: justify;
      color: #fff;
    } 
  }
`;

export const Right = styled.div`
  display: flex;  
  background: #111111; 
  
  li {
    list-style: none;
  }

  @media only screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    width: 100vw;
    
    button {
      border-style: none;
      background: #646473;
      border-radius: 10px;
      margin-top: 10px;

      :hover {
        background: #9797A6;
        cursor: pointer;      
      }
    } 
  }

  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    flex-direction: column;
    align-items: center;
    width: 50vw;

    button {
      border-style: none;
      background: #646473;
      border-radius: 10px;
      margin-top: 10px;

      :hover {
        background: #9797A6;
        cursor: pointer;      
      }
    } 
  }
  
  @media only screen and (min-width: 1024px) {
    flex-direction: column;
    align-items: center;
    width: 50vw;    
  }
`;

export const CardRight = styled.div`
  display: flex; 
  border-radius: 10px;

  @media only screen and (max-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 90vw;
    margin-top: 10px;
    margin-bottom: 10px;
    
    button {
      width: 350px;
      height: 50px;
      border: 1px solid #f1cd31;
      background: transparent;
      border-radius: 30px;
      margin-top: 10px;
      color: #f1cd31;

      :hover {
        background: #f1cd31;
        color: #000;
        font-weight: bold;
        cursor: pointer;      
      }
    } 

  }

  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 40vw;
    margin-top: 10px;
    margin-bottom: 10px;
    
    button {
      width: 350px;
      height: 50px;
      border: 1px solid #f1cd31;
      background: transparent;
      border-radius: 30px;
      margin-top: 10px;
      color: #f1cd31;

      :hover {
        background: #f1cd31;
        color: #000;
        font-weight: bold;
        cursor: pointer;      
      }
    } 
  } 
   
  @media only screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 40vw;
    margin-top: 10px;
    margin-bottom: 10px;
     
    button {
      width: 350px;
      height: 50px;
      border: 1px solid #f1cd31;
      background: transparent;
      border-radius: 30px;
      margin-top: 10px;
      color: #f1cd31;

      :hover {
        background: #f1cd31;
        color: #000;
        font-weight: bold;
        cursor: pointer;      
      }
    } 
  } 
`;

export const Footer = styled.div`
  display: flex;  
  background: #111111;
  font-family: 'Montserrat', sans-serif;


  @media only screen and (max-width: 767px) {
    margin-top: 10px;
    width: 100vw;
    height: 50px;        
    flex-direction: row;
    align-items: center;
    justify-content: center;

    button.btnApuracao {
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
    
    button.btnApuracao {
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

    button.btnApuracao {
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


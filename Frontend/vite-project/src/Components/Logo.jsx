import 'react';
import styled from 'styled-components';

const Logo = () => {
  return (
    <StyledWrapper>
      <span className="loader" />
      <div className="text">
        <h1>.Ai</h1>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`


  .loader {
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 25rem;
    height: 100vh;
    left: 37%;
    top: -10;
    
  }

  .loader:before,
    .loader:after {
    content: "";
    position: absolute;
    border-radius: 50%;
    animation: pulsOut 1.8s ease-in-out infinite;
    filter: drop-shadow(0 0 1rem rgba(255, 255, 255, 0.75));
  }

  .loader:before {
    width: 100%;
    padding-bottom: 100%;
    box-shadow: inset 0 0 0 1rem #fff;
    animation-name: pulsIn;
  }

  .loader:after {
    width: calc(100% - 2rem);
    padding-bottom: calc(100% - 2rem);
    box-shadow: 0 0 0 0 #fff;
  }

  @keyframes pulsIn {
    0% {
      box-shadow: inset 0 0 0 1rem #fff;
      opacity: 1;
    }

    50%, 100% {
      box-shadow: inset 0 0 0 0 #fff;
      opacity: 0;
    }
  }

  @keyframes pulsOut {
    0%, 50% {
      box-shadow: 0 0 0 0 #fff;
      opacity: 0;
    }

    100% {
      box-shadow: 0 0 0 1rem #fff;
      opacity: 1;
    }
  }
  
  .text{
  color: white;
  top: 50%;
    text-align: center;
    font-size: 2rem;
    font-weight: 700;
  }
  
  `;

export default Logo;

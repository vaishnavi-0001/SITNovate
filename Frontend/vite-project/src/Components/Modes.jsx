import 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Modes = () => {

  const Navigate = useNavigate();

  const Message = () => {
    Navigate('/messages')
  }


  return (
    <ScreenWrapper>
      <div className="cards-container">
        <div className="card">
          <div className="title">FAST</div>
          <div className="description">
            <p>*</p>
            <p>Saves Time</p>
            <p>In built prompt</p>
          </div>
          <button onClick={Message}>USE FAST</button>
        </div>
        <div className="card">
          <div className="title">MEDIUM</div>
          <div className="description">
            <p>*</p>
            <p>Custom Inputs can be given</p>
          </div>
          <button>USE MEDIUM</button>
        </div>
      </div>
    </ScreenWrapper>
  );
};

const ScreenWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #0a0a0a;
  overflow: hidden;
  z-index : -1;
  
  .cards-container {
    display: flex;
    
    width: 200vw;
    transform: translateX(-50vw);
    transition: transform 0.5s ease-in-out;
  }

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 50vw;
    height: 100vh;
    padding: 20px;
    text-align: center;
    background-color: #1a1a1a;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
    color: white;
  }

  .title {
    font-size: 90px;
    font-weight: bold;
    text-transform: uppercase;
    color: #008cff;
  }

  .description p {
    margin: 5px 0;
    font-size: 14px;
  }

  button {
  color: #ffffff80;
    text-shadow: none;
    background: transparent;
    cursor: pointer;
    box-shadow: transparent;
    border: 1px solid #ffffff80;
    
    color: white;
    font-weight: bold;
    padding: 10px 20px;
    
    border-radius: 5px;
    cursor: pointer;
    width: 40%;
  }

  button:hover {
    background: #008cff;
    border: 1px solid #008cff;
    text-shadow: 0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 20px #ffffff;
    box-shadow: 0 0 5px #008cff, 0 0 20px #008cff, 0 0 50px #008cff,
      0 0 100px #008cff;
  }
    .cards-container {
  display: flex;
  width: 100vw; /* Adjust width dynamically */
  overflow-x: auto; /* Allow scrolling if needed */
  transform: none; /* Remove translateX */
  justify-content: center;
  gap: 20px; /* Add spacing between cards */
}

.card {
  min-width: 45vw; /* Ensure each card takes an appropriate width */
}
`;

export default Modes;

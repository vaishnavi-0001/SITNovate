import 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Buttons = () => {
    const navigate = useNavigate ();

    const Login = () => {
      navigate ('/login');
    };
    const SignUp = () => {
      navigate ('/signup');
    };
    
  return (
    <StyledWrapper>
        <div className='button-container'>
      <button id="btn" onClick={Login}>Login</button>
      
      <button id="btn" onClick={SignUp}>Signup</button>
      
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
.button-container{
background:#1e1e1o;
position:fixed;
display:flex;
flex-direction:column;
gap:10rem;
width: 15rem;
border-left: 2px solid background: #008cff;
    
    box-shadow: 0 0 5px #ffffff, 0 0 10px #ffffff;

left:85%;
height:100%;
top:0rem;
}
  button {
  position:relative;
  width:8rem;
    padding: 10px 20px;
    text-transform: uppercase;
    border-radius: 8px;
    font-size: 17px;
    font-weight: 500;
    color: #ffffff80;
    text-shadow: none;
    background: transparent;
    cursor: pointer;
    box-shadow: transparent;
    border: 1px solid #ffffff80;
    transition: 0.5s ease;
    user-select: none;
    margin-top:5rem;
    left: 3.3rem;
    top:8rem;
    
  }

  #btn:hover,
  :focus {
    color: #ffffff;
    background: #008cff;
    border: 1px solid #008cff;
    text-shadow: 0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 20px #ffffff;
    box-shadow: 0 0 5px #008cff, 0 0 20px #008cff, 0 0 50px #008cff,
      0 0 100px #008cff;
  }`;

export default Buttons;
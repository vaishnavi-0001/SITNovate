import  {useState} from "react";
import styled from "styled-components";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const LoginForm = () => {

    const [isVisible, setIsVisible] = useState(true);
    const [showSignUp, setShowSignUp] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const Navigate = useNavigate();
    const handleClose =() =>{
        setIsVisible(false);
    };


    const handleToggle = () => {
      setShowSignUp(!showSignUp);
    }
    if (!isVisible) return null;


    
    const handleSubmit = async (e) => {
      e.preventDefault();
      setErrorMessage("");
      setSuccessMessage("");
      try{
        const response = await axios.post('http://localhost:3000/auth/login', {
          email,
          password
        });
        if(response.status === 200){
          setSuccessMessage("Login Successful!",response.data.message);

          setTimeout(() => {
            setIsVisible(false);
            Navigate("/chat");
          }, 500);
        }
      }
    catch(error){
      setErrorMessage(error.response.data.message || "error occured");
    }
    }
  return (
    <ModalOverlay>
    <StyledWrapper>
        <button className="close-button" onClick={handleClose}>&times;</button>
      <form className="form" onSubmit={handleSubmit}>
        <div className="flex">
          <div  className="login color">Login</div>
          <label className="color">Email :</label>
          <input type="text" className="input" 
          value={email}
          onChange={(e) => setEmail(e.target.value)} required
          />
          <label className="color">Password :</label>
          <input type="password" className="input" 
          value={password}
          onChange={(e) => setPassword(e.target.value)} required
          />
          <button type="submit" className="">Log-in</button>
          {errorMessage && <div className="error">{errorMessage}</div>}
          {successMessage && <div className="success">{successMessage}</div>}
          <br />
          <div className="color align">
            Don&apos;t have account? <span className="span" onClick={handleToggle}>Sign-Up</span>
          </div>
        </div>
      </form>
    </StyledWrapper>
    </ModalOverlay>
  );
};

const ModalOverlay = styled.div`
  position: fixed; 
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5); 
  display: flex;
  justify-content: center; 
  align-items: center; 
  z-index: 1000; 
`;

const StyledWrapper = styled.div`
  .form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: background-image: radial-gradient(at 85% 51%, rgb(97, 105, 107) 0px, transparent 50%),
    radial-gradient(at 74% 68%, rgb(48, 55, 125) 0px, transparent 50%),
    radial-gradient(at 64% 79%, hsla(284,72%,73%,1) 0px, transparent 50%),
    radial-gradient(at 75% 16%, rgb(115, 56, 138) 0px, transparent 50%),
    radial-gradient(at 90% 65%, rgb(24, 72, 50) 0px, transparent 50%),
    radial-gradient(at 91% 83%, rgb(49, 19, 62) 0px, transparent 50%),
    radial-gradient(at 72% 91%, hsla(213,75%,75%,1) 0px, transparent 50%);
  padding: 40px;
  border: 1px solid #333;
  border-radius: 10px;
}

.login {
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
  
}
  .login {
  font-size: 28px;
  font-weight: 600;
  letter-spacing: -1px;
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 30px;
  color: #00bfff;
}
  

.login::before {
  width: 18px;
  height: 18px;
}

.login::after {
  width: 18px;
  height: 18px;
  animation: pulse 1s linear infinite;
}

.login::before,
.login::after {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  border-radius: 50%;
  left: 0px;
  background-color: #00bfff;
}
  

.flex {
  display: flex;
  flex-direction: column;
}

.form button {
  background-color:#00bfff;
  margin-top: 25px;
  margin-bottom: 6px;
  border-radius: 10px;
  border: none;
  padding-top: 4px;
  padding-bottom: 4px;
  font-size: 19px;
  font-weight: bold;
  color: grey;
}

.form label {
  margin-top: 20px;
  margin-bottom: 5px;
}

.form button:hover {
background-color:;
  box-shadow: 2px 2px 12px white;
}

.input {
  height: 30px;
  outline: none;
  padding: 15px;
  border-radius: 10px;
  border: none;
  font-weight: bold;
  font-size: 15px;
  box-shadow: 2px 2px 12px inset black;
  background: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));
}

.span:hover {
  font-weight: bold;
  cursor: pointer;
}

.color {
  color: white;
}

.align {
  text-align: center;
}
 @media (max-width: 768px) {
    .form {
      padding: 20px;  /* Reduce padding for smaller screens */
      width: 80vw;   /* Make form take 80% of the viewport width */
    }

    .login {
      font-size: 1.5rem;  /* Smaller font size for smaller screens */
    }

    .form button {
      font-size: 0.9rem;
      padding: 8px;
    }

    .input {
      font-size: 0.9rem;
      height: 35px;
    }
  }

  @media (max-width: 480px) {
    .form {
      width: 90vw;
    }

    .login {
      font-size: 1.3rem;
    }

    .form button {
      font-size: 0.8rem;
      padding: 7px;
    }

    .input {
      font-size: 0.8rem;
      height: 30px;
    }
  }

`;

export default LoginForm;
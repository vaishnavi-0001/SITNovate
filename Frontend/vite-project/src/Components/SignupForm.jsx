import  {useState} from 'react';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';



const SignupForm = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState (true);
  const handleClose = () => {
    setIsVisible (false);
  };
  if (!isVisible) return null;

  const [formData, setFormData] = useState ({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const handleInputChange = (e) => {
    setFormData ({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch('http://localhost:3000/auth/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });
        const result = await response.json();
        if (response.ok) {
            alert("Signup successful!");
            setIsVisible(false);
              navigate('/');
            
        } else {
            alert(result.message || "Signup failed");
        }
    } catch (error) {
        console.error("Error during signup:", error);
        alert("An error occurred. Please try again.");
    }
};


  return (
    <ModalOverlay>
      <StyledWrapper>
        <button className="close-button" onClick={handleClose}>&times;</button>
        <form className="form" onSubmit={handleSubmit}>

          <p className="title">Register </p>
          <p className="message">Signup now and get full access to our app. </p>
          <div className="flex">
            <label>
              <input
                className="input"
                type="text"
                name="firstName"
                placeholder=""
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
              <span>Firstname</span>
            </label>;

            <label>
              <input className="input" type="text" placeholder=""
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required />
              <span>Lastname</span>
            </label>
          </div>

          <label>
            <input className="input" type="email" placeholder=""
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required />
            <span>Email</span>
          </label>

          <label>
            <input className="input" type="password" placeholder=""
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required />
            <span>Password</span>
          </label>
          <label>
            <input className="input" type="password" placeholder=""
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            required />
            <span>Confirm password</span>
          </label>
          <button className="submit" type='submit'>Submit</button>
          <p className="signin">
            Already have an account ? <a href="#">Signup</a>{' '}
          </p>
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
  max-width: 350px;
  padding: 20px;
  border-radius: 20px;
  position: relative;
  background:background-image: radial-gradient(at 85% 51%, rgb(97, 105, 107) 0px, transparent 50%),
    radial-gradient(at 74% 68%, rgb(48, 55, 125) 0px, transparent 50%),
    radial-gradient(at 64% 79%, hsla(284,72%,73%,1) 0px, transparent 50%),
    radial-gradient(at 75% 16%, rgb(115, 56, 138) 0px, transparent 50%),
    radial-gradient(at 90% 65%, rgb(24, 72, 50) 0px, transparent 50%),
    radial-gradient(at 91% 83%, rgb(49, 19, 62) 0px, transparent 50%),
    radial-gradient(at 72% 91%, hsla(213,75%,75%,1) 0px, transparent 50%);
  color: #fff;
  border: 1px solid #333;
}

.title {
  font-size: 28px;
  font-weight: 600;
  letter-spacing: -1px;
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 30px;
  color: #00bfff;
}

.title::before {
  width: 18px;
  height: 18px;
}

.title::after {
  width: 18px;
  height: 18px;
  animation: pulse 1s linear infinite;
}

.title::before,
.title::after {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  border-radius: 50%;
  left: 0px;
  background-color: #00bfff;
}

.message, 
.signin {
  font-size: 14.5px;
  color: rgba(255, 255, 255, 0.7);
}

.signin {
  text-align: center;
}

.signin a:hover {
  text-decoration: underline royalblue;
}

.signin a {
  color: #00bfff;
}

.flex {
  display: flex;
  width: 100%;
  gap: 6px;
}

.form label {
  position: relative;
}

.form label .input {
  background-color: #333;
  color: #fff;
  width: 100%;
  padding: 20px 0px 05px ;
  outline: 0;
  background:  linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));
  border: 1px solid rgba(105, 105, 105, 0.397);
  border-radius: 10px;
}

.form label .input + span {
  color:  linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));
  position: absolute;
  left: 10px;
  top: 0px;
  font-size: 0.9em;
  cursor: text;
  transition: 0.3s ease;
}

.form label .input:placeholder-shown + span {
  top: 12.5px;
  color:  linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));
  font-size: 0.9em;
}

.form label .input:focus + span,
.form label .input:valid + span {
  color: #00bfff;
  top: 0px;
  font-size: 0.7em;
  font-weight: 600;
}

.input {
  font-size: medium;
    color:  linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));
}

.submit {
  border: none;
  outline: none;
  padding: 10px;
  border-radius: 10px;
  color: #fff;
  font-size: 16px;
  transform: .3s ease;
  background-color: #00bfff;
}

.submit:hover {
  background-color: #00bfff96;
}

@keyframes pulse {
  from {
    transform: scale(0.9);
    opacity: 1;
  }

  to {
    transform: scale(1.8);
    opacity: 0;
  }
}
`;

export default SignupForm;
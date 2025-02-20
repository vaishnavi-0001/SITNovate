import 'react';
import {useNavigate} from 'react-router-dom';
import Styled from 'styled-components';

const Navbar = () => {
  const navigate = useNavigate ();

  const Profile = () => {
    navigate ('/profile');
  };
  const Home = () => {
    navigate ('/');
  };
  const Search = () => {
    navigate ('/search');
  };
  const Categories = () => {
    navigate ('/categories');
  };


  return (
    <StyledWrapper>
      <div className="Nav-Container">
        <div className="Nav-Logo">
          <h1>Features</h1>
        </div>

        {/* Navigation Buttons */}
        <div className="button-container">
          {/* Home */}
          <button className="button" onClick={Home}>
            <svg
              className="icon"
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 1024 1024"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204z" />
            </svg>
            <span className="icon-text">Home</span>
          </button>

          {/* Search */}
          <button className="button" onClick={Search}>
            <svg
              className="icon"
              stroke="currentColor"
              fill="none"
              strokeWidth={2}
              viewBox="0 0 24 24"
              aria-hidden="true"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <span className="icon-text">Search</span>
          </button>

          {/* Profile */}
          <button className="button" onClick={Profile}>
            <svg
              className="icon"
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2.5a5.5 5.5 0 0 1 3.096 10.047 9.005 9.005 0 0 1 5.9 8.181.75.75 0 1 1-1.499.044 7.5 7.5 0 0 0-14.993 0 .75.75 0 0 1-1.5-.045 9.005 9.005 0 0 1 5.9-8.18A5.5 5.5 0 0 1 12 2.5ZM8 8a4 4 0 1 0 8 0 4 4 0 0 0-8 0Z" />
            </svg>
            <span className="icon-text">Profile</span>
          </button>

          {/* Categories */}
          <button className="button" onClick={Categories}>
            <svg
              className="icon"
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 3H3v7h7V3zM21 3h-7v7h7V3zM10 14H3v7h7v-7zM21 14h-7v7h7v-7z" />
            </svg>
            <span className="icon-text">Categories</span>
          </button>
        </div>
      </div>
    </StyledWrapper>
  );
};

export default Navbar;

const StyledWrapper = Styled.div`
h1{

}
  .Nav-Container {
    display: flex;
    position: fixed;
    height: 100%;
    width: 60px;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    padding: 2rem;
    color:white;
    background:rgb(252, 252, 252);
    visibility: hidden;
  }

  .button-container {
    position: fixed;
    top: 15rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color:rgb(203, 203, 203);
    width: 50px;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
  }

  .button {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
    padding: 5px;
    border: none;
    background: transparent;
    color: white;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    position: relative;
  }

  .icon {
    font-size: 20px;
    color: white;
    visibility: visible;
  }

  .icon-text {
    position: absolute;
    left: 50px;
    white-space: nowrap;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 14px;
    color: white;
    opacity: 0;
    transform: translateX(-10px);
    transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
  }

  .button:hover .icon-text {
    opacity: 1;
    transform: translateX(0);
  }

  .button {
    color: white;
  }

  .icon {
    color: white;
  }
@keyframes verticalScroll {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}

.icon {
  font-size: 20px;
  color: white;
  visibility: visible;
  animation: verticalScroll 2s infinite ease-in-out;
}
`;

import styled from 'styled-components';

const Message = () => {
  return (
    <StyledWrapper>
      <div className="container">
        <div className="nav-bar">
          <a>Chat</a>
        </div>
        <div className="messages-area">
          <div className="message one" />
          <div className="message two" />
          <div className="message three" />
          <div className="message four" />
          <div className="message five" />
          <div className="message six" />
        </div>
        <div className="sender-area">
          <div className="input-place">
            <input placeholder="Send a message." className="send-input" type="text" />
            <div className="send">
              <svg className="send-icon" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{enableBackground: 'new 0 0 512 512'}} xmlSpace="preserve"><g><g><path fill="#6B6C7B" d="M481.508,210.336L68.414,38.926c-17.403-7.222-37.064-4.045-51.309,8.287C2.86,59.547-3.098,78.551,1.558,96.808 L38.327,241h180.026c8.284,0,15.001,6.716,15.001,15.001c0,8.284-6.716,15.001-15.001,15.001H38.327L1.558,415.193 c-4.656,18.258,1.301,37.262,15.547,49.595c14.274,12.357,33.937,15.495,51.31,8.287l413.094-171.409 C500.317,293.862,512,276.364,512,256.001C512,235.638,500.317,218.139,481.508,210.336z" /></g></g></svg>
            </div>
          </div>
        </div>
        <div /></div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .container {
  position:fixed;
    width: 100%;
    height: 100vh;
    background-color:rgb(35, 35, 37);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center; /* Center horizontally */
  justify-content: center;
  }

  .nav-bar {
    width: 100%;
    height: 40px;
    background-color: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .nav-bar a {
    color:rgb(105, 107, 135);
    white-space: nowrap;
    margin-left: 10px;
    user-select: none;
  }

 

  .messages-area {
    background-color: green;
    
    height: 20px;
    /* Adjust width as needed */
  width: 70px;
  }

  .sender-area {
    
    top:28rem;
    width: 10px;

    background-color:rgb(35, 35, 37);
    
    height: 10px;
    display: flex;
    border-radius: 8px;
  }

  .message {
    width: 400rem;
    height: 100px;
  }

  .message.one,
  .message.three,
  .message.five {
    background-color:rgb(35, 35, 37);
  }

  .message.two,
  .message.four,
  .message.six {
    background-color: rgb(35, 35, 37);
  }

  .send-img {
    width: 30px;
  }

  .send-input {
  
    outline: none;
    display: flex;
    border: none;
    background: none;
    height: 40px;
    width: 230px;
    border-radius: 7px;
    background: none;
    color: white;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    margin-left: 5px;
  }

  .send-input::placeholder {
    color: #828E9E;
  }

  .input-place {
    display: flex;
    flex-direction: row;
    margin-top: 15px;
    margin-left: 10px;
    align-items: center;
    background-color: #40414F;
    border-radius: 7px;
    height: 40px;
    width: 280px;
    gap: 5px;
    border: 1px solid #2E2F3A;
  }

  .send {
    width: 30px;
    height: 30px;
    background-color: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .send-icon {
    width: 17px;
  }`;

export default Message;
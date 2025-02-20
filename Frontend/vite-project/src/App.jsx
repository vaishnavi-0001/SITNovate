
import  'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import Login from './Pages/Login.jsx';
import Sign from './Pages/Sign.jsx';
import Chat from './Pages/Chat.jsx';
import Message from './Pages/Message.jsx';
import H from './Pages/H.jsx';

const App = () => {


  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/login' element={ <Login />} />
        <Route path='/signup' element={ <Sign />} />
        <Route  path='/chat' element={ <Chat />} />
        <Route path='/messages' element={<Message/>} />
        <Route path='/home' element={<H/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
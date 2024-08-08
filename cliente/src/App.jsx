import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx'
import CreateOrUpdatePokemon from './pages/CreateOrUpdatePokemon.jsx'
import Landing from './pages/Landing.jsx'
import NotFound from './pages/NotFound.jsx';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';

function App() {
  return (
    <Container>
      <Routes>
        <Route exact path='/' element={<Landing/>} />
        <Route exact path='/home' element={<Home/>} />
        <Route exact path='/create' element={<CreateOrUpdatePokemon/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </Container>
  );
}

const Container = styled.div`
  box-sizing: border-box;
  height: 100vh;
  overflow: auto;
`

export default App;

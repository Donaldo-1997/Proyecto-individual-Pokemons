import { Route, Switch } from 'react-router-dom';
import Home from './components/Home.jsx'
import DetailPokemon from './components/DetailPokemon.jsx'
import CreatePokemon from './components/CreatePokemon.jsx'
import Landing from './components/Landing.jsx'
import NotFound from './components/NotFound.jsx';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/detail/:parameter' component={DetailPokemon} />
        <Route exact path='/create' component={CreatePokemon} />
        <Route path='*' component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;

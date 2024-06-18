import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home.jsx'
import DetailPokemon from './pages/DetailPokemon.jsx'
import CreateOrUpdatePokemon from './pages/CreateOrUpdatePokemon.jsx'
import Landing from './pages/Landing.jsx'
import NotFound from './pages/NotFound.jsx';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/detail/:parameter' component={DetailPokemon} />
        <Route exact path='/create' component={CreateOrUpdatePokemon} />
        <Route path='*' component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;

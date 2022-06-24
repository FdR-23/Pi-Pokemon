import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './component/LandingPage/LandingPage.jsx';
import Home from './component/Home/Home.jsx'
import DetailsPokemon from './component/DetailsPokemon/DetailsPokemon';
import CreatePokemon from './component/CreatePokemon/CreatePokemon';
import Error404 from './component/Error404/Error404';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/pokemons/:id' component={DetailsPokemon} />
        <Route exact path='home/create' component={CreatePokemon} />
        <Route  path='*' component={Error404} />
      </Switch>

    </BrowserRouter>


  );
}

export default App;

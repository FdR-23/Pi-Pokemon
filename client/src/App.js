import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './component/LandingPage/LandingPage.jsx';
import Home from './component/Home/Home.jsx'
import DetailsPokemon from './component/DetailsPokemon/DetailsPokemon';
import CreatePokemon from './component/CreatePokemon/CreatePokemon';


function App() {
  return (
    <BrowserRouter>
      <Switch>

        <Route exact path='/' component={LandingPage} />
        <Route path='/home' component={Home} />
        <Route path='/pokemons/:id' component={DetailsPokemon} />
        <Route exact path='/create' component={CreatePokemon} />
      </Switch>

    </BrowserRouter>


  );
}

export default App;

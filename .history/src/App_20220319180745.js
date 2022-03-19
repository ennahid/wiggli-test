import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes ,Route } from "react-router-dom";
import PokemonsList from './components/pokemons-list';
import PokemonInfo from './components/pokemon-info';
import PokemonsTypes from './components/pokemon-types';

function App() {
  return (
    <div className="App">
      <h1>
        Try to catch'em all
      </h1>
      <Router>
        <Routes>
          <Route path={"/"} element={<PokemonsList />} />
          <Route path={`pokemon/:name`} element={<PokemonInfo />} />
          <Route path={`pokemon/type/:name`} element={<PokemonsTypes />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

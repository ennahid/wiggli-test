import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes ,Route } from "react-router-dom";
import PokemonsList from './components/pokemons-list';
import PokemonInfo from './components/pokemons-info';

function App() {
  return (
    <div className="App">
      <h1>
        Try to catch'em all
      </h1>
      <Router>
        <Routes>
          <Route path={"/"} element={<PokemonsList />} />
          <Route path={`pokemon/:name`} element={<PokemonsInfo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

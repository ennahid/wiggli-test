import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import PokemonsList from './components/pokemons-list';

function App() {
  return (
    <div className="App">
      <h1>
        hello
      </h1>
      <Router>
      <Dashboard />
      </Router>
      < PokemonsList />
    </div>
  );
}

export default App;

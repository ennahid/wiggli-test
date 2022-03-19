import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes ,Route } from "react-router-dom";
import PokemonsList from './components/pokemons-list';

function App() {
  return (
    <div className="App">
      <h1>
        hello
      </h1>
      <Router>
        <Route path={myRoutes.create} element={<ClientForm />} />
        <Route path={`${myRoutes.edit}/:clientId`} element={<ClientForm />} />
      </Router>
      < PokemonsList />
    </div>
  );
}

export default App;

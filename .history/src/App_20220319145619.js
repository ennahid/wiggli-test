import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes ,Route } from "react-router-dom";
import PokemonsList from './components/pokemons-list';

function App() {
  return (
    <div className="App">
      <h1>
        Try to catch'em all
      </h1>
      <Router>
        <Routes>
          <Route path={"/"} element={<PokemonsList />} />
          {/* <Route path={`${myRoutes.edit}/:clientId`} element={<ClientForm />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;

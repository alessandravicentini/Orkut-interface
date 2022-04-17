import './App.css';

import { Switch, Route } from 'react-router-dom'

import { Cadastro } from './pages/Cadastro';
import { Home } from './pages/Home'

function App() {

  return (
    <>
    <Switch>
      <Route exact path='/'>
        <Cadastro />
      </Route>
      <Route exact path={'/home/:name:surname'}>
        <Home />
      </Route>
    </Switch>
    </>
  );
}

export default App;

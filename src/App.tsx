import './App.css'
import Pokemon from './components/Pokemon' 
import PokemonCard from './components/PokemonCard'
import { BrowserRouter, Switch, Route } from 'react-router-dom' 

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/pokemon/:id" component={PokemonCard} />
        <Route exact path="/" component={Pokemon}/>  
      </Switch>
    </BrowserRouter>
  )
}

export default App

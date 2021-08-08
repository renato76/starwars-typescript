import './App.css'
import Characters from './components/Characters'
import CharacterShow from './components/CharacterShow' 
import { BrowserRouter, Switch, Route } from 'react-router-dom' 

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Characters} />  
        <Route path="/person/:id" component={CharacterShow} />
      </Switch>
    </BrowserRouter>
  )
}

export default App

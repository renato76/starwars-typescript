import './App.css'
import Characters from './components/Characters' 
import { BrowserRouter, Switch, Route } from 'react-router-dom' 

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/people/:id" />
        <Route exact path="/" component={Characters}/>  
      </Switch>
    </BrowserRouter>
  )
}

export default App

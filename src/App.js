import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom"
import { UserProvider } from './UserContext'
import Forgotpassword from './Forgotpassword';
import Resetpassword from './Resetpassword'
import Demo from './demo';
function App() {

return <>
<Router>
  <Demo/>
    <div id="wrapper">
      <UserProvider>
      <Switch>
        <Route path ="/" component={Forgotpassword} exact={true}></Route>
        <Route path ="/resetpassword/:id" component={Resetpassword} exact={true}></Route>
        <Route exact path="/demo" component={Demo}></Route>
      </Switch>
      </UserProvider>
      
    </div>
  </Router>

</>


}

export default App;

import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Student from './Componte/Student'
import Exam from './Componte/Exam'
import Home from './Componte/Home'
import Error404 from "./Componte/Error/Error404";
import Header from './Componte/Layout/Header'
import Footer from './Componte/Layout/Footer'
import LoginPage from "./Componte/LoginPage";



function App() {

  return (
    <div>
      <Router>
        <Header/>
        <LoginPage/>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/exam" exact component={Exam}/>
            <Route path="/student" exact component={Student}/>
          <Route component={Error404}/>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;

import Fillm from "./Componte/Fillm"
import Newfillm from "./Componte/New-fillm";
import AboutFillm from "./Componte/About_Fillm";
import './Componte/css/Menu.css'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Menu from "./Componte/Menu";
import Layout from "./Componte/NavbarWebSite/Layout";
import Error404 from "./Componte/error404";


function App() {
  return (
    <div>
            <Router>
            <Layout/>
              <div>
              <Switch>  
                  <Route path= "/newfillm">
                  <Menu> <Newfillm/> </Menu>
                </Route>
                <Route path="/About-Fillm/:id" >
                  <AboutFillm />
                </Route>
                <Route path= "/">
                  <Menu> <Fillm/> </Menu>
                  </Route> 
                <Route path="/*">
                  <Error404/>
                </Route>
              </Switch>
              </div>
            </Router>
          </div>
  );
}

export default App;

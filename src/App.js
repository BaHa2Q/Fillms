import Fillm from "./Componte/Fillm"
import Password from "./Componte/Informtion";
import Newfillm from "./Componte/New-fillm";
import AboutFillm from "./Componte/About_Fillm";
import './Componte/css/Menu.css'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Menu from "./Componte/Menu";
import Layout from "./Componte/NavbarWebSite/Layout";
import Error404 from "./Componte/error404";
import Root from "./Componte/Root";


function App() {
  return (
    <div>
            <Router>
            <Layout/>
              <div>
              <Switch>  
                <Route exact path="/" >
                <Root>
                </Root>
                </Route>
                <Route path="/About-Fillm/:id" >
                  <AboutFillm />
                </Route>
                <Route path="/password">
                <Password/>
                </Route>
                <Route path= "/Fillm">
                  <Menu> <Fillm/> </Menu>
                  </Route> 
                  <Route path= "/newfillm">
                  <Menu> <Newfillm/> </Menu>
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

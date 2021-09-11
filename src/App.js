import React from 'react';
import logo from './logo.svg';
import './App.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
} from "react-router-dom";
import ListEquipementsComponent from './components/ListEquipementsComponent';
import CreateEquipementComponent from './components/CreateEquipementComponent';
import DetailsConsommaionComponent from './components/DetailsConsommationComponent';
import FactureComponent from './components/FactureComponent';
import { Login, Register } from './components/login';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';


function App() {
  return (
      <div>
          <Router>
              <HeaderComponent />
              <div className="container">
                  <Switch>
                      <Route path="/login">
                          <Login fakeAuth={fakeAuth} />
                      </Route>
                      <Route path="/register">
                          <Register />
                      </Route>
                      <Route path="/" exact>
                          {localStorage.getItem('isAuthenticated') === "true" ? <ListEquipementsComponent /> : <Login fakeAuth={fakeAuth} />}
                      </Route>
                      {/*<Route path="/" component={ListEquipementsComponent} ></Route>*/}
               
                      <Route path="/equipements" component={ListEquipementsComponent} ></Route>
                      <Route path="/add-equipement/:id" component={CreateEquipementComponent} ></Route>
                      <Route path="/details/:id" component={DetailsConsommaionComponent} ></Route>
                      <Route path="/facture" component={FactureComponent} ></Route>


                  </Switch>

              </div>
              <FooterComponent />
          </Router>      
      </div>
  );
}

const fakeAuth = {
    isAuthenticated: false,
    authenticate() {

        localStorage.setItem('isAuthenticated', "true")
        fakeAuth.isAuthenticated = true;
        //setTimeout(history.replace({ pathname: "/" }), 100); // fake async
    },
    signout() {
        localStorage.setItem('isAuthenticated', "false")
        fakeAuth.isAuthenticated = false;
        //setTimeout(, 100);
    }
};

function PrivateRoute({ children, ...rest }) {
    return (
        <Route
            {...rest}
            render={({ location }) =>
                fakeAuth.isAuthenticated || localStorage.getItem('isAuthenticated') === "true" ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}
export default App;

import React, {Component} from 'react';
import Layout from './hoc/Layout/Layout';
import Login from './containers/Login/Login'
import Registration from './containers/Registration/Registration'
import { Route, Switch } from 'react-router-dom'

class App extends Component {
  render(){
     return (
      <div>
        <Layout> 
          <Switch>
            <Route path="/" exact component={Login}/>
            <Route path="/registration" component={Registration}/>
          </Switch>
        </Layout> 
      </div>
  );
  };
};

export default App;

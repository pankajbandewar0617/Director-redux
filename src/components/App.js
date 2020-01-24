import React from 'react';
import Home from './home'
import Directors from './Director';
import AddDirector from './addDirector';
import DirectorEdit from './editDirector';
import Directorname from './directorName';
import { BrowserRouter, Switch, Link, Route } from 'react-router-dom';


class App extends React.Component {

  render() {

    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/directors" exact component={Directors} />
            <Route path="/directors/new" exact component={AddDirector} />
            <Route path="/directors/:id" exact component={Directorname} />
            <Route path="/directors/:id/edit" exact component={DirectorEdit} />
            {/* <Route path="/directors/:id/delete" exact component={DirectorDelete} /> */}
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

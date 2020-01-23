import React from 'react';
import Home from './home'
import Director from './Director';
import { BrowserRouter, Switch, Link, Route } from 'react-router-dom';


class App extends React.Component {
  render() {
    const { data } = this.props
    console.log(data)

    return (
      <div>
        {/* <Link to="/directors"> */}
        {/* <button>Directors</button> */}
        {/* </Link> */}
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            {/* <Route path="/directors" component={<Director />} />
             */}
            <Director />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;


// componentDidMount() {
  //   const { data } = this.props
  //   console.log(data)
  //   getData();
  // }
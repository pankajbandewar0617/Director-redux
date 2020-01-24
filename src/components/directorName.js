import React, { Component } from 'react';
import { Link, Switch, Route, withRouter } from 'react-router-dom';

import SingleDirector from './singleDirector';


class Directorname extends Component {

    directorstyle = () => {
        return {
            border: "4px solid",
            width: "300px",
            fontSize: "16px",
            margin: "10px",
            padding: "10px",
            backgroundColor: "rgb(58, 57, 57)",
            color: "darkgoldenrod",
            borderRadius: "25px",
            lineHeight: "20px"
        }
    }

    // ondelete = (e) => {
    //     // console.log('delete');
    //     const id = e.target.parentNode.getAttribute('position')
    //     this.props.deletedata(id)
    //     // await this.props.getAllData()
    //     this.props.refresh()
    //     // console.log(this.props.refresh)
    //     // this.props.history.push('./directors')
    // }

    render() {
        console.log(this.props.data)
        return (
            <div className="directorname" position={this.props.name.id} style={this.directorstyle()}>
                <Link to={`/directors/${this.props.name.id}`}>
                    <p><b>Id : </b>{this.props.name.id}</p>
                </Link>
                <Switch>
                    <Route path={`/directors/${this.props.name.id}`} component={() => (<SingleDirector id={this.props.name.id} />)} />
                </Switch>
                <p><b>Director : </b>{this.props.name.name}</p>
                <Link to={`/directors/${this.props.name.id}/edit`}>
                    <button>edit directors</button>
                </Link>
                <Link to={`/directors/${this.props.name.id}/delete`}>
                    <button>delete</button>
                </Link>
            </div >
        );
    }
}


export default Directorname;
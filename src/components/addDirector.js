import React, { Component } from 'react';
import { Link, Switch, Route, withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { addNewData } from './action';

import './App.css';

class AddDirector extends Component {

    passValue = e => {
        e.preventDefault();
        const name = e.target[0].value
        this.props.addNewData(name)
        this.props.history.push('/directors')
    };

    render() {
        return (
            <div>
                <Link to="/directors">
                    <button className="back-button">&#x21D0;</button>
                </Link>
                <div className="director-add">
                    <h3>Add New Director</h3>
                    <div>
                        <b>Director : </b>
                        <form onSubmit={this.passValue}>
                            <input
                                type="text"
                                placeholder="Enter Director Name..."
                                onChange={this.takeInput}
                                required
                            />
                            <button type="submit">add</button>
                        </form>
                    </div>
                </div>
            </div >
        );
    }
}


const mapStateToProps = state => {
    return {
        directors: state.directors
    };
};

const mapDispatchToProps = {
    addNewData
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AddDirector));
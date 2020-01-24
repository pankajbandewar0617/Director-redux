import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { getEditData } from './action';
import './App.css'

class DirectorEdit extends Component {

    passValue = e => {
        e.preventDefault();
        const id = this.props.match.params.id;
        const name = e.target[0].value;
        this.props.getEditData(id, name);
        this.props.history.push('/directors');
    };

    render() {
        const id = this.props.match.params.id
        return (
            <div>
                <Link to={`/directors`}>
                    <button className="back-button">&#x21D0;</button>
                </Link>
                <div className="director-add">
                    <h3>Change Director Name</h3>
                    <form onSubmit={this.passValue}>
                        <div>
                            <b>Director : </b>
                            <input
                                type="text"
                                placeholder="Enter Director Name..."
                                onChange={this.takeInput}
                                required
                            />
                            <button type="submit">add</button>
                        </div>
                    </form>
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
    getEditData
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(DirectorEdit));

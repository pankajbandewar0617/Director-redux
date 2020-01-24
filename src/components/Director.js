import React, { Component } from 'react';
import Directorname from './directorName';
import { Link, Switch, Route } from 'react-router-dom';
import { connect } from "react-redux";
import { getAllData } from './action';
// import AddDirector from './addDirector';
import './App.css';

class Directors extends Component {

    componentDidMount() {
        this.props.getAllData();
    }

    addstyle = () => {
        return {
            backgroundColor: "rgb(92, 182, 65)",
            borderRadius: "25px",
            width: "130px",
            height: "40px",
            fontSize: "18px",
            color: "navy",
            border: 'none',
        }
    }

    render() {
        return (
            <div>
                <div className="navbar">
                    <Link to="/">
                        <button className="back-button">&#x21D0;</button>
                    </Link>

                    <h2>All Directors</h2>

                    <Link to="/directors/new">
                        <button id="addButton" style={this.addstyle()}>add directors</button>
                    </Link>
                </div>

                <div className="all-directors">
                    {this.props.directorData.map(name => (
                        <Directorname
                            name={name}
                            key={name.id}
                            refresh={this.props.getAllData}
                        />
                    ))}
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        directorData: state.directorData
    };
}
const mapDispatchToProps = {
    getAllData
};

export default connect(mapStateToProps, mapDispatchToProps)(Directors);

import React, { Component } from 'react';
import Directorname from './directorName';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { getData } from './action';
import './App.css';

class Director extends Component {

    componentDidMount() {
        this.props.getData();
    }

    addstyle = () => {
        return {
            backgroundColor: "rgb(92, 182, 65)",
            borderRadius: "25px",
            width: "130px",
            height: "40px",
            fontSize: "20px",
            color: "navy",
            border: 'none',
        }
    }

    render() {
        // console.log('Director Page')
        // console.log(this.props.data)
        // console.log(this.props)
        const director = this.props.data
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
                    {director.map(name => (
                        <Directorname
                            name={name}
                            key={name.id}
                        />
                    ))}
                </div>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        data: state.data
    };
}
const mapDispatchToProps = {
    getData
};

export default connect(mapStateToProps, mapDispatchToProps)(Director);

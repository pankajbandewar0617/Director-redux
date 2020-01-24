import React, { Component } from 'react';
import { deletedata } from './action';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


class DirectorDelete extends Component {


    componentDidMount() {
        const id = this.props.match.params.id
        this.props.deletedata(id)
        this.props.history.push('/directors')
    }

    render() {
        return (
            <h1>data delete</h1>
        );
    }
}


const mapDispatchToProps = {
    deletedata
};
export default connect(null, mapDispatchToProps)(withRouter(DirectorDelete));

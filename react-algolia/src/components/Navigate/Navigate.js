import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getSearches} from '../../actions/resultsDispatch';
import {search} from '../../actions/searchDispatch';

class Navigate extends Component{
    state={
        input:""
    }

    //handle the current input and update the state of the component input
    handleInput = (e) =>{
        let currInput=e.target.value;
        this.setState({
            input:currInput
        })
    }
    //store the form submission data into our search store and get the input for the query and pass it to axios
    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.search(this.state.input);
        this.props.getSearches(this.state.input);
    }
    render(){
        return(
            <nav className="navbar navbar-expand-md sticky-top navbar-light bg-light">
                <form onSubmit={this.handleSubmit}>
                    <input className="form-control mr-sm-2" placeholder="Search here" type="search" onChange={this.handleInput}></input>
                    <button className="btn my-3 my-sm-0" type="submit">Search</button>
                </form>
            </nav>
        )
    }
}
const sendStateToResults = (state) =>{
    return{
        searches: state.searches,
        resultingState: state.resultingState
    }
}

const sendDispatchToResults = (dispatch)=>{
    return{
        search: (data)=> {dispatch(search(data))},
        getSearches: (query)=> dispatch(getSearches(query))
    }
}

export default connect(sendStateToResults,sendDispatchToResults)(Navigate);
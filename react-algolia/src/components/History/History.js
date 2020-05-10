import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getSearches} from '../../actions/resultsDispatch'

class History extends Component{

    //when we select a previous search send the selected one to the axios http request
    getPreviousSearch = (e)=>{
        this.props.getSearches(e.target.id);
    }
    render(){
        const {searches} = this.props;
        return(
            <div className="search-results">
                <h1 className="text-light">Select for Past Searches</h1>
                <div>
                    {
                        searches.map(search=>{
                            return(
                                <button className="btn btn-info m-1" id={search} key={search} onClick={this.getPreviousSearch}>
                                    {search}
                                </button>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
const sendStateToProps = (state) =>{
    return{
        searches: state.searches
    }
}
const sendDispatchToProps = (dispatch)=>{
    return{
        getSearches: (query)=>dispatch(getSearches(query))
    }
}

export default connect(sendStateToProps,sendDispatchToProps)(History)
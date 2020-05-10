import React, {Component} from 'react';
import {connect} from 'react-redux';

class Search extends Component {

    searchResults= ()=>{
        if(this.props.resultingData.length===0){
            return(
                <div>
                    <strong>Do a search in the search bar above and hit enter or click search button</strong>
                </div>
            )
        }else{
            const {resultingData}=this.props;
            return(
                <div>
                    {resultingData.map(result=>{
                        return(
                            <a href={result.url} 
                            className="list-group-item list-group-item-action"
                            key={result.objectID}
                            >
                                <strong className="text-dark">{result.title}</strong>
                                <br></br>
                                <strong>Author:</strong>
                                {result.author}
                            </a>
                        )
                    })}
                </div>
            )
        }
    }
    render(){
        return(
            <div>
                <h1 className="text-light">Results</h1>
                <div className="row m-3">
                        {this.searchResults()}
                </div>
            </div>
        )
    }
}

const sendStateToProps = (state) =>{
    return{
        resultingData:state.results
    }
}

export default connect(sendStateToProps)(Search)
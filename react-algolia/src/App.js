import React, {Component} from 'react';
import Navigate from './components/Navigate/Navigate'
import Search from './components/Search/Search'
import History from './components/History/History'

class App extends Component{
    render(){
        return(
            <div style={{backgroundColor:"lightblue"}}>
                <Navigate/>
                <div style={{backgroundColor:"lightblue"}}>
                    <div>
                        <Search/>
                    </div>
                    <div>
                        <History/>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
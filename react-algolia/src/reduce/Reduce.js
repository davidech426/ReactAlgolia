//use a pure reducer function
const initialState={
    searches:[],
    results:[]
}
//(previous state, action), avoid mutating state
//keep track or prev state, dispatch action, and next sate
const reducer = (state=initialState,action)=>{
    //specify how app's state change in response to the 'searching' action sent to store
    if(action.type==='SEARCHING'){
        return{
            ...state,
            searches: [...state.searches,action.data]
        }
    //specify how app's state changes in response to 'obtaining data' action sent to store
    }else if(action.type==='OBTAIN_DATA'){
        return{
            ...state,
            results:action.resultingData
        }
    } else if(action.type==='ERROR'){
        //if erro return the previous state
        return state;
    }
    //if any other action/ unknown action , return previous state
    return state;
}

export default reducer;
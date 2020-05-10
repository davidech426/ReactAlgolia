import axios from 'axios'

//send searches to the store
export const getSearches = (query)=>{
    return(dispatch)=>{
        return axios.get("https://hn.algolia.com/api/v1/search?query="+query).then(
            (response)=>{
                //obtain the data from the response
                const resultingData=response.data.hits
                //send them to the store with dispatch
                dispatch({type:'OBTAIN_DATA',resultingData});
                }).catch((err)=>{
                    dispatch({type:'ERROR',err})
                })
            }
}
//a search action creator
export const search = (data)=>{
    return {
        type: 'SEARCHING',
        data: data
    }
}
import opskriftapi from '../api/api';

export const selectItem = (opskrift) => {
    return{
        type: 'ITEM_SELECTED',
        payload: opskrift
    }
}

export const fetchAll = () => async dispatch => {
    const response = await opskriftapi.get('/Opskrifts')
    console.log(response.data)
    dispatch({type: 'FETCH_DATA', payload: response.data})
    //this is suppossed to fetch all the data from the api
    //https://madspildrestapi.azurewebsites.net/api/Opskrifts
    
}
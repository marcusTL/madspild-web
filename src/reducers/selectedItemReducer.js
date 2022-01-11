const selectedItemReducer = (selectedItem=null, action) => {
    if (action.type === 'ITEM_SELECTED'){
        return action.payload;
    }
    return selectedItem;
}

export default selectedItemReducer

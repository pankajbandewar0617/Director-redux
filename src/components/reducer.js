const initialSate = {
    data: []
}

const reducer = (state = initialSate, action) => {
    // console.log(state)
    // console.log(action)

    switch (action.type) {

        case 'DATA_RECEIVED':
            // console.log(action.json)
            return {
                ...state,
                data: action.json
            }
        default:
            return state;
    }
};
export default reducer;
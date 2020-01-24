const initialSate = {
    directorData: [],
    directorName: { id: "", name: "" }
}

const reducer = (state = initialSate, action) => {
    // console.log(state)
    console.log(action)

    switch (action.type) {

        case 'DATA_RECEIVED':
            console.log(action.json)
            return {
                ...state,
                directorData: action.json
            }

        case 'DATA DELETED':
            console.log('DATA DELETED SUCCESSFULLY')

        case 'ONE_DATA':
            console.log(action.json)
            return {
                directorName: action.json
            }

        default:
            return state;
    }
};
export default reducer;
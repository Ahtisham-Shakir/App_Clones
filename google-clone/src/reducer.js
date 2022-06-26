export const initialState = {
    term: null
}

export const actionTypes = {
    SET_SEARCH_TERMS: "SET_SEARCH_TERMS"
}

const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
        case actionTypes.SET_SEARCH_TERMS:
            return {
                ...state,
                term: action.term
            };

        default:
            return state
    }
};

export default reducer
export const initialState = {
  term: "react",
  startIndex: 1,
};

export const actionTypes = {
  SET_SEARCH_TERM: "SET_SEARCH_TERM",
  SET_FETCH_PAGE: "SET_FETCH_PAGE",
};

const reducer = (state, action) => {
  // console.log("action.term :>> ", action.term, action.startIndex);
  switch (action.type) {
    case actionTypes.SET_SEARCH_TERM:
      return {
        ...state,
        term: action.term,
        startIndex: action.startIndex,
      };

    default:
      return state;
  }
};

export default reducer;

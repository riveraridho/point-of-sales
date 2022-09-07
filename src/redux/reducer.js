const initialState = {
  pos: [],
  customer: {},
  product: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_POS':
      return {
        pos: action.payload,
      };
    case 'LOAD_POS':
      return {
        ...state,
        pos: [action.payload, ...state.pos],
      };
    case 'SET_CUSTOMER':
      return {
        ...state,
        customer: action.payload,
      };
    case 'SET_PRODUCT':
      return {
        ...state,
        product: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;

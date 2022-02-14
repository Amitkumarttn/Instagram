const INITIAL_STATE = {
  isLoading: false,
  arrData: [],
  error: '',
};

const imageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'IS_FETCHING':
      return {...state, isLoading: false};
    case 'IS_SUCCESS':
      return {...state, isLoading: false, arrData: action.payload, error: ''};
    case 'IS_FAILURE':
      return {...state, isLoading: false, error: action.payload};

    default:
      return state;
  }
};
export default imageReducer;

export const getImage = dispatch => {
  dispatch(getDataActionCreator());
};

const getDataActionCreator = () => {
  return middlewareFunction;
};

const middlewareFunction = (dispatch, getState) => {
  dispatch({type: 'IS_FETCHING'});
  fetch('https://picsum.photos/v2/list?page=2&limit=50')
    .then(response => response.json())
    .then(data => {
      dispatch({type: 'IS_SUCCESS', payload: data});
    })
    .catch(error => {
      dispatch({type: 'IS_FAILURE', payload: error});
    });
};

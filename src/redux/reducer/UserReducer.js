const INITIAL_STATE = {
  username: '',
  password: '',
  name: '',
  bio: '',
  website: '',
  // DATA = [{}]
};

const UserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'USERNAME':
      return {...state, username: action.payload};
    case 'PASSWORD':
      return {...state, password: action.payload};
    case 'NAME':
      return {...state, name: action.payload};
    case 'BIO':
      return {...state, bio: action.payload};
    case 'WEBSITE':
      return {...state, website: action.payload};
    default:
      return state;
  }
};

export default UserReducer;

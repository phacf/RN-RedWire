const INITIAL_STATE = {
  user: [],
  isAuth: true,
  error: null,
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 1:
      return state;
    default:
      return state;
  }
}

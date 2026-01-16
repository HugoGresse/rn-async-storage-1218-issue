import type { UnknownAction } from 'redux';

const INCREMENT = 'count/INCREMENT';
const RESET = 'count/RESET';

export const increment = () => ({ type: INCREMENT });
export const reset = () => ({ type: RESET });

const initialState = { clicks: 0 };

const countReducer = (state = initialState, action: UnknownAction) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, clicks: state.clicks + 1 };
    case RESET:
      return initialState;
    default:
      return state;
  }
};

export const persistReducer = {
  count: countReducer,
};

// src/redux/reducers/headerReducer.js
import { SHOW_DOCTRISAILOGO, HIDE_DOCTRISAILOGO } from '../actions/headerActions';

const initialState = {
  isVisible: true,
};

const headerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_DOCTRISAILOGO:
      return { ...state, isVisible: true };
    case HIDE_DOCTRISAILOGO:
      return { ...state, isVisible: false };
    default:
      return state;
  }
};

export default headerReducer;

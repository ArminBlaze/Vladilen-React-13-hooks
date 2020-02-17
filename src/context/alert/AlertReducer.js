import {SHOW_ALERT, HIDE_ALERT} from '../constants'

export default function AlertReducer(state, action) {

  switch (action.type) {
    case SHOW_ALERT:
      const {type, text} = action.value;
      return {type, text};

    case HIDE_ALERT:
      return null;

    default:
      return state;
  }
}
import {SHOW_ALERT, HIDE_ALERT} from '../constants'

const handlers = {
  [SHOW_ALERT]: (state, action) => action.value,
  [HIDE_ALERT]: () => null,
  DEFAULT: (state) => state
}

export default function AlertReducer(state, action) {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
}
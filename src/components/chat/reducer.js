import { ChatActionTypes } from "./actions";

const initialState = {
  messages: []
};

export function chat(state = initialState, action) {
  switch (action.type) {
    case ChatActionTypes.ADDED:
      return {
        ...state,
        messages: state.messages.concat(action.message)
      };

    default:
      return state;
  }
}

import { addedMessage } from "./actions";
import socket from "socket.io-client";
import { ioConfig } from '../../config/io-config';

export function addMessage(message) {
  // Thunk middleware knows how to handle functions.
  // It passes the dispatch method as an argument to the function,
  // thus making it able to dispatch actions itself.

  return function(dispatch) {
    // First dispatch: the app state is updated to inform
    // that the API call is starting.

    dispatch(addedMessage(message))

    socket(ioConfig.chatUrl).emit('chat message', message);
  };
}


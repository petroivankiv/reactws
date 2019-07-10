export const ChatActionTypes = {
    REQUEST: "REQUEST",
    ADDED: "ADDED",
    DELETED: 'DELETED',
    RECEIVE: 'RECEIVE',
    EDITED: 'EDITED'
  };
  
  export const requestMessage = message => ({
    type: ChatActionTypes.REQUEST,
    message
  });
  export const receiveMessages = messages => ({
    type: ChatActionTypes.RECEIVE,
    messages
  });
  export const addedMessage = message => ({
    type: ChatActionTypes.ADDED,
    message
  });
  export const editedMessage = message => ({
    type: ChatActionTypes.EDITED,
    message
  });
  export const deletedMessage = id => ({ type: ChatActionTypes.DELETED, id });
  
import { addedMessage } from "./actions";

export function addMessage(message) {
  // Thunk middleware knows how to handle functions.
  // It passes the dispatch method as an argument to the function,
  // thus making it able to dispatch actions itself.

  return function(dispatch) {
    // First dispatch: the app state is updated to inform
    // that the API call is starting.

    dispatch(addedMessage(message))

    // The function called by the thunk middleware can return a value,
    // that is passed on as the return value of the dispatch method.

    // In this case, we return a promise to wait for.
    // This is not required by thunk middleware, but it is convenient for us.
    // const createdBy = localStorage.getItem('userId') || 'none';

    // return api
    //   .post(articleUrl, {...article, topic, createdBy})
    //   .subscribe(data => dispatch(addedMessage(data)), handleError);
  };
}


import {
  RECEIVE_CONVERSATIONS,
  START_LOADING_INDEX,
} from 'actions/conversation_list_actions';

import { 
  RECEIVE_DETAILS,
  START_LOADING_DETAILS,
} from 'actions/conversation_actions';


const initialState = {
  indexLoading: true,
  detailLoading: true
};

const loadingReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CONVERSATIONS:
      return Object.assign({}, state, { indexLoading: false });
    case RECEIVE_DETAILS:
      return Object.assign({}, state, { detailLoading: false });
    case START_LOADING_INDEX:
      return Object.assign({}, state, { indexLoading: true });
    case START_LOADING_DETAILS:
      return Object.assign({}, state, { detailLoading: true });
    default:
      return state;
  }
};

export default loadingReducer;
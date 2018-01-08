import * as APIUtil from 'util/session_api_util';
import { receiveConversations } from 'actions/conversation_list_actions';
import { clearMembers, receiveMessages } from 'actions/conversation_actions';
import { clearUserSearchResults, clearUserSelections } from 'actions/user_actions';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
// export const RECEIVE_PROFILE_PIC = 'RECEIVE_PROFILE_PIC';

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const signup = formUser => dispatch => (
  APIUtil.signup(formUser).then(user => (
    dispatch(receiveCurrentUser(user))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const demoSignup = formGuest => dispatch => (
  APIUtil.demoSignup(formGuest).then(guest => (
    dispatch(receiveCurrentUser(guest))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const login = formUser => dispatch => (
  APIUtil.login(formUser).then(user => (
    dispatch(receiveCurrentUser(user))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const logout = () => dispatch => (
  APIUtil.logout().then(user => {
    dispatch(receiveCurrentUser(null));
    dispatch(receiveConversations([]));
    dispatch(clearMembers());
    dispatch(receiveMessages(null));
    dispatch(clearUserSearchResults());
    dispatch(clearUserSelections());
  })
);

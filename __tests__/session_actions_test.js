import * as sessionActions from 'actions/session_actions';

export const signup = formUser => dispatch => (
  APIUtil.signup(formUser).then(user => (
    dispatch(receiveCurrentUser(user))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

describe('sessionActions', () => {
  it('returns a user on signup', () => {
    const user = 'test';
    const expectedAction = {
      user,
      type: sessionActions.RECEIVE_CURRENT_USER
    }
    expect(sessionActions.signup(user)).toEqual(expectedAction)
  })
})
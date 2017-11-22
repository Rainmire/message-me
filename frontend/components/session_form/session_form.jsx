import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display_name: '',
      password: '',
      email: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.displayNameForm = this.displayNameForm.bind(this);
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.loggedIn) {
  //     this.props.history.push('/conversations');
  //   }
  // }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm(user);
  }

  navLink() {
    if (this.props.formType === 'login') {
      return <p>New user? <Link to="/signup">Sign up</Link> instead</p>;
    } else {
      return <p>Returning user? <Link to="/login">Log in</Link> instead</p>;
    }
  }

  welcomeText() {
    if (this.props.formType === 'login') {
      return <h2>Sign in to get started</h2>;
    } else {
      return <h2>Create a new account</h2>;
    }
  }

  displayNameForm() {
    if (this.props.formType === 'signup') {
      return (
        <label>Display Name:
          <input type="text"
            value={this.state.display_name}
            onChange={this.update('display_name')}
            className="login-input"
          />
        <br/>
        </label>
      );
    }
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {

    return (
      <div className="login-form-container">
        <h1>Message Me!</h1>
        {this.welcomeText()}

        <form onSubmit={this.handleSubmit} className="login-form-box">
          <br/>
          <div className="login-form">
            <br/>
            {this.displayNameForm()}
            <label>Email:
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="login-input"
              />
            </label>
            <br/>
            <label>Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            </label>
            <br/>
            <input type="submit" value="Submit" />
          </div>
        </form>
        {this.navLink()}
        {this.renderErrors()}
      </div>
    );
  }
}

export default withRouter(SessionForm);

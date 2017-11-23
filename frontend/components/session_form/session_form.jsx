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
      return <h2 className="navlink-text"><span>New user? </span><Link className="navlink-link" to="/signup">Sign up</Link><span> instead</span></h2>;
    } else {
      return <h2 className="navlink-text"><span>Returning user? </span><Link className="navlink-link" to="/login">Log in</Link><span> instead</span></h2>;
    }
  }

  welcomeText() {
    if (this.props.formType === 'login') {
      return <h2 className="welcome-text">Sign in to get started.</h2>;
    } else {
      return <h2 className="welcome-text">Create a new account.</h2>;
    }
  }

  lineBreak() {
    return <br/>;
  }

  displayNameForm() {
    if (this.props.formType === 'signup') {
      this.lineBreak();
      return (
        <input type="text"
          value={this.state.display_name}
          onChange={this.update('display_name')}
          className="login-input"
          placeholder="Display Name"
        />
      );
    }
  }

  submitButton() {
    if (this.props.formType === 'login') {
      return <input className="login-input session-submit" type="submit" value="Sign In" />;
    } else {
      return <input className="login-input session-submit" type="submit" value="Sign Up" />;
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
      <div className="session-form-container">
        <div className="login-form-container">
          <img />
          <h1 className="message-me">Message Me!</h1>
          {this.welcomeText()}

          <form onSubmit={this.handleSubmit} className="login-form-box">
            <div className="login-form">
              {this.displayNameForm()}
              <br/>
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="login-input"
                placeholder="Email"
              />
              <br/>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
                placeholder="Password"
              />
              <br/>
              {this.submitButton()}
            </div>
          </form>
          {this.navLink()}

          {this.renderErrors()}
        </div>
        <img className="image-container" src="/assets/session_splash.jpg"/>
      </div>
    );
  }
}

export default withRouter(SessionForm);

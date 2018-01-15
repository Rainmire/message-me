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
    this.demoUser = this.demoUser.bind(this);
  }

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

  demoUser(e) {
    e.preventDefault();
    const demoUser = "Guest".concat(Math.round(10000* Math.random(0,1)));
    const demoEmail = demoUser.concat("@email.com");
    this.props.demoSignup(
      {
        display_name: demoUser,
        password: "password",
        email: demoEmail
      }
    );
  }

  renderErrors() {
    return(
      <ul className="session-errors">
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
    <div className="session-page">
      <div className="session-form-container">
        <div className="login-form-container">
          <img className="logo" src="https://res.cloudinary.com/rainmire/image/upload/v1511401475/message-me/logo_vqkrai.png"/>
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
              <button className="login-input session-submit demo-submit" onClick={this.demoUser}>Demo User</button>
            </div>
          </form>
          {this.navLink()}

          {this.renderErrors()}
        </div>
        <img className="session-splash" src="https://res.cloudinary.com/rainmire/image/upload/v1511401468/message-me/session_splash_y0i6kw.jpg"/>
      </div>
      <div className="footer">
        <a href="https://github.com/Rainmire" target="_blank">
          Github
          <i className="fa fa-github" aria-hidden="true"></i>
        </a>
        <a href="https://www.linkedin.com/in/qiumin-yin/" target="_blank">
          LinkedIn
          <i className="fa fa-linkedin-square" aria-hidden="true"></i>
        </a>
      </div>
    </div>
    );
  }
}

export default withRouter(SessionForm);

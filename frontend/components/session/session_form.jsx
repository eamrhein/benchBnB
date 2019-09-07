/* eslint-disable react/prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { submitForm } = this.props;
    const user = { ...this.state };
    submitForm(user);
    this.props.history.push('/');
  }

  // eslint-disable-next-line class-methods-use-this
  handleUpdate(formField) {
    return (e) => this.setState({
      [formField]: e.currentTarget.value,
    });
  }

  render() {
    const { formType, link } = this.props;
    const { username, password } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <span>
            Please {formType} or { link } 
          </span>
          <div>
            <br />
            <label>
              Username:
              <input
                type="text"
                value={username}
                onChange={this.handleUpdate('username')}
              />
            </label>
            <br />
            <label>
              Password:
              <input
                type="password"
                value={password}
                onChange={this.handleUpdate('password')}
              />
            </label>
            <br />
            <input type="submit" value={formType} />
          </div>
        </form>
      </div>
    );
  }
}

export default SessionForm;

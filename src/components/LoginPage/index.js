import {Component} from 'react'

import './index.css'

const details = {
  mailId: 'tejaswinithanubotla@gmail.com',
  password: '123456',
}

class LoginPage extends Component {
  state = {mailId: '', password: ''}

  onClickLogin = event => {
    event.preventDefault()
    const {mailId, password} = this.state
    const {history} = this.props
    if (mailId === details.mailId && password === details.password) {
      history.replace('/')
    }
  }

  onChangeMailId = event => {
    this.setState({mailId: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {mailId, password} = this.state
    return (
      <div className="login-container">
        <div className="outer-layer-bg">
          <div className="inner-layer-bg">
            <form onSubmit={this.onClickLogin} className="login-form">
              <label className="label-text" htmlFor="email">
                EMAIL ID
              </label>
              <input
                value={mailId}
                placeholder="Enter mail Id"
                className="input-field"
                id="email"
                type="email"
                onChange={this.onChangeMailId}
              />
              <label className="label-text" htmlFor="password">
                PASSWORD
              </label>
              <input
                value={password}
                placeholder="Enter password"
                className="input-field"
                id="password"
                type="password"
                onChange={this.onChangePassword}
              />
              <button className="login-button" type="submit">
                LOGIN
              </button>
            </form>
          </div>
        </div>
        <div className="logo-display-container">
          <img
            className="logo-image"
            src="https://res.cloudinary.com/dqqijdyjr/image/upload/v1715402383/fzof4avfg32a9lisdjwo.png"
            alt="logo"
          />
          <div>
            <h1 className="website-name">TechTop</h1>
            <p className="tag-line">prove your excellence</p>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginPage

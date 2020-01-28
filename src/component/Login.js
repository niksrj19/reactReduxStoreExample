import React from "react";
import { connect } from "react-redux";
import LoginAction from "./reduxstore/LoginAction";
import AddUser from "./AddUser";
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  isLoginForm = stat => {
    //  console.log(stat);
    this.props.isLogin(stat);
  };

  render() {
    return (
      <div>
        <input
          type="text"
          name="username"
          //value={this.state.username}
          onChange={event =>
            this.setState({ [event.target.name]: event.target.value })
          }
        />
        <input
          type="text"
          name="password"
          //value={this.state.password}
          onChange={event =>
            this.setState({ [event.target.name]: event.target.value })
          }
        />
        <button onClick={() => this.isLoginForm(this.state)}>Submit</button>

        {this.props.isLoggedIn ? <AddUser /> : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state });
const mapDispatchToProps = dispatch => {
  return {
    isLogin: user => dispatch(LoginAction(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

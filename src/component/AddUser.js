import React from "react";
import { connect } from "react-redux";
import addUsers from "./reduxstore/AddUsers";
import deleteFromLast from "./reduxstore/DeleteFromLast";
import deleteFromName from "./reduxstore/DeleteFromName";
import "../css/styles.css";
class AddUser extends React.Component {
  render() {
    return (
      <div>
        <input
          type="text"
          name="username"
          onChange={event =>
            this.setState({ [event.target.name]: event.target.value })
          }
        />
        <button onClick={() => this.props.addUser(this.state)}>Add</button>
        <button onClick={() => this.props.deletefromlast()}>
          Delete User from last
        </button>
        <input
          type="text"
          name="deletename"
          onChange={event =>
            this.setState({ [event.target.name]: event.target.value })
          }
        />
        <button
          onClick={() => {
            this.props.deletefromname(this.state);
          }}
        >
          Delete User from name
        </button>

        {this.props.usersDetails != null
          ? this.props.usersDetails.map((items, id) => {
              //console.log(this.props.usersDetails);
              return (
                <div key={id} className="flexContainer">
                  <div>{items.username}</div>
                  <div className="delete">X</div>
                </div>
              );
            })
          : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => {
  return {
    deletefromlast: () => dispatch(deleteFromLast()),
    addUser: user => dispatch(addUsers(user)),
    deletefromname: user => dispatch(deleteFromName(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddUser);

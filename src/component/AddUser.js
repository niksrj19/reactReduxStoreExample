import React from "react";
import { connect } from "react-redux";
import addUsers from "./reduxstore/AddUsers";
import deleteFromLast from "./reduxstore/DeleteFromLast";
import deleteFromName from "./reduxstore/DeleteFromName";
import editUser from "./reduxstore/EditUser";
import "../css/styles.css";
class AddUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
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

        <button
          onClick={() => {
            if (
              this.state !== null &&
              this.state.username !== undefined &&
              this.state.username !== ""
            )
              this.props.addUser(this.state);
          }}
        >
          Add
        </button>
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
            //console.log(this.state);
            if (
              this.state !== null &&
              this.state.deletename !== undefined &&
              this.state.deletename !== ""
            )
              this.props.deletefromname(this.state);
          }}
        >
          Delete User from name
        </button>

        {this.props.usersDetails != null
          ? this.props.usersDetails.map((items, id) => {
              //console.log("ITEM=", items, id);
              return (
                <div key={id} className="flexContainer">
                  <div>{items.username}</div>
                  <button
                    onClick={() => this.props.edituser({ id })}
                    className="delete"
                  >
                    X
                  </button>
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
    deletefromname: user => dispatch(deleteFromName(user)),
    edituser: id => dispatch(editUser(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddUser);

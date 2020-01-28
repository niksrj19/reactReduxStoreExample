const inititalState = {
  username: "Nitesh",
  password: "Nitesh",
  isLoggedIn: false,
  usersDetails: []
};

function ReduxReducer(state = inititalState, action) {
  switch (action.type) {
    case "LOGIN": {
      //  console.log(state, inititalState);
      if (
        state.username === "Nitesh" /*action.payload.username && */ &&
        state.password === "Nitesh" /*action.payload.password */
      ) {
        const returnState = {
          ...state,
          isLoggedIn: true
        };
        // console.log(returnState);
        return returnState;
      } else {
        return { ...state, isLoggedIn: false };
      }
    }
    case "ADD_USER": {
      const returnState = JSON.parse(JSON.stringify(state));
      returnState.usersDetails.push(action.payload);
      // console.log(returnState);
      return returnState;
    }

    case "DEL_FRM_LST": {
      const returnState = JSON.parse(JSON.stringify(state));
      console.log(returnState);
      returnState.usersDetails.pop();

      return returnState;
    }

    case "DEL_FRM_NAME": {
      const returnState = JSON.parse(JSON.stringify(state));

      const userList = JSON.parse(JSON.stringify(returnState.usersDetails));
      if (
        userList.find(
          item =>
            item.username.toUpperCase() ===
            action.payload.deletename.toUpperCase()
        )
      ) {
        const filteruserlist = userList.filter(
          item =>
            item.username.toUpperCase() !==
            action.payload.deletename.toUpperCase()
        );

        // console.log(filteruserlist);
        const returnFilterState = {
          ...returnState,
          usersDetails: filteruserlist
        };

        return returnFilterState;
      } else {
        return returnState;
      }
    }

    case "EDIT_USER": {
      const returnState = JSON.parse(JSON.stringify(state));

      const userList = JSON.parse(JSON.stringify(returnState.usersDetails));

      return returnState;
    }

    default:
      return state;
  }
}

export default ReduxReducer;

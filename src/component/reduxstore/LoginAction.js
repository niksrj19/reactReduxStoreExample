export default function LoginAction(user) {
  // console.log("Action creator=", user);
  return {
    type: "LOGIN",
    payload: user
  };
}

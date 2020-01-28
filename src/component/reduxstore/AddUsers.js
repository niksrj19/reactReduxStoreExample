export default function addUsers(user) {
  console.log("Add Users=", user);
  return {
    type: "ADD_USER",
    payload: user
  };
}

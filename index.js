function signup(userName) {
  const registeredUsers = ["jay", "sonu", "monu"];

  if (registeredUsers.includes(userName)) {
    return "User Already Registered, Please Login";
  } else {
    registeredUsers.push(userName);
    return "Signup Successful, Please Login";
  }
}

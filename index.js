function signup(userName) {
  const registeredUsers = ["jay", "sonu", "monu"];

  if (registeredUsers.includes(userName)) {
    return "User Already Registered, Please Login";
  } else {
    registeredUsers.push(userName);
    return "Signup Successful, Please Login";
  }
}

function login(userName, password) {
  const registeredUsers = ["jay", "sonu", "monu"];
  const correctPassword = "Emp@123";

  if (!registeredUsers.includes(userName)) {
    return "User Not Found, Please Signup";
  }

  if (password === correctPassword) {
    return "Login Successful...";
  } else {
    return "Wrong Password....";
  }
}

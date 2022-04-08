const users = [{
  "username": "admin",
  "password": "admin",
  "loggedIn": false,
  "identityProvider":"ffqs-WRsat",
  "isActiveNow": true,
}];

const userSessions = [];

function getSessionTemplate(isActiveNow,identityProvider,username,password) {
  return {
    "username": username,
    "password": password,
    "loggedIn": false,
    "identityProvider":identityProvider,
    "isActiveNow": isActiveNow,
  };
}

function addUser(username, password, identityProvider) {
  var userCheck=false;
  this.users.filter((user) => {
    if(user.username === username) {
      userCheck= true;
    }
  });
  if(userCheck === false){
      this.users.push(getSessionTemplate(true,identityProvider,username,password));
      return false;
  }else{
    return true;
  }
 
}

function deleteUser(username) {
  const filteredUsers = this.users.filter((user) => {
    if(user.username !== username) {
      return true;
    }
  });
  this.users = filteredUsers;
}

function getUsers() {
  return this.users;
}

function getUser(username) {
 return this.users.filter(user => user.username === username);
}

function login(username, password) {
  var loggedin = false;
  for(let user of this.users) {
    if(user.username === username && user.password === password) {
      loggedin = true;
      user.loggedIn = true;
      this.userSessions.push(user);
      break;
    }else{
      loggedin = false;
    }
  }
  return loggedin;
}

function logout(username) {
  for(let user of this.users) {
    if(user.username === username) {
      user.loggedIn = false;
    }
  }
}


module.exports = {
  addUser, deleteUser, login, logout, getUsers, users, getSessionTemplate,getUser,
  userSessions, 
  
};
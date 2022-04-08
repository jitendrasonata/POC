const express = require('express');
const router = express.Router();
const utils = require('../util/utils');
const { v4: uuidv4 } = require('uuid');

router.post('/registerUser', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const identityProvider = uuidv4();
  const adduserData=utils.addUser(username, password, identityProvider);
  if(!adduserData){
    res.json({ "message": 'User is registered successfully' });
  }else{
    res.status(400).send({
      status: 400,
      message: "User Already exist"
    });
  }
 
});

router.get('/users', (req, res) => {
  res.json(utils.getUsers());
});

router.delete('/delete/:username', async (req, res) => {
  const username = req.params.username;
  const user = utils.getUser(username);
  utils.deleteUser(username);
  if (!user.length) {
    return res.status(404).send({
      status: 404,
      message: "User not found"
    });
  }else{
    res.json({ "message": "User is deleted successfully" });
  }
});

router.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const login = utils.login(username, password);
  if (login) {
    res.status(200).send({
      status: 200,
      message: "User Successfully Logged in"
    });
  } else {
    res.status(400).send({
      status: 400,
      message: "Invalid Username or Password"
    });
  }

});

router.post('/logout', (req, res) => {
  const username = req.body.username;
  utils.logout(username);
  res.json({ "message": "User has logged out successfully" });
});

module.exports = router;
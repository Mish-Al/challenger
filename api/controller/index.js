const express = require("express");
const bodyParser = require("body-parser");
const {verifyAToken} = require('../middleware/AuthenticateUser')
const routes = express.Router();
//import all model's objects
const {users, books, authors, orders } = require("../model");

//Users router
routes.get("/users", (req, res) => {
  users.fetchUsers(req, res);
});
routes.get("/user/:id", (req, res) => {
  users.fetchUser(req, res);
});
routes.post("/register", bodyParser.json(), (req, res) => {
  users.register(req, res);
});
routes.put("/user/:id", bodyParser.json(), (req, res) => {
  users.updateUser(req, res);
});
routes.patch("/user/:id", bodyParser.json(), (req, res) => { 
  users.updateUser(req, res);
});
routes.delete("/user/:id", (req, res) => {
  users.deleteUser(req, res);
});
routes.post('/login',
bodyParser.json(), (req, res)=>{
    users.login(req, res)
});
// book's router
routes.get('/books', verifyAToken,)

module.exports = {
    express,
    routes,
    verifyAToken
}



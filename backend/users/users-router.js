const router = require("express").Router();

const Users = require("./users-model.js");
const restricted = require("../users/restricted.js");

router.get("/", restricted, (req, res) => {
  Users.find()
    .then((users) => {
      res.json({ users, loggedInUser: req.user.username });
    })
    .catch((err) => res.send({ message: "This get is not working" }));
});

module.exports = router;

const express = require("express");
const router = express();
const Post_route = require("../controllers/post_route");
const Get_route = require("../controllers/get_route");
// const UserAuth = require("../controllers/User_Auth");

router.get("/getdata", Get_route.getdata);
router.post("/signup", Post_route.signup);

// Define a route for user authentication
router.post("/api/authenticate", Get_route.authenticate);

module.exports = router;
const express = require("express");
const router = express.Router();
const passport = require("passport");

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/failed" }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect("/creator");
  }
);

router.get("/failed", (req, res) => {
  res.send("failed");
});

router.get("/google/logout", (req, res) => {
  req.session = null;
  req.logOut();
  res.redirect("/");
});

module.exports = router;

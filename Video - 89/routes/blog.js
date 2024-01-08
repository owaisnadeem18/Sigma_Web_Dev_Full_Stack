const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
  console.log("Time: ", Date.now());
  next();
});
// define the home page route
router.get("/", (req, res) => {
  res.send("Blogs home page");
});
// define the about route
router.get("/about", (req, res) => {
  res.send("About birds");
});

// Use of slugs for the better understanding

router.get("/blogPost/:slug", (req, res) => {
  res.send(`fetch The blogger for blogs ${req.params.slug}`);
});

module.exports = router;

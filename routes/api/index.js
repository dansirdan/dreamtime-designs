const router = require("express").Router();
const emailRoute = require("./email");
const artRoutes = require("./art");

// art routes
router.use("/art", artRoutes);

// send email route
router.use("/sendemail", emailRoute);

module.exports = router;

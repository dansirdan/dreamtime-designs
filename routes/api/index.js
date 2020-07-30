const router = require("express").Router();
const artRoutes = require("./art");

// art routes
router.use("/art", artRoutes);

module.exports = router;

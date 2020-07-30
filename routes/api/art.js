const router = require("express").Router();
const artController = require("../../controllers/artController");

// Matches with "/api/art"
router.route("/")
  .get(artController.findAll)
  .post(artController.create);

// Matches with "/api/art/:id"
router
  .route("/:id")
  .get(artController.findById)
  .put(artController.update)
  .delete(artController.remove);

module.exports = router;

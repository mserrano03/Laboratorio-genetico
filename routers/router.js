const express = require("express");
const router = express.Router();
const MutationController = require("../core/controllers/Mutation.controller");

router.post("/mutation/", MutationController.hasMutation);
router.get("/mutation/", MutationController.getMutation);
router.get("/stats/", MutationController.getMutationReport);

module.exports = router;
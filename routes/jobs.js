const express = require("express");

const router = express.Router();

const {
  getAllJobs,
  getJob,
  createJob,
  updateJobs,
  deleteJob,
} = require("../controllers/jobs");

router.route("/").post(createJob).get(getAllJobs);
router.route("/:id").get(getJob).delete(deleteJob).patch(updateJobs);

module.exports = router;

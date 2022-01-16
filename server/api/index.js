const router = require("express").Router();

router.use("/clients", require("./clients"));
router.use("/trips", require("./trips"));
router.use("/destinations", require("./destinations"));

module.exports = router;

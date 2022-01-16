const router = require("express").Router();
const Destination  = require ("../db/models/Destination");

// GET /api/destinations
router.get("/", async (req, res, next) => {
  try {
    const  data  = await Destination.findAll({
      order: [
        ['name', 'ASC']
      ],
    });
    res.send (data);
  } catch (error) {
    next(error);
  }
});

module.exports = router;

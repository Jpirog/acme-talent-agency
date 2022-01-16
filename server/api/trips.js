const router = require("express").Router();
const Trip = require ("../db/models/Trip");
const moment = require('moment');

// GET /api/trips
router.get("/", async (req, res, next) => {
  try {
    const { data } = await Trip.findAll({
      order: [
        ['tripDate', 'DESC']
      ]
    });
    res.send (data);
  } catch (error) {
    next(error);
  }
});

// GET /api/trips/getrecenttrips
router.get("/getrecenttrips", async (req, res, next) => {
  try {
    const data = await Trip.findAll({
      where: {
        tripDate: {
          $gte: moment().subtract(7, 'days').toDate()
        }
      },
      order: [
        ['tripDate', 'DESC']
      ]
    });
    res.send (data);
  } catch (error) {
    next(error);
  }
});

// // POST /api/movies
// router.post("/", async (req, res, next) => {
//   try {
//     res.send(await Movie.createRandom());
//   } catch (ex) {
//     next(ex);
//   }
// });

// // DELETE /api/movies/:id
// router.delete("/:id", async (req, res, next) => {
//   try {
//     const movie = await Movie.findByPk(req.params.id);
//     await movie.destroy();
//     res.sendStatus(204);
//   } catch (ex) {
//     next(ex);
//   }
// });

// // PUT /api/movies/:id
// router.put("/:id", async (req, res, next) => {
//   try {
//     const movie = await Movie.findByPk(req.params.id);
//     await movie.updateRating(req.body.method);
//     res.send(movie);
//   } catch (ex) {
//     next(ex);
//   }
// });

module.exports = router;

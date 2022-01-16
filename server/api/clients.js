const router = require("express").Router();
const Client  = require ("../db/models/Client");
const Trip  = require ("../db/models/Trip");

// GET /api/clients
router.get("/", async (req, res, next) => {
  try {
    const  data  = await Client.findAll({
      order: [
        ['name', 'ASC']
      ],
      include: {model: Trip}
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

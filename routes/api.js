const router = require("express").Router();
const StationController = require("../controllers/StationController");

router
  .route("/")
  .get(StationController.GetAllWaterStations)
  .post(StationController.CreateNewWaterStation);

router
  .route("/station/:id")
  .put(StationController.UpdateWaterStation)
  .delete(StationController.DeleteWaterStation)
  .get(StationController.GetSingleWaterStation);

module.exports = router;

const router = require("express").Router();
const axios = require("axios");
const { check, validationResult } = require("express-validator");

router.route("/").get((req, res) => {
  res.render("index");
});

router.get("/add", (req, res, next) => {
  res.render("add");
});
router.post(
  "/add/:action",
  [
    check("stationId").not().isEmpty().withMessage("Station ID is required"),
    check("Lat").not().isEmpty().withMessage("Latitude is required"),
    check("Long").not().isEmpty().withMessage("Longitude is required"),
    check("StationType")
      .not()
      .isEmpty()
      .withMessage("Please select station type"),
    check("Capacity")
      .not()
      .isEmpty()
      .withMessage("Station capacity is required"),
  ],
  async (req, res, next) => {
    const { action } = req.params;
    const { stationId, Lat, Long, StationType, Capacity } = req.body;
    const data = {
      stationId,
      Lat,
      Long,
      StationType,
      Capacity,
    };
    const errors = validationResult(req).array();
    if (errors.length > 0) {
      if (action === "new") {
        res.render("add", { errors, data });
      } else {
        res.render("single", { errors, data });
      }
    } else {
      if (action === "new") {
        const response = await axios.post("http://localhost:3002/api/", data);
        res.render("add", { message: response.data.message });
      } else if (action === "update") {
        const updateResponse = await axios.put(
          `http://localhost:3002/api/station/${stationId}`,
          data
        );
        res.redirect(`/single/${stationId}`);
      } else {
      }
    }
  }
);

router.get("/single/:stationId", async (req, res, next) => {
  const { stationId } = req.params;
  const response = await axios.get(
    `http://localhost:3002/api/station/${stationId}`
  );
  const { data } = response;
  const singleStation = data.data;
  res.render("single", { stationId, singleStation });
});

router.get("/delete/:stationId", async (req, res, next) => {
  try {
    const { stationId } = req.params;
    const deleteResponse = await axios.delete(
      `http://localhost:3002/api/station/${stationId}`
    );
    const { data } = deleteResponse;
    res.render("single", { message: data.message });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;

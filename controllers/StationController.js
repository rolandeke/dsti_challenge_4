const WaterStation = require("../models/Station");

exports.GetAllWaterStations = async (req, res, next) => {
  try {
    //get all water station from database
    const waterStations = await WaterStation.find();

    ///send response to user with all water Stations
    return res.status(200).json({
      status: 200,
      data: waterStations,
    });
  } catch (err) {
    return res.status(500).json({
      status: 500,
      message: err.message,
      data: null,
    });
  }
};

exports.CreateNewWaterStation = async (req, res, next) => {
  try {
    //get data from request body
    const { stationId, Lat, Long, StationType, Capacity } = req.body;

    //check if station exists
    const stationExist = await WaterStation.findOne({ stationId: stationId });

    if (!stationExist) {
      //TODO:: Validate data before saving to database
      const station = {
        stationId,
        Location: {
          type: "Point",
          coordinates: [Lat, Long],
        },
        StationType,
        Capacity,
      };

      //save water station
      const savedStation = await WaterStation.create(station);

      //send response to user with saved water station
      res.status(200).json({
        status: 200,
        message: "Successfully created new water station",
        data: savedStation,
      });
    } else {
      ///station ID already exist
      res.json({
        status: 401,
        message: "Station ID already Exists",
        data: null,
      });
    }
  } catch (err) {
    res.status(500).json({
      status: 500,
      message: err.message,
      data: null,
    });
  }
};

exports.UpdateWaterStation = async (req, res, next) => {
  try {
    //get ID from url
    const { id } = req.params;

    //get data from request body
    const { stationId, Lat, Long, StationType, Capacity } = req.body;

    //Check if station ID exist in the database
    const stationExist = await WaterStation.findOne({ stationId: id });
    if (stationExist) {
      //TODO::Validate Data before saving to database

      //create an update object
      const updateDocument = {
        stationId,
        Location: {
          type: "Point",
          coordinates: [Lat, Long],
        },
        StationType,
        Capacity,
      };

      //update water staion with the ID
      const updatedStation = await WaterStation.updateOne(
        { stationId: id },
        updateDocument
      );

      //send response to user with upated water station
      res.status(200).json({
        status: 200,
        message: `Successfully updated station with ID: ${id}`,
        data: updatedStation,
      });
    } else {
      res.status(401).json({
        status: 401,
        message: `Water station with ID: ${id}, does not exist`,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: 500,
      message: err.message,
    });
  }
};

exports.DeleteWaterStation = async (req, res, next) => {
  try {
    //Get the station ID from the url
    const { id } = req.params;

    //Check if station ID exist before deleteing
    const stationExist = await WaterStation.findOne({ stationId: id });
    if (stationExist) {
      //Delete water station
      const deletedStation = await WaterStation.deleteOne({ stationId: id });

      //send response to the user with the deleted water station
      res.status(200).json({
        status: 200,
        message: `Successfully Delete station with ID: ${id}`,
        data: deletedStation,
      });
    } else {
      res.status(401).json({
        status: 401,
        message: `Water station with ID: ${id}, does not exist`,
      });
    }
  } catch (err) {
    res.json({
      status: 500,
      message: err.message,
      data: null,
    });
  }
};

exports.GetSingleWaterStation = async (req, res, next) => {
  try {
    //get ID from url
    const { id } = req.params;

    //check if station exists
    const stationExist = await WaterStation.findOne({ stationId: id });

    if (stationExist) {
      //send response to user with existing station
      res.status(200).json({
        status: 200,
        data: stationExist,
      });
    } else {
      res.status(401).json({
        status: 401,
        message: `Water station with ID: ${id}, does not exist`,
      });
    }
  } catch (err) {
    res.status(500).json({
      status: 500,
      message: err.message,
    });
  }
};

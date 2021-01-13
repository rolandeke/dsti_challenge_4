const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;

const StationSchma = new Schema({
  stationId: {
    type: String,
    required: true,
    trim: true,
    unique: [true, "No duplicate ID allowed"],
  },
  Location: {
    type: {
      type: String,
      enum: ["Point"],
    },
    coordinates: {
      type: [Number],
    },
  },
  StationType: {
    type: String,
    required: true,
  },
  Capacity: {
    type: Number,
    required: true,
  },
  DateAdded: {
    type: Date,
    default: Date.now,
  },
});

// StationSchma.pre("save", async (next) => {
//   this.Location = {
//     type: "Point",
//     coordinates: [this.Lat, this.Long],
//   };
//   console.log(this.Location);
//   this.Lat = undefined;
//   this.Long = undefined;
//   next();
// });

module.exports = mongoose.model("WaterStations", StationSchma);

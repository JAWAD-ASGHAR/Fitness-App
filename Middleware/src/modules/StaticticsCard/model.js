const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StaticticsCardSchema = new Schema(
  {
    UserName: {
      type: String,
      required: true,
    },
    MetersWalkedVal: {
      type: String,
      required: true,
    },
    MetersWalkedImp: {
      type: String,
      required: true,
    },
    AchievedVal: {
      type: String,
      required: true,
    },
    AchievedImp: {
      type: String,
      required: true,
    },
    CalsBurnedVal: {
      type: String,
      required: true,
    },
    CalsBurnedImp: {
      type: String,
      required: true,
    },
    WeightsKGVal: {
      type: String,
      required: true,
    },
    WeightsKGImp: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("staticticscard", StaticticsCardSchema);

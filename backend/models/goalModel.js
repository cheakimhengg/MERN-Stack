const mongoose = require("mongoose");

const goalScema = mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, "Text is required"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Goal", goalScema);

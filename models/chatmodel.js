const mongoose = require("mongoose");
const chatSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
  },
  { collection: "conversations", timestamps: true }
);
module.exports= mongoose.model("Chat",chatSchema);
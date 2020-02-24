const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true,
      unique: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    avatar: {
      type: String,
      required: false
    },
    followers:[{ type: Schema.Types.ObjectId, ref: "Users" }],
    following:[{ type: Schema.Types.ObjectId, ref: "Users" }],
    Receipes: [{ type: Schema.Types.ObjectId, ref: "Receipes" }]
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

module.exports = mongoose.model("users", User);

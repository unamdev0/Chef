const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NewReceipe = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    imageLink: {
      type: String,
      required: true,
      unique: true
    },
    instructions:[],
    ingredients:[],
    userId:{
        type:Schema.Types.ObjectId,
        ref:'User'
    }
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

module.exports=mongoose.model('NewReceipe',NewReceipe)
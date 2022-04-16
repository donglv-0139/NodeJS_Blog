const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const slug = require("mongoose-slug-generator"); //xu ly duong dan slug

mongoose.plugin(slug);

const Course = new Schema(
  {
    name: { type: String, default: "", required: true },
    description: { type: String, maxlength: 700 },
    image: { type: String },
    videoId: { type: String, required: true },
    slug: { type: String, slug: "name", unique: true },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("courses", Course);

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const slug = require("mongoose-slug-generator"); //xử lý tự sinh đường dẫn, slug
var mongooseDelete = require("mongoose-delete");

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

// Add plugin
mongoose.plugin(slug);
Course.plugin(mongooseDelete, { deletedAt: true, overrideMethods: "all" });

module.exports = mongoose.model("courses", Course);

// file này là công cụ xử lý truyền dữ liệu trong controller ra view
// cần toObject
module.exports = {
  multipleMongooseToObject: function (mongooseArrays) {
    return mongooseArrays.map((mongooseArray) => mongooseArray.toObject());
  },
  mongooseToObject: function (mongoose) {
    return mongoose ? mongoose.toObject() : mongoose;
  },
};

/**
 * Created by Administrator on 2018/4/12 0012.
 */
var mongoose =require("mongoose");
//结构模型
var Schema = mongoose.Schema;

var productSchema =new Schema({
  "productName":String,
  "productId":String,
  "salePrice":Number,
  "productImage":String
});

//数据库名子是goods,
module.exports = mongoose.model("Good",productSchema);

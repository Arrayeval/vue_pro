/**
 * Created by Administrator on 2018/4/12 0012.
 */
var express = require("express");
var router =express.Router();
var mongoose =require('mongoose');

var Goods =require("../models/goods");
mongoose.connect("mongodb://127.0.0.1:27017/goods");

mongoose.connection.on("connected",function(){
  console.log("mongodb connect success");
});

mongoose.connection.on("error",function(){
  console.log("mongodb connect error");
});

mongoose.connection.on("disconnect",function(){
  console.log("disconnect");
});


router.get("/",function(req,res,next){
  //res.send("hello goods");
  Goods.find({},function(err,doc){
    if(err){
      res.json({
        status:"1",
        msg:err.message
      });
    }
    else{
      res.json({
        status:"0",
        msg:"",
        result:{
          count:doc.length,
          list:doc
        }
      })
    }
  });
});
module.exports = router;

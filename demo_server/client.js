let http =require("http");
let util = require("util");

http.get("http://news.baidu.com/widget?ajax=json&id=ad",function(res){
  let data ="";
  res.on("data",function(chunk){
    data +=chunk;
  });
  res.on("end",function(){
    let result =JSON.parse(data);

    console.log("result="+util.inspect(result));
  });
});

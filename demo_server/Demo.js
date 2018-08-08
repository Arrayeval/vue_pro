/**
 * Created by Administrator on 2018/4/9 0009.
 */
let user =require('./User');
console.log(`userName:${user.userName}`);

let http =require("http");
let url =require("url");
let util =require("util");
let fs = require("fs");

let server=http.createServer((req,res)=>{
  //res.statusCode = 200;
  //res.setHeader("Content-Type","text/plain;charset =utf-8");


  //console.log("url:"+req.url);
  //res.end(util.inspect(url.parse(req.url)));

  var pathname =url.parse(req.url).pathname;
  fs.readFile(pathname.substring(1),(err,data)=>{
    if(err){
      res.writeHead(404,{
        "Content-Type":'text/html'
      });
    }
    else{
      res.writeHead(200,{
        "Content-Type":'text/html'
      });
      res.write(data.toString());
    }
    res.end("sss");
  });
});




server.listen(3000,'127.0.0.1',()=>{
  console.log("服务器已经运行，请打开浏览，输入：http://127.0.0.1：3000/");
});

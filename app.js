const Koa = require("koa");
const views = require("koa-views");
const static = require("koa-static");
const router = require("./router");
const newsModel = require("./service/news")
const koaBody = require("koa-body");
let app = new Koa();

const server = require("http").createServer(app.callback());
const io = require("socket.io")(server);
app.use(views(__dirname+"/views",{extension:'pug'}));
app.use(static(__dirname+"/static"));
app.use(koaBody({
    multipart:true  //允许上传文件
}))
router(app);
io.on("connection",(socket)=>{
    console.log("有socket连接");
    socket.broadcast.emit("someOneIn","有人连接进来了;");
    // socket.on("testFn",function(data){
    //     console.log(data);
    //     // socket.emit("clientFn",data); //发送给一个用户
    //    setTimeout(() => {
    //      socket.broadcast.emit("clientFn",data); //广播给出了自己之外的所有用户；
    //    }, 2000);
       
    // })
    socket.on("addData",async function(data){
        socket.broadcast.emit("addInputData",data);
        let addMassage = await newsModel.addMassageData(data);
        // console.log(addMassage);
    })
})
server.listen(4000);
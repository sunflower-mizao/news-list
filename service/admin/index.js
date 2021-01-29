const fs = require("fs");
const mysql2 = require("mysql2");
const { deleteData } = require("../../controller/admin");
const connection = mysql2.createConnection({
    host:'localhost',
    user:'root',
    password:'123456',
    database:'js04'
})
module.exports = {
    async addData(request){
        let {title,type} = request.body;
        if(request.files.img.size>0){
            if(!fs.existsSync("static/uploads")){
                fs.mkdirSync("static/uploads");
            }
            let tempPath = request.files.img.path;
            fs.writeFileSync("static/uploads/"+request.files.img.name,fs.readFileSync(tempPath));
            let imgUrl = "/uploads/"+request.files.img.name;
            let newTime = new Date().getFullYear();
            const [rows] = await connection.promise().query("INSERT INTO news(title,imgUrl,`from`,newTime) VALUES (?,?,?,?)",[title,imgUrl,type,newTime]);
            console.log(rows);
            return rows;
        }
    },
    async getData(p,perPage){
        const [rows] = await connection.promise().query(`SELECT * FROM news LIMIT ${(p-1)*perPage},${perPage}`);
        // console.log(rows);
        return rows;
    },
    async getTotal(){
        const [rows] = await connection.promise().query(`SELECT * FROM news`);
        // console.log(rows);
        return rows.length;
    },
    async getTotalData(){
        const [rows] = await connection.promise().query(`SELECT * FROM news`);
        return rows;
    },
    async deleteData(id){
        const [rows] = await connection.promise().query(`DELETE FROM news WHERE id=?`,[id]);
        return rows;
    }
}
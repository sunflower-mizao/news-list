const mysql2 = require("mysql2");
const connection = mysql2.createConnection({
    host:'localhost',
    user:'root',
    password:'123456',
    database:'js04'
})
module.exports = {
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
    async massageData(){
        let [rows]  =  await connection.promise().query("SELECT * FROM chat");
        //  console.log(rows);
        return rows;
    },
    async addMassageData(data){
        let [rows] = await connection.promise().query("INSERT INTO chat(content) VALUES (?)",[data]);
        //  console.log(rows);
        return rows;
    }
    
}
const adminModel = require("../../service/admin")
module.exports = {
    async index(ctx){
        // ctx.body = "admin的主页";
        let p = parseInt(ctx.query.p) || 1;
        let perPage = 5;
        let newsData = await adminModel.getData(p,perPage);
        let totalCount = await adminModel.getTotal();
        let pCount = Math.ceil(totalCount / perPage);
        await ctx.render("./admin/admin.pug",{
            newsData,
            pCount,
            p
        })
        // await ctx.render("./admin/admin.pug");
    },
    async addData(ctx){
        // console.log(ctx.request.body);
        // console.log(ctx.request.files);
        let res = await adminModel.addData(ctx.request);
        let info;
        if(res.affectedRows>0){
            info = {
                info:"操作成功",
                status:1
            }
        }else{
            info = {
                info:"操作失败",
                status:0
            }
        }
        ctx.body = info;
        // await ctx.render("./admin/admin.pug");
    },
    async deleteData(ctx){
        let id = parseInt(ctx.query.id) || 1;
        let rows = await adminModel.deleteData(id);
        // console.log(rows);
        let resData;
        if(rows.affectedRows>0){
            resData = {
                info:"删除成功",
                status:1
            }
        }else{
            info = {
                info:"删除失败",
                status:0
            }
            
        }
        ctx.body = resData;
    }
}
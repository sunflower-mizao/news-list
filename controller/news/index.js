const newsModel = require("../../service/news")
module.exports = {
    async index(ctx){
        // console.log(ctx.query)
        let p = parseInt(ctx.query.p) || 1;
        let perPage = 5;
        // let pageCount = Math.ceil(JSON.parse(JSON.stringify(data)).length / perPage);
        // ctx.body = "新闻的主页";
        let newsData = await newsModel.getData(p,perPage);
        let totalCount = await newsModel.getTotal();
        let pCount = Math.ceil(totalCount / perPage);
        await ctx.render("./news/index.pug",{
            newsData,
            pCount,
            p
        })
    },
    async detail(ctx){
        // ctx.body = "新闻的详细页";
        let id = parseInt(ctx.query.id) || 1;
        let totalData = await newsModel.getTotalData();
        let detailData = totalData.filter(v=>v.id==id)[0];
        await ctx.render("./news/detail.pug",{
            detailData
        })
    }
}
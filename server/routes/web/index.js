/*
 * @Author: Latte
 * @Date: 2021-10-27 00:03:20
 * @LAstEditors: Latte
 * @LastEditTime: 2021-10-28 01:02:42
 * @FilePath: \server\routes\web\index.js
 */
module.exports = (app) => {
	const express = require("express");
	const mongoose = require("mongoose");
	const router = express.Router();
	const Category = mongoose.model("Category");
	const Article = mongoose.model("Article");

	/**
	 * 快速生成文章
	 */
	// router.get('/news/init', async(req,res) => {
	//   const parent = await Category.findOne({
	//     name: '新闻分类'
	//   })
	//   const cats = await Category.find().where({
	//     parent: parent
	//   }).lean()
	//   const newsTitles = ['抢盛典“X星球”专场门票，必得2000战令经验', '狄某有话说 |安琪拉：中路危险，草丛给我安全感', '王者荣耀×完美日记 峡谷四美眼影系列新品来啦', '王者联名好物11.11福利集合发车啦', '司马懿-暗渊魔法优化方向&amp;嫦娥-拒霜思后续制作方向沟通【老亚瑟的答疑时间】', '10月26日体验服停机更新公告', '10月25日全服不停机更新公告', '10月25日全服不停机更新公告', '10月25日英雄平衡性调整丨甄姬、张飞增强', '10月22日体验服停机更新公告', '积分夺宝券福利卡活动开启公告', '王者宝藏-限时点券大放送开启公告及FAQ', '周年祈愿-送限时语音开启公告及FAQ', '周年庆福利第四波，七大重磅内容来袭！', '周年涂鸦-免费送全套开启公告及FAQ', 'KPL预报丨成都AG主场首战，Fly、清清再交手！', '拖米确认带队参加全国大赛！吃瓜看比赛两不误', '秋季赛快讯：XYG击败深圳DYG，灵梦不知火舞打出致命一击', 'KPL预报丨挑战最强战力，MTG能否终结武汉ES连胜？', '广州竟是最富有城市?全国大赛游戏赛道趣味数据送上']
	//   const newsList = newsTitles.map(title => {
	//     const randomCats = cats.slice(0).sort((a,b) => Math.random() - 0.5)
	//     return {
	//       categories: randomCats.slice(0,2),
	//       title: title,
	//     }
	//   })
	//   await Article.deleteMany({})
	//   await Article.insertMany(newsList)
	//   res.send(newsList)
	// })
	router.get("/news/list", async (req, res) => {
		// const parent = await Category.findOne({
		//   name: '新闻分类'
		// }).populate({
		//   path: 'children',
		//   populate: {
		//     path: 'newsList'
		//   }
		// }).lean()

		const parent = await Category.findOne({
			name: "新闻分类",
		});
		// 聚合查询aggregate: 在一次查询内执行多次查询
		const cats = await Category.aggregate([
			{ $match: { parent: parent._id } },
			{
				// 类似于关系型数据的 join，可以用当前查询结果去查询另外一个集合
				$lookup: {
					from: "articles", // form表示关联哪个集合，集合名称默认为对应的模型名称的小写复数。因为数据库创建的时候会默认将文档名设置为复数。这里是 articles 对应的 Article 模型
					localField: "_id", // 本地键
					foreignField: "categories", // 外键
					as: "newsList", // 为输出文档的新增值命名。如果输入的集合中已存在该值，则会覆盖掉，
				},
			},
			{
				$addFields: {
					newsList: { $slice: ["$newsList", 5] },
				},
			},
		]);

		const subCats = cats.map((v) => v._id);
		cats.unshift({
			name: "热门",
			newsList: await Article.find()
				.where({
					categories: { $in: subCats },
				})
				.populate("categories")
				.limit(5)
				.lean(),
		});

		cats.map((cat) => {
			cat.newsList.map((news) => {
				news.categoryName =
					cat.name === "热门" ? news.categories[0].name : cat.name;
				return news;
			});
			return cat;
		});
		res.send(cats);
	});

	// web api路径
	app.use("/web/api", router);
};

/*
 * @Author: Latte
 * @Date: 2021-10-07 14:04:00
 * @LAstEditors: Latte
 * @LastEditTime: 2021-10-08 22:54:37
 * @FilePath: \server\routes\admin\index.js
 */
module.exports = (app) => {
	const express = require("express");
	const router = express.Router({
		mergeParams: true, // 表示合并参数，把app.use里面的resource参数合并入route，即子路由继承父路由的参数
	});

	// 创建
	router.post("/", async (req, res) => {
		const model = await req.Model.create(req.body);
		res.send(model);
	});

	// 修改
	router.put("/:id", async (req, res) => {
		const model = await req.Model.findByIdAndUpdate(req.params.id, req.body);
		res.send(model);
	});

	// 获取列表
	router.get("", async (req, res) => {
		const queryOptions = {};
		if (req.Model.modelName === "Category") {
			queryOptions.populate = "parent";
		}
		const items = await req.Model.find().setOptions(queryOptions).limit(10);
		res.send(items);
	});

	// 指定id获取
	router.get("/:id", async (req, res) => {
		const model = await req.Model.findById(req.params.id);
		res.send(model);
	});

	// 删除
	router.delete("/:id", async (req, res) => {
		await req.Model.findByIdAndDelete(req.params.id);
		res.send({
			success: true,
		});
	});

	// 通用CRUD路由
	app.use(
		"/admin/api/rest/:resource",
		async (req, res, next) => {
			const modelName = require("inflection").classify(req.params.resource); // 将路由参数转换成类名
			req.Model = require(`../../models/${modelName}`);
			next();
		},
		router
	);

	const multer = require("multer");
	const upload = multer({ dest: __dirname + "/../../uploads" }); // dirname表示绝对地址，在这里指当前admin文件夹所在路径

	// 文件上传
	app.post("/admin/api/upload", upload.single("file"), async (req, res) => {
		const file = req.file; // 这里req.file是中间件upload.single的作用结果，类似于上面的req.Model
		file.url = `http://localhost:3000/uploads/${file.filename}`;
		res.send(file);
	});
};

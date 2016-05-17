import express from 'express';
import path from 'path';

export default function() {

    //初始化express应用
	var app = express();

    //初始化express配置
	require('./config/express').run(app);

    //集成webpack运行环境
	require('./config/webpack').run(app);

	return app;
};

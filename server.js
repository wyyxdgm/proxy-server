var express = require('express');

var path = require('path');
var proxy = require('express-http-proxy');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));//静态文件处理中间件，模板的css、js文件路径命会拼接到public后

//配置路由规则，顺序执行，率先执行的规则有效，后面的会被忽略，使用next()方法可以使后续的路由规则得到执行

app.use('/apis1', proxy('http://120.92.140.67:9080/apis1'));

app.listen(8080)

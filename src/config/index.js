// 根据环境引入不同配置 process.env.REACT_APP_ENV
const config = require('./env' + process.env.REACT_APP_ENV);
module.exports = config;

import Mock from "mockjs";
import api from "./mock.js"; //引入mock模拟的数据

Mock.mock("/api/chartsApi", "get", api.chartsApi);
Mock.mock("/api/navListApi", "get", api.navListApi);

export default Mock;

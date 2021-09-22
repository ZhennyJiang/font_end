import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import installElementPlus from "./plugins/element";
import Axios from "axios";
import "./assets/css/init.css";
//挂载axios
// Vue.prototype.$http = axios; //出了问题

//设置访问根路径

const app = createApp(App);
installElementPlus(app);
app.config.globalProperties.Axios = Axios;
Axios.defaults.baseURL = "http://localhost:9000";
app.use(router).mount("#app");

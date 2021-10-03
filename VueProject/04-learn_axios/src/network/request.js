import axios from "axios";
// export function request(config, success, failure) {
//   const instance = axios.create({
//     baseURL: "http://123.207.32.32:8000",
//     timeout: 5000,
//   });
//   instance(config)
//     .then((res) => {
//       // console.log(res);
//       success(res);
//       console.log(success);
//     })
//     .catch((err) => {
//       console.log(err);
//       failure(err);
//     });
// }
// export function request(config) {
//   return new Promise((resolve, reject) => {
//     const instance = axios.create({
//       baseURL: "http://123.207.32.32:8000",
//       timeout: 5000,
//     });
//     instance(config)
//       .then((res) => {
//         // console.log(res);
//         resolve(res);
//       })
//       .catch((err) => {
//         reject(err);
//       });
//   });
// }
export function request(config) {
  // return new Promise((resolve, reject) => {
  const instance = axios.create({
    baseURL: "http://123.207.32.32:8000",
    timeout: 50000,
  });
  //2. axios的拦截器
  instance.interceptors.request.use(
    (config) => {
      //一、 请求拦截
      //1. 比如config中的一些信息不符合服务器的要求
      //2. 比如每次发送网络请求时，都希望在界面中显示一个请求的图标
      //3. 比如某些网络请求（比如登录token），必须携带一些特殊的信息
      console.log(config);
      return config;
    },
    (err) => {
      console.log(err);
    }
  );

  instance.interceptors.response.use(
    (res) => {
      console.log(res);
      return res.data;
    },
    (err) => {
      console.log(err);
    }
  );
  return instance(config);

  // });
}

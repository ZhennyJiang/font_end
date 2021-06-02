function promiseUtil() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("异步任务执行成功");
      let data = 1;
      resolve(data);
    }, 2000);
  });
}
async function AsyncUtil() {
  console.log("函数开始执行");
  console.log(await promiseUtil()); //promiseUtil返回的是promise的实例对象，await可以判断其状态是否是resolve来决定是否继续执行
  console.log("函数继续执行");
}
AsyncUtil();

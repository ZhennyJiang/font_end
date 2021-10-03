export default {
  aUpdateInfo(context, payload) {
    return new Promise((resolve) => {
      setTimeout(() => {
        context.commit("updateInfo");
        resolve(payload);
      }, 1000);
    });
  },
};

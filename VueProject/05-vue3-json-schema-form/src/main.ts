import { createApp, defineComponent, h, reactive } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
// import App from './App.vue';
import App from './App';

// const img = require('./assets/logo.png'); // eslint-disable-line
// const App = defineComponent({
//   setup() {
//     // const state = reactive({ name: 'aaa' });
//     return () => {
//       // return h('div', { id: 'app' }, [
//       //   h('img', { alt: 'Vue logo', src: img }),
//       //   h(HelloWorld, {
//       //     msg: 'Welcome to Your Vue.js + TypeScript App',
//       //   }),
//       //   h('p', state.name),
//       // ]);
//     };
//   },
// });
createApp(App).mount('#app');

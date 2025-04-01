// import Vue from 'vue'
// import App from './App.vue'
//
// Vue.config.productionTip = false
//
// new Vue({
//   render: h => h(App),
// }).$mount('#app')
// src/main.js
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VMdEditor from '@kangc/v-md-editor';
import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';
// 使用主题，例如 github
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import Prism from 'prismjs';
// 手动导入你需要的语言支持
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-json';

// import 'prismjs/components/index.js'; // 会包含大部分语言（体积稍大）




VMdPreview.use(githubTheme, { Prism }); // 👈 加这句！
VMdEditor.use(githubTheme, { Prism });

Vue.use(VMdPreview);
Vue.use(VMdEditor);
Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');


console.log("环境变量：", process.env);

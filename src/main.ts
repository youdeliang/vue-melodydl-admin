import { createApp } from 'vue';

import App from './App.vue';
import router, { setupRouter } from './router';
import { setupStore } from '@/store';
import { setupAntd } from '@/setup/ant-design-vue';

const app = createApp(App);

// ant-design-vue
setupAntd(app);

// store
setupStore(app);

setupRouter(app);

router.isReady().then(() => {
  app.mount('#app');
});

export default app;

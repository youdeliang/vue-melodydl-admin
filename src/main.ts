import { createApp } from 'vue';

import App from './App.vue';
import router from './router';
import { setupStore } from '@/store';
import { setupAntd } from '@/setup/ant-design-vue';

const app = createApp(App);

// ant-design-vue
setupAntd(app);

// store
setupStore(app);

app.use(router);

app.mount('#app');

export default app;

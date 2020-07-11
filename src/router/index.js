import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
const routerConfig: any = {
    mode: 'history',
    routes: []
}
const router = new Router(routerConfig);
router.beforeEach(async(to, from, next) => {})
export default router;
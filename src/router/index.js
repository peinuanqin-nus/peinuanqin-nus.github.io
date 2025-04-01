// src/router/index.js
import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from "@/components/HomePage";
import ProjectDetail from "@/components/ProjectDetail";
Vue.use(VueRouter);

const routes = [
    // { path: '/', component: LiteratureProject },
    { path: '/', component: HomePage },
    {path: '/project/:id', component: ProjectDetail}
];

const router = new VueRouter({
    mode: 'hash',
    routes
});

export default router

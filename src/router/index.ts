import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            redirect: { name: "mask-directive" },
        },
        {
            path: "/mask-directive",
            name: "mask-directive",
            component: () => import("../views/DirectiveView.vue"),
        },
        {
            path: "/editor",
            name: "editor",
            component: () => import("../views/EditorView.vue"),
        },
    ],
});

export default router;

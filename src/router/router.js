import "nprogress/nprogress.css";
import { start, done, configure } from "nprogress";
import NotFound from "@/views/NotFound.vue";

configure({
    trickleSpeed: 20,//速度20
    showSpinner: false,//不显示右边的小圈圈
})
function delay(duration) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, duration)
    })
}

function getPageComponent(pageCompResolver) {
    return async () => {
        start();
        if (process.env.NODE_ENV === "development") {
            await delay(2000);
        }
        const comp = await pageCompResolver();
        done();
        return comp;
    }
}

export default [
    {
        name: "Home",
        path: "/",
        component: getPageComponent(() => import(/* webpackChunkName: "home" */ "@/views/Home")),
        meta: { title: "主页" }
    },
    {
        name: "About",
        path: "/about",
        component: getPageComponent(() => import(/* webpackChunkName: "home" */ "@/views/About")),
        meta: { title: "关于" }
    },
    {
        name: "Blog",
        path: "/article",
        component: getPageComponent(() => import(/* webpackChunkName: "blog" */ "@/views/Article")),
        meta: { title: "文章" }
    },
    {
        name: "CategoryBlog",
        path: "/article/cate/:categoryId",
        component: getPageComponent(() => import(/* webpackChunkName: "blog" */ "@/views/Article")),
        meta: { title: "文章" }
    },
    {
        name: "BlogDetail",
        path: "/article/:id",
        component: getPageComponent(() => import(/* webpackChunkName: "blogdetail" */"@/views/Article/detail.vue")),
        meta: { title: "文章详情" }
    },
    {
        name: "Message",
        path: "/message",
        component: getPageComponent(() => import(/* webpackChunkName: "message" */ "@/views/Message")),
        meta: { title: "留言板" }
    },
    {
        name: "Project",
        path: "/project",
        component: getPageComponent(() => import(/* webpackChunkName: "project" */ "@/views/Project")),
        meta: { title: "项目&效果" }
    },
    {
        name: "NotFound",
        path: "*",
        component: NotFound,
    },
]

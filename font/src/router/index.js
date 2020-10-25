import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    redirect: '/main',
    children: [
      {
        path: "/main",
        name: "main",
        component: () =>
          import(
            "../components/Main/Main.vue"
            ),
      },
      {
        path: "/news",
        name: "news",
        component: () =>
          import(
            "../components/News/News.vue"
          ),
      },
      {
        path: "/photo",
        name: "photo",
        component:() =>
           import(
             "../components/Photo/Photo.vue"
        ),
      },
      {
        path: "/histories",
        name: "histories",
        component: () =>
          import(
            "../components/History/History.vue"
          ),
      },
      {
        path: "/about",
        name: "about",
        component: () =>
          import(
             "../components/About/About.vue"
          ),
      },
      {
        path: "/navigate",
        name: "navigate",
        component: () =>
          import(
            "../components/Navigate/Navigate.vue"
          ),
      },
      {
        path: "/article/:id",
        name: "article",
        component: () =>
          import(
            "../components/Article/Article.vue"
          ),
      },
      {
        path: "/album/:id",
        name: "album",
        component: () =>
          import(
            "../components/Album/Album.vue"
          ),
      },
      {
        path: "/history/:id",
        name: "history",
        component: () => 
          import(
            "../components/Year/Year.vue"
          ),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
});

export default router;

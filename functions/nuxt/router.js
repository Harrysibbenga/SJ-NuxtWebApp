import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _31991867 = () => interopDefault(import('../pages/admin.vue' /* webpackChunkName: "pages/admin" */))
const _665514ac = () => interopDefault(import('../pages/admin/index.vue' /* webpackChunkName: "pages/admin/index" */))
const _a5c4ca36 = () => interopDefault(import('../pages/admin/about.vue' /* webpackChunkName: "pages/admin/about" */))
const _d28c78d4 = () => interopDefault(import('../pages/admin/calendar.vue' /* webpackChunkName: "pages/admin/calendar" */))
const _6e704bac = () => interopDefault(import('../pages/admin/car.vue' /* webpackChunkName: "pages/admin/car" */))
const _93da3eaa = () => interopDefault(import('../pages/admin/news.vue' /* webpackChunkName: "pages/admin/news" */))
const _931df2fa = () => interopDefault(import('../pages/admin/partners.vue' /* webpackChunkName: "pages/admin/partners" */))
const _4e5a674e = () => interopDefault(import('../pages/admin/shop.vue' /* webpackChunkName: "pages/admin/shop" */))
const _b7ed6b28 = () => interopDefault(import('../pages/car.vue' /* webpackChunkName: "pages/car" */))
const _6c5d30fe = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _3399b9eb = () => interopDefault(import('../pages/news.vue' /* webpackChunkName: "pages/news" */))
const _132d807a = () => interopDefault(import('../pages/partners.vue' /* webpackChunkName: "pages/partners" */))
const _d37b3c7e = () => interopDefault(import('../pages/profile.vue' /* webpackChunkName: "pages/profile" */))
const _2bdd971a = () => interopDefault(import('../pages/post/_slug.vue' /* webpackChunkName: "pages/post/_slug" */))
const _0029c46a = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/admin",
    component: _31991867,
    children: [{
      path: "",
      component: _665514ac,
      name: "admin"
    }, {
      path: "about",
      component: _a5c4ca36,
      name: "admin-about"
    }, {
      path: "calendar",
      component: _d28c78d4,
      name: "admin-calendar"
    }, {
      path: "car",
      component: _6e704bac,
      name: "admin-car"
    }, {
      path: "news",
      component: _93da3eaa,
      name: "admin-news"
    }, {
      path: "partners",
      component: _931df2fa,
      name: "admin-partners"
    }, {
      path: "shop",
      component: _4e5a674e,
      name: "admin-shop"
    }]
  }, {
    path: "/car",
    component: _b7ed6b28,
    name: "car"
  }, {
    path: "/login",
    component: _6c5d30fe,
    name: "login"
  }, {
    path: "/news",
    component: _3399b9eb,
    name: "news"
  }, {
    path: "/partners",
    component: _132d807a,
    name: "partners"
  }, {
    path: "/profile",
    component: _d37b3c7e,
    name: "profile"
  }, {
    path: "/post/:slug?",
    component: _2bdd971a,
    name: "post-slug"
  }, {
    path: "/",
    component: _0029c46a,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}

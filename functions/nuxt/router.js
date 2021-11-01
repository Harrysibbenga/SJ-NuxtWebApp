import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _e7d43e58 = () => interopDefault(import('../pages/admin.vue' /* webpackChunkName: "pages/admin" */))
const _82b90f52 = () => interopDefault(import('../pages/admin/index.vue' /* webpackChunkName: "pages/admin/index" */))
const _c228c4dc = () => interopDefault(import('../pages/admin/about.vue' /* webpackChunkName: "pages/admin/about" */))
const _a939b46e = () => interopDefault(import('../pages/admin/calendar.vue' /* webpackChunkName: "pages/admin/calendar" */))
const _33491599 = () => interopDefault(import('../pages/admin/car.vue' /* webpackChunkName: "pages/admin/car" */))
const _e7595744 = () => interopDefault(import('../pages/admin/news.vue' /* webpackChunkName: "pages/admin/news" */))
const _69cb2e94 = () => interopDefault(import('../pages/admin/partners.vue' /* webpackChunkName: "pages/admin/partners" */))
const _249adb01 = () => interopDefault(import('../pages/admin/shop.vue' /* webpackChunkName: "pages/admin/shop" */))
const _f3f16bce = () => interopDefault(import('../pages/car.vue' /* webpackChunkName: "pages/car" */))
const _244e2fee = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _dd48a044 = () => interopDefault(import('../pages/news.vue' /* webpackChunkName: "pages/news" */))
const _15890436 = () => interopDefault(import('../pages/partners.vue' /* webpackChunkName: "pages/partners" */))
const _44aec2ee = () => interopDefault(import('../pages/profile.vue' /* webpackChunkName: "pages/profile" */))
const _7f5cafb4 = () => interopDefault(import('../pages/post/_slug.vue' /* webpackChunkName: "pages/post/_slug" */))
const _5aa68cd7 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _e7d43e58,
    children: [{
      path: "",
      component: _82b90f52,
      name: "admin"
    }, {
      path: "about",
      component: _c228c4dc,
      name: "admin-about"
    }, {
      path: "calendar",
      component: _a939b46e,
      name: "admin-calendar"
    }, {
      path: "car",
      component: _33491599,
      name: "admin-car"
    }, {
      path: "news",
      component: _e7595744,
      name: "admin-news"
    }, {
      path: "partners",
      component: _69cb2e94,
      name: "admin-partners"
    }, {
      path: "shop",
      component: _249adb01,
      name: "admin-shop"
    }]
  }, {
    path: "/car",
    component: _f3f16bce,
    name: "car"
  }, {
    path: "/login",
    component: _244e2fee,
    name: "login"
  }, {
    path: "/news",
    component: _dd48a044,
    name: "news"
  }, {
    path: "/partners",
    component: _15890436,
    name: "partners"
  }, {
    path: "/profile",
    component: _44aec2ee,
    name: "profile"
  }, {
    path: "/post/:slug?",
    component: _7f5cafb4,
    name: "post-slug"
  }, {
    path: "/",
    component: _5aa68cd7,
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

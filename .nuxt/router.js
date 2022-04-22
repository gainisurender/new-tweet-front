import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2019df92 = () => interopDefault(import('..\\pages\\CreatePost.vue' /* webpackChunkName: "pages/CreatePost" */))
const _7aafc1b0 = () => interopDefault(import('..\\pages\\Posts.vue' /* webpackChunkName: "pages/Posts" */))
const _3044405e = () => interopDefault(import('..\\pages\\Register.vue' /* webpackChunkName: "pages/Register" */))
const _4b4ddd85 = () => interopDefault(import('..\\pages\\UserHome.vue' /* webpackChunkName: "pages/UserHome" */))
const _6db7ef73 = () => interopDefault(import('..\\pages\\UserProfile.vue' /* webpackChunkName: "pages/UserProfile" */))
const _bab3d672 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/CreatePost",
    component: _2019df92,
    name: "CreatePost"
  }, {
    path: "/Posts",
    component: _7aafc1b0,
    name: "Posts"
  }, {
    path: "/Register",
    component: _3044405e,
    name: "Register"
  }, {
    path: "/UserHome",
    component: _4b4ddd85,
    name: "UserHome"
  }, {
    path: "/UserProfile",
    component: _6db7ef73,
    name: "UserProfile"
  }, {
    path: "/",
    component: _bab3d672,
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

/**
 * 路由中间件
 * 类似于vue-router的beforeEach
 */
export default defineNuxtRouteMiddleware((to, from) => {
    // isAuthenticated() is an example method verifying if a user is authenticated
    if (isAuthenticated() === false) {
      return navigateTo('/login')
    }
  })

function isAuthenticated() {
    return Math.random() > 0.5
}
  
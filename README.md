App.Vue
```javascript
<template>
  <div id="app">
    <router-view v-header-title="$route.meta.title" v-header-keywords="$route.meta.keyword" 
    v-header-description="$route.meta.description"></router-view>
  </div>
</template>
```
router
```javascript
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      component: NotFoundComponent
    },
    {
      path: '/',
      meta: {
        title: 'home',
        keyword: 'keyword',
        description: 'desc'
      },
      name: 'Index',
      component: Index
    },
    {
      path: '/admin',
      name: 'Login',
      meta: {
        title: 'login'
      },
      component: Login
    },
    {
      path: '/admin/main',
      name: 'Main',
      meta: {
        title: 'admin',
        keyword: 'text'
      },
      component: Main
    }
  ]
})
```

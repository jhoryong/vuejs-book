<template>
<div>
  <div class="header">
    <h1 class="headerText">(주)OpenSG</h1>
    <nav>
      <ul>
        <li><router-link v-bind:to="{ name:'home' }">Home</router-link></li>
        <li><router-link v-bind:to="{ name:'about' }">About</router-link></li>
        <li><router-link v-bind:to="{ name:'contacts' }">Contacts</router-link></li>
      </ul>
    </nav>
  </div>

  <div class="container">
    <router-view></router-view>
  </div>
</div>
</template>
<script>
import Home from './components/Home.vue'
import About from './components/About.vue'
import Contacts from './components/Contacts.vue'
import ContactByNo from './components/ContactByNo.vue'
import NotFound from './components/NoutFound.vue'
import VueRouter from 'vue-router'


const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/home', name: 'home', component: Home }, // named router(명명된 라우터)
    { path: '/about', name: 'about', component: About },
    // Nested Routing(중첩 라우팅)
    { path: '/contacts',name: 'contacts',  component: Contacts,
      children: [
        { 
          path: '/contacts/:no', 
          name: 'contactsbyno', 
          component: ContactByNo,
          props:true,
          // beforeEnter: (to, from, next)=>{
          //   console.log("@@beforeENter!: " + from.path + " --> " + to.path)
          //   if (from.path.startsWith("/contacts")) next(); // 이전 경로가 /contacts 가 아니면 /home 으로 강제이동
          //   else next("/home");
          // }
        }
      ]
    },
    { path: '*', component: NotFound }
    // Dynamic Routing(동적 라우팅)
    // { path: '/contacts/:no', component: ContactByNo }, /
  ]
})

router.beforeEach((to, from, next)=>{
  to, from
  console.log("** beforeEach!")
  next();
})

router.afterEach((to, from)=>{
  to, from
  console.log("** afterEach!")
})

export default {
  name : 'app',
  router
}

</script>
<style>
.header { background-color:aqua; padding: 10px 0px 0px 0px; }
.headerText { padding: 0px 20px 0px 20px; } 
ul { list-style-type: none; margin: 0; padding: 0;
    overflow: hidden; background-color: purple;  }
li { float: left; }
li a { display: block; color: yellow; text-align: center;
    padding: 14px 16px; text-decoration: none;  }
li a:hover { background-color: aqua; color:black; }
</style>
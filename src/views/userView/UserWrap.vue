<template>
<NavBar/>

    <router-view></router-view>
   

<Footer/>
  
</template>

<script>
import NavBar from '@/components/userComponent/NavBar.vue'
import Footer from '@/components/commonComponent/Footer.vue'
export default {
    name:'UserWrap',

    components: {
    NavBar,
    Footer,
   
 

  },

}
</script>

<style scoped>
Footer{
  margin-top: 3rem !important;
}

</style>
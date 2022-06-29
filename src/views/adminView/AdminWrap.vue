<template>
   <div class="grid grid-cols-12 gap-4">

            <SideBar /> 

            <div class="col-span-9 my-5  mr-12">
                <TopNav/> 

             <router-view></router-view>

              
                
                      
            </div>
             
                
        </div>
 <Footer/>

</template>

<script>
import SideBar from '@/components/adminComponent/SideBar.vue'
import TopNav from '@/components/adminComponent/TopNav.vue'
import Footer from '@/components/commonComponent/Footer.vue'

export default {
name:'AdminWrap',
components:{
    SideBar,
    TopNav,
    Footer
},
}
</script>


<style>
Footer{
  margin-top: 0!important;
}
</style>
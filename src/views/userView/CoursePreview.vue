<template>
<section class="py-5">
    <div class="container mx-auto" v-for="info in preview_info" :key="info">
        <div class="grid md:grid-cols-2 gird-row">
            <div class="py-4 leading-relaxed">
               
                   <h2 class=" text-xl md:text-2xl mb-2  font-semibold">{{ info.title }}</h2> 
                    <p class="mb-2 text-md md:lg font-semibold text-slate-700 ">{{info.description }}</p>
                  
                    <div class="flex text-sm md:lg">
                      <StarComponent />
                    <span class="font-bold text-primary mx-2" >({{ info.review}} reviews) </span>
                      <span>{{ " " + info.enroll }} enrolled</span>
                    </div>

                    <div class="card border-y-2 px-4 pb-8 my-4" >
                      <h5 class="card-title mb-3 text-slate-800 mt-2 ml-8">What You Will Learn</h5>

                      <ul v-for="learn_list in to_learn" :key="learn_list">
                <li class="mb-3 ml-6 list-square text-blue-500" >
                  <p class="card-text text-slate-900 ">
                    {{learn_list}}
                  </p>
                </li>
              </ul>

              <button class="btn  bg-primary text-slate-100 w-1/2 mx-4 hover:bg-slate-600"> <router-link to="/coursemain">Start Course </router-link> </button>
              
              
              
           
              </div>
             

            </div>

            <div class="ml-14 pt-8 pb-8 hidden md:flex">
              <img :src="info.img" class="h-full "  alt="course image" />
                
            </div>

        </div>
    
    </div>
  </section>

</template>

<script>

import StarComponent from '@/components/commonComponent/StarComponent.vue'
name='CoursePreview'
export default {
    components: {
         
         StarComponent,
         
         },
 data() {
    return {
      preview_info: [
        {
          title: "Complete Web Developer Course",
          description: "Learn how to build a website from beginer to pro",
          img: require("@/assets/img/Web-Development.jpg"),
          enroll: 200,
          review: 140,

        },
      ],
       to_learn: [
            "Learn the latest frameworks and technologies, including Javascript ES6, Bootstrap 5.",
            "Build fully-fledged websites and web apps for your startup or business.",
            "Work as a freelance web developer.",
            "Master backend development with Node",
          ],
    };
  },
}


</script>

<style>

</style>
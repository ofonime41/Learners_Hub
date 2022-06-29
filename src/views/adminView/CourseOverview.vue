<!-- <template>
    <div class="grid grid-cols-12 gap-4">
        <SideBar />
        <div class="col-span-9 my-5  mr-12">
            <TopNav />

            <section class=" mt-5 p-5">
                <div class="grid md:grid-cols-2 gird-row" v-for="info in preview_info" :key="info">
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
           
              </div>

               <button class="btn  bg-blue-500 text-slate-100  mx-2 hover:bg-slate-600"> <a href="">Edit</a> </button>
                <button class="btn  bg-green-500 text-slate-100  mx-2 hover:bg-slate-600"> <a href="">Add</a> </button>
               <button class="btn  bg-primary text-slate-100  mx-2 hover:bg-slate-600"> <a href="">Cancel</a> </button>

            </div>

            <div class="ml-14 pt-8 pb-8 hidden md:flex">
              <img :src="info.img" class="h-full "  alt="course image" />
                
            </div>

        </div>

               
            </section>

        </div>
    </div>
    <Footer />

</template>

<script>
import SideBar from '@/components/adminComponent/SideBar.vue'
import TopNav from '@/components/adminComponent/TopNav.vue'
import Footer from '@/components/commonComponent/Footer.vue'

export default {
    name: 'CourseOveriew.vue',

    components: {
        SideBar,
        Footer,
        TopNav,
      
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
</style> -->
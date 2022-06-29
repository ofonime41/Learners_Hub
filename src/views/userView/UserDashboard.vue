<template>
    <NavUser />
    <section class="p-5 mb-32">
        <div class="container mx-auto">
            <h2 class="text-3xl text-center font-semi-bold p-4 mb-4 py-8">Your Learning</h2>

            <div class="mb-12">
                <ul class="flex  text-lg md:text-2xl font-bold text-primary ">

                    <li class="mr-5 hover:text-blue-900" id="courses">
                        <router-link to=""> Courses</router-link>

                    </li>
                    <li class="mr-5 hover:text-blue-900">
                        <router-link to=""> Recommendation</router-link>

                    </li>
                    <li class=" hover:text-blue-900">

                        <router-link to=""> Completed</router-link>
                    </li>
                </ul>
            </div>

            <div class="grid lg:grid-cols-4 md:grid-cols-2 lg:gap-10 gap-y-32 gap-x-10">

                <!-- card  -->

                <div class="hover:bg-gray-100 card w-full h-auto relative " v-for="course in courses" :key="course">
                    <div>
                        <img :src="course.image" alt="" class="w-full">

                    </div>
                    <div class="px-3">
                        <h5 class="card-title">
                            {{ course.title }}
                        </h5>
                        <p class=" text-sm mb-3"><i>
                                {{ course.author }}
                            </i></p>
                        <p class="text-sm mb-3">
                            {{ course.description }}
                        </p>
                        <StarComponent />
                    </div>
                    <div class="absolute top-full w-full">
                        <router-link to="/preview">
                            <button class="btn-card w-full text-sm bg-primary text-white">Find Out More</button>


                        </router-link>

                        <button
                            class="btn-card w-full text-sm text-black rounded-xl border-2 border-dotted border-primary"><a
                                href="">Leave Course</a></button>
                    </div>



                </div>

            </div>


        </div>


    </section>
    <Footer />
</template>

<script>

import Footer from '@/components/commonComponent/Footer.vue'
import NavUser from '@/components/userComponent/NavUser.vue'

export default {
    name: "UserDashboard",
    components: {

        Footer,
        NavUser,

    },
    data() {
        return {
            courses: [
                {
                    title: "Complete Web Developer Course",
                    author: "Joe Allen",
                    description:
                        " Learn how to build a website using latest technology and tools.",
                    image: require("@/assets/img/web_dev.png"),
                },

                {
                    title: "UI/UX Design",
                    author: "Peter Pan",
                    description:
                        "Take your design skills from begining to advance level with this course",
                    image: require("@/assets/img/ui_Img.png"),
                },

                {
                    title: "Product Management",
                    author: "Mercy Bayo",
                    description: "Becone  a product manager and upgrade your skill",
                    image: require("@/assets/img/img.webp"),
                },
                {
                    title: "Introduction to Entrepreneurship",
                    author: "Christy Tony",
                    description:
                        "Discover the business part of your skill and occupation.",
                    image: require("@/assets/img/ui_Img.png"),
                },
            ],
        };
    },


}
</script>

<style>
</style>
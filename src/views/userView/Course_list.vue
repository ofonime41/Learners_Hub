<template>

    <section class="p-5 ">
        <div class="container mx-auto">
            <h2 class="text-3xl text-center p-4 mb-4">Explore Featured Courses</h2>

            <div class="grid lg:grid-cols-4 md:grid-cols-2 gap-20 md:gap-10 ">

                <div class="hover:bg-gray-100 card" v-for="course in courses" :key="course">
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
                    <router-link to="/preview">
                        <p class="btn-card w-full text-sm bg-primary text-white absolute top-full">Find Out More</p>

                    </router-link>


                </div>


            </div>
        </div>

        <div class="container mx-auto mt-32 mb-20" >
            <h2 class="text-3xl text-center ">We have something for You</h2>
            <p span class="text-center mb-10">Explore and pick a course from our rich content</p>

            <div class="grid lg:grid-cols-4 md:grid-cols-2 gap-20 md:gap-10" >
                <!-- card  -->

                <div class="hover:bg-gray-100 card" v-for="course in courses" :key="course">
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
                    <router-link to="/preview">
                        <p class="btn-card w-full text-sm bg-primary text-white absolute top-full">Find Out More</p>

                    </router-link>


                </div>


            </div>
        </div>

    </section>

</template>

<script>
import CourseCard from '@/components/userComponent/CourseCard.vue'

export default {
    name: 'CourseList',

    components: {
        CourseCard
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
                    image: require("@/assets/img/female_small.png"),
                },
            ],
        };
    },
}
</script>

<style>
</style>
<template>
 <section class="md:flex justify-center my-10 space-x-5 space-y-5">
                    <div class="half-card px-10 lg:px-20 py-5 bg-deep-blue   text-white ">
                        <div class="text-center">
                            <h3 class="mb-1 text-3xl font-semibold">1.5k</h3>
                            <p class="mb-4">Visitors</p>
                            <p class=""><i class="bi bi-arrow-up"></i><span>45.5%</span></p>
                        </div>
                    </div>
                    <!-- CARD 2 -->
                    <div class="half-card px-10 lg:px-20 py-5 bg-pink-600 text-white">
                        <div class="text-center">
                            <h3 class="mb-1 text-3xl font-semibold">3k</h3>
                            <p class="mb-4">Enrolled</p>
                            <p class=""><i class="bi bi-arrow-up"></i><span>25.5%</span></p>
                        </div>
                    </div>

                    <!-- CARD 3 -->
                    <div class="half-card px-10 lg:px-20 py-5 bg-deep-blue text-white">
                        <div class="text-center">
                            <h3 class="mb-1 text-3xl font-semibold">650 </h3>
                            <p class="mb-4">Courses</p>
                            <p class=" "><i class="bi bi-arrow-up"></i><span>12%</span></p>
                        </div>
                    </div>

                    <!-- CARD 4 -->
                    <div class="half-card px-10 lg:px-20 py-5 bg-cyan-500 text-white">
                        <div class="text-center">
                            <h3 class="mb-1 text-3xl font-semibold">1.5k</h3>
                            <p class="mb-4">Visitors</p>
                            <p class=" "><i class="bi bi-arrow-up"></i><span>45.5%</span></p>
                        </div>
                    </div>

                </section>

                <section class="card-shadow rounded-md mt-20 p-5 ">
                    <h2 class="text-xl px-5 py-3 font-semibold">Featured Courses</h2>
                    <div class="relative overflow-x-auto ">
                        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead
                                class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        ID
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                      Course Title
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                       No Enrolled
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                       Action
                                    </th>
                                   
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" v-for="course_detail in course_table" :key="course_detail.id">
                                    <th scope="row"
                                        class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                       {{course_detail.id}}
                                    </th>
                                    <td class="px-6 py-4">
                                       {{course_detail.course_title}}
                                    </td>
                                    <td class="px-6 py-4">
                                      {{course_detail.num_enroll}}
                                    </td>
                                    <td class="px-6 py-4">
                                       <a href=""
                                            class="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</a>
                                    </td>
                                   
                                </tr>
                               
                               
                            </tbody>
                        </table>
                        <div class="my-8 text-center"><PaginationComponent/></div>
                    </div>

                </section> 
    
        
 
    
<router-view></router-view>
</template>

<script>

import PaginationComponent from '@/components/commonComponent/PaginationComponent.vue'

export default {
    name: 'AdminDashboard',


    components: {
        PaginationComponent
    },

    data() {
        return {


            info: [
                { info_num: '1k', info_text: 'Visitors', info_percent: '30', },
                { info_num: '200', info_text: 'enrolled', info_percent: '15'},
                { info_num: '50', info_text: 'Courses', info_percent: '5' },
                { info_num: '20', info_text: 'Completed', info_percent: '25'}
            ],

            course_table: [
                {
                    id: 1, course_title: 'Complete Web developer course', num_enroll: '400',
                },
                {
                    id: 2, course_title: 'UI/UX with figma', num_enroll: '200',
                },
                {
                    id: 3, course_title: 'Project Management', num_enroll: '200',
                }
            ],
        }
    },


}


</script>

<style>


</style>>

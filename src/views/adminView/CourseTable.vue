<template>
   <form class="flex -mt-5 mb-5 mx-10 ">
                <input class="border p-2 rounded-md outline-none w-1/2 md:w-96" type="search" placeholder="Search User"
                    aria-label="Search">
                <button class="btn-card shadow-md bg-primary text-secondary-100 ml-1 w-32 " type="submit">Search
                </button>
            </form>

             <h5 class="text-xl font-semibold mt-14 text-center">Course Table</h5>

            <section class="card-shadow rounded-md mt-10 p-5 mx-auto md:w-full lg:w-11/12 ">

                <div class="relative overflow-x-auto ">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    ID
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    image
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Course Title
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Description
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    No Enrolled
                                </th>

                                <th scope="col" class="px-6 py-3">
                                    Completed
                                </th>

                                <th scope="col" class="px-6 py-3">
                                    Action
                                </th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                v-for="course_list in course_lists" :key="course_list">
                                <th scope="row"
                                    class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                    {{ course_list.id }}
                                </th>
                                <td class="px-6 py-4">
                                    <img class="" :src="course_list.course_img" alt="" />

                                </td>
                                <td class="px-6 py-4">
                                    {{ course_list.course_title }}
                                </td>
                                <td class="px-6 py-4">
                                  
                                         <div id="accordion-flush" data-accordion="collapse"
                                        data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                                        data-inactive-classes="text-white dark:text-gray-400">

                                        <h2 id="accordion-flush-heading">
                                            <button type="button"
                                                class="flex  items-center p-2  bg-primary font-medium text-left text-white rounded dark:text-gray-400"
                                                data-accordion-target="#accordion-flush-body" aria-expanded="false"
                                                aria-controls="accordion-flush-body">
                                                <span>view</span>
                                                <svg data-accordion-icon="" class="w-6 h-6 shrink-0" fill="currentColor"
                                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clip-rule="evenodd"></path>
                                                </svg>
                                            </button>
                                        </h2>
                                        <div id="accordion-flush-body" class="hidden"
                                            aria-labelledby="accordion-flush-heading">
                                            <div class="py-5 border-b border-gray-200 dark:border-gray-700">

                                                <p class="text-gray-500 dark:text-gray-400">
                                                    {{ course_list.description}}
                                                </p>
                                            </div>
                                        </div>

                                    </div>
                                
                                   
                                </td>
                                <td class="px-6 py-4">
                                    {{ course_list.num_enroll }}
                                </td>
                                <td class="px-6 py-4">
                                    {{ course_list.completed }}
                                </td>

                                <td class="px-6 py-4">
                                    <div class="flex space-x-4 ">
                                        <a href="/course-overview/">
                                            <button data-tooltip-target="view" type="button" class=""><i
                                                    style="font-size:14px" class="fa">&#xf06e;</i> </button>

                                            <div id="view" role="tooltip"
                                                class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
                                                view
                                                <div class="tooltip-arrow" data-popper-arrow></div>
                                            </div>
                                        </a>
                                        <a href="">
                                            <button data-tooltip-target="delete" type="button" class="">
                                                <i style="font-size:14px" class="fa text-red-700">&#xf014;</i>

                                            </button>
                                            <div id="delete" role="tooltip"
                                                class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-red-500 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
                                                delete
                                                <div class="tooltip-arrow" data-popper-arrow></div>
                                            </div>
                                        </a>
                                        <button data-tooltip-target="edite" type="button" class="">
                                            <i style="font-size:14px" class="fa">&#xf040;</i>

                                        </button>
                                        <div id="edite" role="tooltip"
                                            class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
                                            edit
                                            <div class="tooltip-arrow" data-popper-arrow></div>
                                        </div>
                                    </div>
                                </td>


                            </tr>

                        </tbody>
                    </table>
                    <div class="my-8 text-center">
                        <PaginationComponent />
                    </div>
                </div>

            </section>

</template>

<script>

import PaginationComponent from '@/components/commonComponent/PaginationComponent.vue'
export default {
    name: 'CourseTable',

    components: { 
        PaginationComponent
    },


    data() {
        return {
            course_lists: [
                {
                    id: 1,
                    course_title: 'Complete Web developer course',
                    course_img: require('@/assets/img/web_dev.png'),
                    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto est nobis labore libero quod dignissimos mollitia atque inventore temporibus tenetur!',
                    num_enroll: '50',
                    completed: '20'
                },

                {
                    id: 2, course_title: 'UI/UX with figma',
                    course_img: require('@/assets/img/web_dev.png'),
                    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto est nobis labore libero quod dignissimos mollitia atque inventore temporibus tenetur!',
                    num_enroll: '30',
                    completed: '21'
                },
                {
                    id: 3, course_title: 'Product Management',
                    course_img: require('@/assets/img/web_dev.png'),
                    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto est nobis labore libero quod dignissimos mollitia atque inventore temporibus tenetur!',
                    num_enroll: '100',
                    completed: '70'
                },

            ],
        }
    }

}
</script>

<style>
</style>
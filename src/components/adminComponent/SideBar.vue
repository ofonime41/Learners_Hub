<template>
  <div class="col-span-3 mr-12 bg-deep-blue ">

                <aside class="h-screen" aria-label="Sidebar">
                    <div class="overflow-y-auto py-4 px-3 ">
                      <ul class="space-y-2 text-white">
                            <li>
                                <router-link to="/admin"
                                    class="flex items-center p-2 text-base font-normal rounded-lg dark:text-white hover:bg-gray-900 dark:hover:bg-gray-700">

                                    <span class="ml-3 text-xl">Learners Hub</span>
                                </router-link >
                            </li>
                            <li>
                                <router-link  to="/add-course"
                                    class="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-white hover:text-black hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <svg class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                        fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z">
                                        </path>
                                    </svg>
                                    <span class="flex-1 ml-3 whitespace-nowrap">Add Course</span>
                                   
                                </router-link >
                            </li>
                          
                            <li>
                                <router-link to="./user"
                                    class="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-white hover:text-black hover:bg-gray-100  dark:hover:bg-gray-700">
                                    <svg class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                        fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd">
                                        </path>
                                    </svg>
                                    <span class="flex-1 ml-3 whitespace-nowrap">View Users</span>
                                </router-link>
                            </li>
                            <li>
                                <router-link to="/course-list"
                                    class="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-white hover:text-black hover:bg-gray-100 dark:hover:bg-gray-700">
                                    <svg class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                        fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                    <span class="flex-1 ml-3 whitespace-nowrap">View Courses</span>
                                </router-link>
                            </li>
                             
                        </ul> 
                    </div>
                </aside>

            </div>
</template>

<script>
export default {
name:'SideBar'
}
</script>

<style>

</style>
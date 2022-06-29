<template >
  <nav class="p-5">
  <div class="container flex flex-wrap justify-between items-center mx-auto">
    <router-link to="/" class="">
      <h1 class="text-xl font-bold"> Learners Hub</h1>                   
      </router-link>
    <button data-collapse-toggle="mobile-menu2" type="button" class="btn-collapse" aria-controls="mobile-menu2" aria-expanded="false">
      <!-- <span class="sr-only">Open main menu</span> -->
      <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
      <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
    <div class="hidden w-full md:block md:w-auto"  id="mobile-menu2">
      <ul class="flex  flex-col mt-4 md:flex-row  md:space-x-8  md:mt-0 md:text-sm md:font-medium">
          <li class="md:mr-5 flex btn w-full mx-auto">
           <form class="flex">
                        <input class="border p-2 rounded-md outline-none w-78 md:w-52" type="search"
                            placeholder="Search Courses" aria-label="Search">
                        <button class="btn-card bg-primary text-secondary-100 ml-2 " type="submit">Search </button>
                    </form>
            </li>
        <li class="flex justify-center btn bg-slate-200 md:bg-transparent w-full md:w-1/2 mx-auto">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                                class="bi bi-person-fill" viewBox="0 0 16 16">
                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                            </svg> <span class="ml-1 text-slate-800 ">Christiana</span>
          </li>
          
          <li class="btn bg-slate-200 md:bg-transparent w-full md:w-1/2 mx-auto">
           <router-link to="/" > Logout</router-link>
                        
          </li>
          <li class="flex justify-center btn bg-slate-200 md:bg-transparent w-full md:w-1/2 mx-auto">
         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                class="bi bi-bell-fill" viewBox="0 0 16 16">
                                <path
                                    d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
                            </svg>
          </li>
          
      </ul>
    </div>
  </div>
</nav>




    
</template>

<script>
export default {
    name: 'NavUser'
}
</script>

<style>
</style>
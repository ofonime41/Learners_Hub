<template>
  <nav class="p-5">
  <div class="container flex flex-wrap justify-between items-center mx-auto">
    <router-link to="/" class="">
      <h1 class="text-xl font-bold"> Learners Hub</h1>                   
      </router-link>

      <router-link to="/dashboard" class="">
      <h1 class="text-xl font-bold">dashboard</h1>                   
      </router-link>
   
    <button data-collapse-toggle="mobile-menu" type="button" class="btn-collapse" aria-controls="mobile-menu" aria-expanded="false">
      <!-- <span class="sr-only">Open main menu</span> -->
      <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
      <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
    <div class="hidden w-full md:block md:w-auto"  id="mobile-menu">
      <ul class="flex  flex-col mt-4 md:flex-row  md:space-x-8  md:mt-0 md:text-sm md:font-medium">
          <li class="md:mr-5 bg-slate-500 btn text-white w-1/2 mx-auto">
            <router-link to="/login">Login</router-link>
            </li>
        <li class="bg-primary btn text-white w-1/2 mx-auto">
           <router-link to="/signup">Register</router-link>
          </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
name:'NavBar'
export default {

}
</script>

<style>

</style>
<template>
  <div class="pt-12 container mx-auto ">
    <div class=" mx-auto  border-2  md:w-3/12 lg:w-5/12 rounded-md shadow-xl">
      <h5 class="py-5 pl-4 text-xl font-semibold border-b-2">Create an account</h5>

      <div class="p-4">

        <form action="">
          <div class="mb-5 flex flex-col">
            <label for="name" class="">Full Name:</label>
            <input type="text" class="border p-2 rounded-md outline-none" id="name">
          </div>
          <div class="mb-5  flex flex-col">
            <label for="email" class="">Email:</label>
            <input type="email" class="border p-2 rounded-md outline-none" id="Email">
          </div>
          <div class="mb-5  flex flex-col">
            <label for="password" class="">Password:</label>
            <input type="password" class="border p-2 rounded-md" id="password">
          </div>
          <div class="mb-5  flex flex-col">
            <label for="comfirm_password" class="">Confirm Password:</label>
            <input type="password" class="border p-2 rounded-md outline-none" id="comfirm_password">
          </div>
          <div class="border rounded-t-md py-4 text-center">
        <button type="button" action="submit"
          class=" btn bg-primary w-2/3 text-secondary-100 hover:bg-slate-600">Submit</button>
      </div>
        </form>
 
      </div>
      
    </div>
  </div>
</template>

<script>

export default {
 name: 'signup'

}
</script>

<style>
</style>
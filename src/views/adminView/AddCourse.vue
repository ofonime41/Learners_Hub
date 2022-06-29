<template>
       
      <h5 class="text-xl font-semibold mt-10 text-center">Add Course</h5>
      
       <section class="card-shadow rounded-md mt-10 p-5 mx-auto md:w-full lg:w-10/12 ">
 

      <div class=" mx-auto  border-2 ">
        <div class="p-4 ">

          <form action="">

            <div class="mb-5  flex flex-col">
              <label for="title" class="">Course Title:</label>
              <input type="text" class="border p-2 rounded-md outline-none" id="title">
            </div>

            <div class="mb-5  flex flex-col">
              <label for="desscription" class="">Course Description:</label>
              <textarea type="text" rows="10" class="border p-2 rounded-md outline-none" id="description"></textarea>
            </div>

            <div class="my-5 flex flex-col">
              <label for="image" class="">Upload Image</label>
                <input type="file" src ="" class="border rounded-md outline-none" id="image">
            
            </div>

                <div class="my-5 flex flex-col">
              <label for="vieo" class="">Upload Video</label>
                <input type="file" src ="" class="border rounded-md outline-none" id="video">
            
            </div>
            
            

          </form>

        </div>
        <div class=" py-4 text-center">
          <button type="button" action="submit"
            class=" btn bg-primary w-2/3 text-secondary-100 hover:bg-slate-600">Add</button>
        </div>
      </div>

    </section>
</template>

<script>
export default {
  name:'AddCourse',

   components: {
      
    },


}
</script>

<style scoped>

</style>
<template>
  <div class="card">


    <div class="">
      <div>
        <slot name="image"></slot>

      </div>
      <div class="px-3">
        <h5 class="card-title">
          <slot name="card_title"> </slot>
        </h5>
        <p class=" text-sm mb-3"><i>
            <slot name="card_text1"> </slot>
          </i></p>
        <p class="text-sm mb-3">
          <slot name="card_text2"> </slot>
        </p>

        <StarComponent/>
      </div>
      <router-link to="/preview">
            <p class="btn-card w-full text-sm bg-primary text-white absolute top-full">Find Out More</p>
        
          </router-link>
    

    </div>


  </div>

</template>

<script>
import StarComponent from '@/components/commonComponent/StarComponent.vue'

export default {
  name: 'CourseCard',
components:{
    StarComponent,
    
}
}
</script>

<style>
</style>
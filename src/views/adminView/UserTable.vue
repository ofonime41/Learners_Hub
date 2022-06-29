<template>

  <form class="flex -mt-5 mb-5 mx-10">
    <input class="border p-2 rounded-md outline-none w-1/2 md:w-96" type="search" placeholder="Search User"
      aria-label="Search">
    <button class="btn-card shadow-md bg-primary text-secondary-100 ml-1 w-32 " type="submit">Search </button>
  </form>

  <h5 class="text-xl font-semibold mt-10 text-center">User Table</h5>

  <section class="card-shadow rounded-md mt-10 p-5 mx-auto md:w-full lg:w-11/12 ">

    <div class="relative overflow-x-auto ">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              User ID
            </th>
            <th scope="col" class="px-6 py-3">
              User Name
            </th>
            <th scope="col" class="px-6 py-3">
              Current Enrolled
            </th>
            <th scope="col" class="px-6 py-3">
              Completed
            </th>

            <th scope="col" class="px-6 py-3">
              Recommendation
            </th>

          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700" v-for="user in usersList" :key="user">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
              {{ user.id }}
            </th>

            <td class="px-6 py-4">
              {{ user.name }}
            </td>
            <td class="px-6 py-4">
              {{ user.enrolled }}
            </td>
            <td class="px-6 py-4">
              {{ user.completed }}
            </td>
            <td class="px-6 py-4">
              {{ user.recommendation }}
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
  name: 'UserTable',

  components: {
    PaginationComponent
  },

  data() {
    return {
      usersList: [
        { id: 1, name: 'Mary Joyce', enrolled: 'comlpete web developer course, Data analysis', completed: 'UI/UX, Information security', recommendation: ' Cyber security, blockchain technology' },
        { id: 2, name: 'Mathew Eric', enrolled: 'UI/UX, Information security', completed: ' Data analysis', recommendation: 'comlpete web developer' },
        { id: 3, name: 'John Doe', enrolled: 'Cyber security, blockchain technology', completed: 'UI/UX, Information security', recommendation: 'Android' },
        { id: 4, name: 'Victor Attah', enrolled: 'Technical Writing, Blockchain', completed: 'UI/UX, Information security', recommendation: 'Technical Writing' },
        { id: 5, name: 'Peter Johnson', enrolled: 'UI/UX, Information security', completed: 'Technical Writing ', recommendation: 'Cyber security, blockchain technology' },


      ]
    }
  }

}
</script>

<style>
Footer {
  margin: 0px !important;
}
</style>
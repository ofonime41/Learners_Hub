<template>
  <section>

        <div>
            <div class="absolute top-50 left-0  w-screen">
                <button @click="tog()" class="text-black text-2xl p-2 font-bold"><i style="font-size:30px"
                        class="fa text-teal-500">&#xf137;</i>
                </button>
            </div>

            <nav :class="open ? 'navbar-open' : 'navbar-close'"
                class="navbar w-64 absolute  bg-gray-100 top-0 h-screen">
                <div class="flex pr-2 justify-end">
                    <button @click="tog()" class="p-2 text-black text-xl font-bold ">&#9747;</button>
                </div>
                <div>

                    <div>

                        <aside class="w-64" aria-label="Sidebar">
                            <div class="overflow-y-auto py-4 bg-gray-50  dark:bg-gray-800">
                                <h5 class="font-bold text-center text-lg">Course Content</h5>
                                <ul class="space-y-2 bg-teal-700 p-2 text-white ">

                                    <li class="text-lg border-b-2 py-2 my-4 hover:o">
                                        <input class="ml-1 rounded text-green-600" type="checkbox" value="">
                                        <a href="#" class="ml-2">Lesson 0: What you will learn in this
                                            course</a>
                                    </li>

                                    <li class="  text-lg border-b-2 py-2 ">
                                        <input class="ml-1 rounded text-green-600" type="checkbox" value="">
                                        <a href="#" class="ml-2">Lesson 0: What you will learn in this
                                            course</a>
                                    </li>
                                    <li class="  text-lg border-b-2 py-2">
                                        <input class="ml-1 rounded text-green-600" type="checkbox" value="">
                                        <a href="#" class="ml-2">Lesson 0: What you will learn in this
                                            course</a>
                                    </li>


                                </ul>
                            </div>
                        </aside>

                    </div>

                </div>
            </nav>

            <!-- NEXT AND PREVIOUS BUTTON -->
            <div class="relative   w-screen text-white text-3xl">
                <button class="absolute top-48 left-5 fa ">&#xf100;</button>
                <button class="top-48 right-10 absolute fa">&#xf101;</button>
            </div>
           
            <!-- VIDEO FRAME -->
            <div class="bg-gray-900 py-8 my-8 text-center ">
                <div class=" text-white container mx-auto">
                    <h3 class="mb-4">Introduction to HTML</h3>
                    <video class=" md:w-1/2 w-full md:mx-auto" controls>
                        <source src="@/assets/img/html.mp4" type="video/mp4">
                    </video>
                </div>

            </div>

            <!-- COURSE DESCRIPTION -->
            <div class="container mx-auto">
                <h3 class="mb-4 text-center">Introduction to HTML</h3>
                <p>
                    In this lesson, the foundation for web development which is HTML is thought. You will learn the
                    basic HTML tags, and build your first project in web.
                </p>
            </div>
        </div>

    </section>

    
</template>

<script>
export default {
    name: 'CourseMain',

    data() {
        return {
            open: false
        };
    },

    methods: {
        tog() {
            this.open = !this.open;
        }
    }


}
</script>

<style>
.navbar {
    transition: all 330ms ease-out;
}

.navbar-open {
    transform: translateX(0%);
}

.navbar-close {
    transform: translateX(-100%);
}
</style>
<template>
 <main>
    <section class="py-5  ">
      <div class="container mx-auto flex flex-col-reverse md:flex-row md:space-x-20">
        <div class="py-4 text-justify leading-7">
          <h2 class="mt-7 text-4xl">Creating A better way to Learn</h2>
          <p class="pt-5">Here at Learner Hub are committed in helping you achieve your dream</p>
          <p class="">We bring learning to you in a convient and Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Animi, perferendis. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Beatae, aliquam!</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi, repellat? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Tempora, corporis!</p>

          <router-link to="/signup">
            <button class="mt-5  btn bg-primary  text-white w-99 md:w-72  p-10 text-xl hover:bg-slate-600">
              Get Started
            </button>
          </router-link>
        </div>

        <img class="" src="@/assets/img/Learnershub_bg.png">
      </div>
    </section>

    <section class="bg-secondary-100 py-5 my-5">
      <div class="container mx-auto">
        <h2 class="text-4xl text-center p-4">Why Learners Hub</h2>
        <div class=" grid md:grid-cols-2 lg:grid-cols-4 gap-5 gap-y-16 py-6">

          <div class="text-center">
            <div class="rounded-card rounded-hover ">

              <div class="px-11 py-10"><svg xmlns="http://www.w3.org/2000/svg" width="45" height="45"
                  fill="currentColor" class="bi bi-journa8lsr " viewBox="0 0 16 16">
                  <path
                    d="M5 0h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2 2 2 0 0 1-2 2H3a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1H1a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v9a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1H3a2 2 0 0 1 2-2z" />
                  <path
                    d="M1 6v-.5a.5.5 0 0 1 1 0V6h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V9h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 2.5v.5H.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H2v-.5a.5.5 0 0 0-1 0z" />
                </svg>
              </div>

            </div>
            <br>
            <h6 class="font-semibold">Broad Selection</h6>
            <p>There are various course and tracks to choose from</p>
          </div>

          <div class="text-center">
            <div class="rounded-card rounded-hover ">

              <div class="px-11 py-10"><svg xmlns="http://www.w3.org/2000/svg" width="45" height="45"
                  fill="currentColor" class="bi bi-file-person" viewBox="0 0 16 16">
                  <path
                    d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z" />
                  <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                </svg>
              </div>

            </div>
            <br>
            <h6 class="font-semibold">Worldclass Instructors</h6>
            <p>Meet and receive lessons from professionals Instructors</p>
          </div>

          <div class="text-center">
            <div class="rounded-card rounded-hover ">

              <div class="px-11 py-10"><svg xmlns="http://www.w3.org/2000/svg" width="45" height="45"
                  fill="currentColor" class="bi bi-hourglass-split" viewBox="0 0 16 16">
                  <path
                    d="M2.5 15a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11zm2-13v1c0 .537.12 1.045.337 1.5h6.326c.216-.455.337-.963.337-1.5V2h-7zm3 6.35c0 .701-.478 1.236-1.011 1.492A3.5 3.5 0 0 0 4.5 13s.866-1.299 3-1.48V8.35zm1 0v3.17c2.134.181 3 1.48 3 1.48a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351z" />
                </svg>
              </div>

            </div>
            <br>
            <h6 class="font-semibold">24/7 Support</h6>
            <p>Here at Learner Hub are commited in helping you achieve your dream</p>
          </div>

          <div class="text-center">
            <div class="rounded-card rounded-hover ">

              <div class="px-11 py-10"><svg xmlns="http://www.w3.org/2000/svg" width="45" height="45"
                  fill="currentColor" class="bi bi-phone" viewBox="0 0 16 16">
                  <path
                    d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
                  <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                </svg>
              </div>

            </div>
            <br>
            <h6 class="font-semibold">Personalized Learning</h6>
            <p>Our students learn and practice at their own pace and convience</p>
          </div>
        </div>
      </div>
    </section>

    <section class="p-5 ">
      <div class="container mx-auto">
        <h2 class="text-4xl text-center p-4 mb-4 py-8">Featured Courses</h2>

        <div class="grid lg:grid-cols-4 md:grid-cols-2 lg:gap-10 gap-20">
          <div class="hover:bg-gray-100 card" v-for="course in courses" :key="course">
            <div>
              <img :src="course.image" alt="" class="w-full">

            </div>
            <div class="px-3">
              <h5 class="card-title">
                {{ course.title }}
              </h5>
              <p class=" text-sm mb-3"><i>
                  {{ course.author }}
                </i></p>
              <p class="text-sm mb-3">
                {{ course.description }}
              </p>
              <StarComponent />
            </div>
            <router-link to="/preview">
              <p class="btn-card w-full text-sm bg-primary text-white absolute top-full">Find Out More</p>

            </router-link>


          </div>

        </div>
        <router-link to="/course_list">
          <p class="mt-20  text-center"><a class="btn bg-slate-100 border-primary border-2">
              View More Courses</a></p>

        </router-link>

      </div>

    </section>

  </main>
 
</template>

<script>

export default {
  name: 'HomeView',

  data() {
    return {
      courses: [
        {
          title: "Complete Web Developer Course",
          author: "Joe Allen",
          description:
            " Learn how to build a website using latest technology and tools.",
          image: require("@/assets/img/web_dev.png"),
        },

        {
          title: "UI/UX Design",
          author: "Peter Pan",
          description:
            "Take your design skills from begining to advance level with this course",
          image: require("@/assets/img/ui_Img.png"),
        },

        {
          title: "Product Management",
          author: "Mercy Bayo",
          description: "Becone  a product manager and upgrade your skill",
          image: require("@/assets/img/img.webp"),
        },
        {
          title: "Introduction to Entrepreneurship",
          author: "Christy Tony",
          description:
            "Discover the business part of your skill and occupation.",
          image: require("@/assets/img/ui_Img.png"),
        },
      ],
    };
  },
}
</script>

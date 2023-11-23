
<template>
  <div class="grid sm:grid-cols-3 gap-7 justify-items-center m-16">
    <!-- Column 1: Image -->
    <div class="bg-white rounded-lg shadow-xl overflow-hidden">
      <!-- <img
          class="h-[400px] w-[300px] object-cover"
          src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/74xTEgt7R36Fpooo50r9T25onhq.jpg"
          alt="Placeholder Image"
        /> -->
      <img
        class="h-[400px] w-[300px] object-cover"
        :src="poster"
        alt="Placeholder Image"
      />
    </div>

    <!-- Column 2: Title, Overview, revenue, Buy Button -->
    <div class="sm:col-span-2 mx-5 rounded-lg px-5 bg-white shadow-xl">
      <h1 class="font-bold text-2xl mb-5">{{ title }}</h1>
      <h3 class="font-semibold text-lg mb-5">Release Date: {{ date }}</h3>
      <!-- <p class="text-gray-700 text-md mb-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem repellendus unde doloremque tenetur! Inventore dolorem, consequatur provident amet excepturi voluptates facilis laboriosam distinctio quidem obcaecati veritatis pariatur? Voluptatibus nulla perspiciatis quos fugiat possimus animi obcaecati.
      </p> -->
      <p class="text-gray-700 text-md mb-8">
        {{ overview }}
      </p>

      <p class="text-gray-700 text-md">Revenue: $ {{ revenue }}</p>

      <div class="mt-6">
        <NuxtLink
          to="https://www.youtube.com/"
          target="_blank"
          class="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded"
        >
          Watch Trailer
        </NuxtLink>
        <button
          class="bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-4 rounded m-5"
        >
          Buy Now
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(["title", "date", "poster", "revenue", "overview"]);
</script>

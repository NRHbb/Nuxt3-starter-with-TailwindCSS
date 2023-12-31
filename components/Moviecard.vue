

<template>
  <div class="bg-white rounded-lg shadow-md overflow-hidden m-4 px-2">
    <div class="p-1 py-4 flex flex-wrap flex-col">
      <h3 class="font-semibold text-lg mb-2 text-center">{{ title }}</h3>
      <div class="overflow-hidden mb-4">
        <img
          class="h-[400px] w-[300px] object-cover object-center"
          :src="`https:/image.tmdb.org/t/p/w400/` + poster"
          alt="Placeholder Image"
        />
        <!-- <img
          class="h-[400px] w-[300px] object-cover"
          src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/74xTEgt7R36Fpooo50r9T25onhq.jpg"
          alt="Placeholder Image"
        /> -->
      </div>
      <p class="text-gray-700 text-md mb-2 px-2">Release Date: {{ date }}</p>
      <div class="mt-4 p-2 text-right">
        <NuxtLink
          :to="`movie/${movieid}`"
          class="bg-yellow-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded"
          >More Details</NuxtLink
        >
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(["movieid", "title", "date", "poster"]);

</script>


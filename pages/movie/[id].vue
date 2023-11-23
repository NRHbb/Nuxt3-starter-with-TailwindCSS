<template>
    <div>
        <Moviedetail
      :title="movie.title"
      :date="movie.release_date"
      :poster="movie.poster_path"
      :revenue="movie.revenue"
      :overview="movie.overview"
    />
    </div>
</template>

<script setup>
definePageMeta({
  layout: "custom",
});

const route = useRoute()
const { data:movies, error } = await useFetch(`/api/movies/${route.params.id}`)
// console.log(movies.value)


// const title = ref("Batman Brown City");
// const date = ref("20-01-2023");
// const poster = ref(
//   "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/74xTEgt7R36Fpooo50r9T25onhq.jpg"
// );
// const revenue = ref(45467545);
// const overview = ref(
//   "Inspired by a true story, an oddball group of cops, criminals, tourists and teens converge in a Georgia forest where a 500-pound black bear goes on a murderous rampage after unintentionally ingesting cocaine."
// );
</script>

<style lang="scss" scoped>

</style>
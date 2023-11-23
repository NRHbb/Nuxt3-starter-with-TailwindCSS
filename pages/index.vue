<template>
    <div>
        <Searchbar @search-movie="searchMovie" :search-error="searchError" />
        <div class="grid md:grid-cols-4 sm:grid-cols-1 justify-items-center bg-slate-400">
            <div v-for="movie in movies.results" :key="movie.id">
                <Moviecard :title="movie.title" :date="movie.release_date" :poster="movie.poster_path"
                    :movieid="movie.id" />
            </div>
        </div>
    </div>
</template>
  
<script setup>
const searchError = ref(false);
const searchMovie = (searchInput) => {
    if (searchInput === "") {
        searchError.value = true;
    } else if (searchInput !== "") {
        searchError.value = false;
    }
};

// fetch api movie tmdb
const {data: movies, error } = await useFetch(() => `/api/movies`);

</script>
  
<style scoped></style>
  
<template>
    <div>
        <Searchbar @search-movie="searchMovie" :search-error="searchError" />
        <div class="grid md:grid-cols-4 sm:grid-cols-1 justify-items-center bg-black">
            <div v-for="movie in movies.results" :key="movie.id">
                <Moviecard :title="movie.title" :date="movie.release_date" :poster="movie.poster_path"
                    :movieid="movie.id" />
            </div>
        </div>
    </div>
</template>
  
<script setup>

const movies = ref([])
const searchError = ref(false);
const searchMovie = async (searchInput) => {
    if (searchInput === "") {
        searchError.value = true;
    } else if (searchInput !== "") {
        searchError.value = false;
        const { data, error } = await useFetch(`/api/movies/search?searchInput=${searchInput}`);
        movies.value = data.value
    }
};

// fetch api movie tmdb
const {data, error } = await useFetch("/api/movies");
movies.value = data.value
</script>
  
<style scoped></style>
  
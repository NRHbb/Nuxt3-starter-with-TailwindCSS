<template>
    <section class="search-section bg-black py-4">
        <div class="container mx-auto md:px-40 px-5">
            <div class="flex">
                <input type="text" class="border border-yellow-500 py-2 px-4 w-full rounded-l-full focus:outline-none  focus:ring-yellow-500" placeholder="Search Movie ..." i
                v-model.lazy="searchInput">
                <button class="bg-yellow-500 hover:bg-yellow-600 text-white rounded-r-full font-medium py-2 px-4"
                type="submit"
                @click="$emit('searchMovie', searchInput)">
                    Search
                </button>
            </div>
            <span v-if="searchError" class="text-white p-4" role="alert">
                This field is required!
            </span>
        </div>

    </section>
</template>

<script setup>

const searchInput = ref("");
defineProps(["searchError"]);

</script>


<style lang="css" scoped>

</style>
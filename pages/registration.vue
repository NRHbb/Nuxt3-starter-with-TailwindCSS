<template>
    <div class="w-full max-w-lg mx-auto mt-20">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div class="text-center mb-7 text-3xl font-bold drop-shadow-xl text-orange-600 hover:text-yellow-500">
                <h3>MovieFlix.</h3>
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2" for="username">
                    Username
                </label>
                <input type="text" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" placeholder="Username">
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2" for="email">
                    Email
                </label>
                <input type="text" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" placeholder="email">
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2" for="password">
                    Password
                </label>
                <input type="text" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" placeholder="password">
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2" for="password-confirm">
                    Confirm Password
                </label>
                <input type="text" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password-confirm" placeholder="password-confirm">
            </div>
            <div class="flex items-center justify-center mt-6">
                <button class="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-8 rounded-full focus:outline-none focus:shadow-outline" type="button">
                    Sign Up
                </button>
            </div>
        </form>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'custom'
})
</script>

<style lang="css" scoped>

</style>
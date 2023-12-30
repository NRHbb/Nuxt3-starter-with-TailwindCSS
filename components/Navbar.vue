<template>
    <div>
        <nav class="bg-black">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between h-16">
                    <div class="my-4 sm:ml-6 sm:flex sm:items-center ">
                        <NuxtLink to="/">
                            <h1 class="text-sm font-bold text-white hover:text-yellow-500 sm:text-md md:text-2xl lg:text-2xl xl:text-2xl">MovieFlix.</h1>
                        </NuxtLink>
                    </div>
                    <div class="my-4 sm:ml-6 sm:flex sm:items-center">
                        <NuxtLink to="/" class="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-yellow-500 hover:text-slate-600 focus:outline-none focus:bg-yellow-500">
                            Home
                        </NuxtLink>
                        <NuxtLink to="/login" class="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-yellow-500 hover:text-slate-600 focus:outline-none focus:bg-yellow-500">
                            Login
                        </NuxtLink>
                        <NuxtLink to="/registration" class="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-yellow-500 hover:text-slate-600 focus:outline-none focus:bg-yellow-500">
                            Registration
                        </NuxtLink>
                        <NuxtLink to="/contact" class="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-yellow-500 hover:text-slate-600 focus:outline-none focus:bg-yellow-500">
                            Contact
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script setup>

</script>

<style scoped>

</style>
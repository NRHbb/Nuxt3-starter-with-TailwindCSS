<template>
    <section class="hero-section  bg-cover bg-center bg-[url('/bg-hero.jpg')]">
        <div class="backdrop-brightness-50 bg-white/10 z-10">
            <div class="container sm:mx-auto sm:p-32 p-8 ">
                <h1 class="text-6xl font-bold text-orange-600 mb-4">MovieFlix.</h1>
                <h3 class="text-lg font-bold text-white">
                    Explore the Cinematic Universe: Where Every Frame Tells a Story...
                </h3>
                <div class="mt-6">
                    <NuxtLink to="/registration"
                        class="bg-yellow-500 hover:bg-yellow-600 text-white rounded-full font-medium py-2 px-4">
                        Get Started
                    </NuxtLink>
                </div>
            </div>
        </div>

    </section>
</template>
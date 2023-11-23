<script setup>
definePageMeta({
    layout: 'custom'
})



</script>

<template>
  <div class="flex flex-col md:flex-row">
    <div class=" flex justify-center items-center sm:w-full md:w-1/2 p-8 mt-20 bg-[url('bg-contact.jpeg')] bg-cover">
        <h3 class="text-center text-7xl font-bold text-orange-600 hover:text-yellow-500 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">MovieFlix.</h3>
    </div>
    <div class="md:w-1/2 sm:w-full p-8 shadow-md lg:mt-20 sm:mt-0 bg-white">
      <form>
        <h1 class="text-2xl text-center font-bold pb-4">Contact</h1>
        <label for="name" class="block text-lg font-bold mb-2">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          class="w-full border border-gray-300 p-2 mb-4 rounded-lg"
        />
        <label for="email" class="block text-lg font-bold mb-2">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          class="w-full border border-gray-300 p-2 mb-4 rounded-lg"
        />
        <label for="message" class="block text-lg font-bold mb-2"
          >Message</label
        >
        <textarea
          id="message"
          name="message"
          class="w-full border border-gray-300 p-2 mb-4 rounded-lg"
        ></textarea>
        <button
          type="submit"
          class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</template>
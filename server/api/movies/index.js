export default defineEventHandler(async (event) => {
    const {moviekey} = useRuntimeConfig()
    try{
        const data = await $fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${moviekey}`)
        return data 
    }    catch (error){
        return null
    }
})
export default defineEventHandler(async (event) => {
    const {moviekey} = useRuntimeConfig()
    const movieid = event.context.params.id
    try{
        const data = await $fetch(`https://api.themoviedb.org/3/movie/${movieid}?api_key=${moviekey}&language=en-US&page=1`)
        return data 
    }    catch (error){
        return null
    }
})
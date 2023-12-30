export default defineEventHandler(async (event) => {
    const {movieKey} = useRuntimeConfig()
    try{
        const data = await $fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${movieKey}`)
        return data 
    }    catch (error){
        return null
    }
})
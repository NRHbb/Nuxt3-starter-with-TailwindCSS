export default defineEventHandler(async(event) => {
    const {moviekey} = useRuntimeConfig()
    // const movieid = event.context.params.id
    const {searchInput} = getQuery(event)
    try{
        const data = await $fetch(`https://api.themoviedb.org/3/movie/${movieid}?api_key=${moviekey}&language=en-US&query=${searchInput}&page=1&include_adult=false`)
        return data
    } catch(error){
        console.error(error);
        return null 
    }
})
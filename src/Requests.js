//apikey 
 
const API_KEY="8c27043c61eda3f35ea261dd6cd1053d";


 const requests ={
   fetchTrending: `trending/all/day?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
   fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,

  
 };

export default requests;
export const getUrl = (searchValue, page) => {

  const APIKEY = '0OLzi5rvV7wVGAsRmX7ugDVPFTjsOKEQ'
  let url;
  
  if (page === 1){
    url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=20&q=${searchValue}`
    return url
  }

  url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&offset=${page*20}&limit=20&q=${searchValue}`
  return url;
}
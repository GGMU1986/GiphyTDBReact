export const fetchGifs = (url) => {
  
  const gifs = fetch(url)
    .then(res => res.json())
    // .then(content => console.log(content))
    .then(content => content)
    .catch(err => console.error(err))

  return gifs;
};
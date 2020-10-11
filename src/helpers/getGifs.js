
export const getGifs = async(category) =>{
    const apiKey = "pofXeUiZ6aI5pDrymWwmn9UMy9Y0heEt";
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category)}&api_key=${apiKey}&limit=6&offset=0&rating=g&lang=en`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    const gifs = data.map(img=>{
        return {
            id:img.id,
            title:img.title,
            url:img.images?.downsized_medium.url
        }
        
    })
    return gifs;

}

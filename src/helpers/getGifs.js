

export const getGifs = async( category)=>{
        //El encode sirve para que no haya problemas con los espacios
        const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=77TpIgQLPwUWBt67v2XZQTtX7a4rtFTq`
        const resp = await fetch(url);
        const {data} = await resp.json();
        
        const gifs = data.map(img => {
            return{
                id: img.id,
                title: img.title,
                //Se le pone ? para preguntar si viene la imagen 
                url: img.images?.downsized_medium.url
            }
        })
        console.log(gifs);
        return gifs;
    }
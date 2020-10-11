// import React, { useState, useEffect } from 'react'
import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

const GifGrid = ({category}) => {
    // forma 1
    // const [images, setImages] = useState([])

    // useEffect( () => {
    //     getGifs(category).then(imgs=>setImages(imgs))
    // },[category]);
    // Forma 2 con custom hooks
    const {data:images,loading} = useFetchGifs(category);
    
    return (
        <>
            <h3>{ category }</h3>
            {loading&& <h5 className="animate__animated animate__flash">Cargando</h5>}
            <div className="card-grid">
                    {
                        images.map((img)=>(
                            <GifGridItem 
                            key={img.id}
                            {...img}  />                        
                        ))
                        
                    }

            </div>
        </>
    )
}

export{
    GifGrid
} 

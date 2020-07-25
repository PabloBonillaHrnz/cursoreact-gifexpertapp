import React from 'react';
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({category}) =>{

//Se renombro data con images
    const {data:images,loading} = useFetchGifs(category);


    
    return(
        <>
        <h1>{category}</h1>
        {
            loading && <p>Loading</p> 
        }
        <div className="card-grid animate__animated animate__fadeIn">
            <ol>
            {
                images.map((img) =>(
                    <GifGridItem key ={img.id} {...img}/>
                ))
            }
            </ol>
        </div>
        </>
    )
}
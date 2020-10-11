import React, { useState } from  'react'
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';

const GitExpertApp = ()=>{

    const [categories, setCategories] = useState([])
    // const handleAdd = ()=>{
    //     const nuevo = document.getElementById("nueva");
    //     // setCategories([...categories,nuevo.value]);
    //     // Forma con callback
    //     setCategories(cats=>[...categories,nuevo.value]);

    // }
    return(
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr />            
            <ol>
                { 
                    categories.map((category)=>(
                        <GifGrid 
                            key={category} 
                            category = {category}
                        />
                    
                    ))
                }
            </ol>
        </>
    )
}


export{
    GitExpertApp
}
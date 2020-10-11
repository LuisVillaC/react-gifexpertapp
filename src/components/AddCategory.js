import React, { useState } from 'react'
import PropTypes from 'prop-types'
export const AddCategory = ({setCategories}) => {
    
    const [inputValue, setInputValue] = useState('')
    const handleChange =(e)=>{
        setInputValue(e.target.value);
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(inputValue.trim().length>2){
            setCategories(cats=>{
                
                if(cats.find(( heroe)=> heroe === inputValue)===undefined){
                    return [inputValue,...cats];
                }else{
                    return [...cats]
                }
            }
            );
            setInputValue('');
        }

    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Agregar: </label>
            <input 
                type="text" 
                name="add" 
                value={inputValue}
                id="nueva"
                onChange={handleChange}
            />  
        </form>
    )
}

AddCategory.propTypes={
    setCategories: PropTypes.func.isRequired
}

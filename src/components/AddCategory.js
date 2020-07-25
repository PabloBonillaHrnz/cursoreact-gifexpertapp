import React,{useState} from 'react'
import PropTypes from 'prop-types';

export const AddCategory = (props) => {
    const {setCategories }=props;
    const [inputValue,setInputValue] = useState('');
    
    const handleInputChange = (e) =>{
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault(e);
        console.log('Submit Hecho');
        if(inputValue.trim().length >2 ){
            setCategories(cats =>[inputValue,...cats]);
            setInputValue('');
        }
        
    }
    return(
        <form onSubmit = {handleSubmit}>
        <input 
        placeholder= "Escribe algo"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        />
        </form>
    )
    
}
//Obliga que se reciba la función setCategories
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}

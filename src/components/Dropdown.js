import React, {  useContext } from 'react'
import {CategoriesContext} from '../hooks/CategoriesContext'

const Dropdown = () => {

    const { setCategories} = useContext(CategoriesContext)

    const ChangeCategories = e => {
       
       console.log('', e.target.value)
       setCategories(parseInt(e.target.value))
      }

    return (
    //we need to decide what categs we want here  
        <select id="select" className="select-category" onChange={(e) => ChangeCategories(e)}>
            <option>Select a Category</option>
            <option value='1'>Funny</option>
            <option value='2'>Scary</option>
            <option value='3'>Silly</option>
        </select>
    )
}

export default Dropdown
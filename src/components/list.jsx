import React from 'react'
import './list.css'
import { FaTrash } from 'react-icons/fa'; 

function Lists(props) {
    const handleChange = (e) => {
        // Check if the checkbox is checked
        const isChecked = e.target.checked;
        
        // Navigate to the grandparent element and apply styles
        const grandparentElement = e.target.parentNode.parentNode;
        if (grandparentElement) {
          grandparentElement.style.textDecoration = isChecked ? 'line-through' : 'none';
          grandparentElement.style.color = isChecked ? 'grey' : 'black';
        }
      };
  return (
    <div className='list-container'>
        <p>{props.name}</p>
        <div className="del-checkbox">
            <input type="checkbox" id={props.id} onChange={handleChange}/>
            <label htmlFor="myCheckbox"></label>
            <FaTrash style={{ color: '#B22222', fontSize: '1.5rem', cursor: "pointer"}} onClick={() => props.onDelete(props.id)}/>
        </div>
    </div>
  )
}

export default Lists

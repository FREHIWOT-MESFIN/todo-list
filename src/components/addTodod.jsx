import React, { useState, useEffect } from 'react';
import Lists from './list';
import { format } from 'date-fns';

function AddTodo() {
  const [list, setList] = useState([]);

  useEffect(() => {
    const savedList = localStorage.getItem('tasks');
    if (savedList) {
      try {
        const parsedList = JSON.parse(savedList);
        setList(parsedList);
      } catch (error) {
        console.error('Error parsing JSON from localStorage:', error);
      }
    }
  }, []); 


  useEffect(() => {
    console.log('Saving tasks to localStorage:', list);
    localStorage.setItem('tasks', JSON.stringify(list));
  }, [list]);

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      const newName = e.target.value.trim();
      if (newName) {
        const newList = {
          id: Date.now(),
          name: newName,
        };
        setList((prev) => [...prev, newList]);
        e.target.value = '';
      }
    }
  };

  const deleteTask = (id) => {
    setList((prev) => prev.filter((task) => task.id !== id));
  };

  const date = new Date();
  const formattedDate = format(date, 'EEEE, dd MMMM yyyy');

  return (
    <div>
      <p style={{ color: '#AB86EC' }}>{formattedDate}</p>
      <hr />
      <input
        type="text"
        name="addTodo"
        id="addTodo"
        placeholder="Add a new task..."
        onKeyDown={handleEnter}
      />
      {list.map((item) => (
        <Lists key={item.id} name={item.name} onDelete={deleteTask} id={item.id} />
      ))}
    </div>
  );
}

export default AddTodo;

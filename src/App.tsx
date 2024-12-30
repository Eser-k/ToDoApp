import React, {useState} from 'react';
import './App.css';
import { ToDoTable } from './components/ToDoTable';
import { NewTodoForm } from './components/newTodoForm';

export const App = () => {

  const [showAddToDoForm,setShowAddToDoForm] = useState(false);

  const [todos,setTodos] = useState([
      {rowNumber : 1, rowDescription :'Feed yappi', rowAssigned : 'User 1'},
      {rowNumber : 2, rowDescription : 'Water platns', rowAssigned : 'User 2'},
      {rowNumber : 3, rowDescription : 'Make Dinner', rowAssigned : 'User 1'}
    ]
  )

  const addToDo = (description : string, assigned : string) => {

    let rowNumber = 0;

    if(todos.length > 0){
      rowNumber = todos[todos.length-1].rowNumber + 1;
    }
    else{
      rowNumber = 1;
    }
      const newTodo = {
        rowNumber : rowNumber,
        rowDescription : description,
        rowAssigned : assigned
      };

      setTodos(todos => [...todos,newTodo]);
    
  }

  const deleteTodo = (deleteTodoRowNumber : number) =>{
    let filtered = todos.filter(function (value){
      return value.rowNumber !== deleteTodoRowNumber;
    });
    setTodos(filtered);
  }

  return (
    <div className = 'mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          Your Todo's
        </div>
        <div className='card-header'>
          <ToDoTable todos={todos} deleteTodo={deleteTodo}/>
          <button className='btn btn-primary' onClick={() => setShowAddToDoForm(!showAddToDoForm)}>
            {showAddToDoForm ? 'Close' : 'Add new Todo'} 
          </button>

        {showAddToDoForm &&
          <NewTodoForm addToDo={addToDo}/>
        }
        </div>
      </div>
    </div>
  );
}



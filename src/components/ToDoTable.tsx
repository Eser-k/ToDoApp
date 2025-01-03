import { ToDoRowItem } from "./ToDoRowItem";
import React from "react";

export const ToDoTable : React.FC<{
todos:ToDoModel[], deleteTodo : Function
}> = (props) => {
    return(
        <table className='table table-hover'>
            <thead>
                <tr>
                    <th scope='col'>#</th>
                    <th scope='col'>Description</th>
                    <th scope='col'>Assigned to</th>
                </tr>
            </thead>

            <tbody>

                {props.todos.map(todos => (
                    <ToDoRowItem 
                     key = {todos.rowNumber}   
                     rowNumber={todos.rowNumber}
                     rowDescription={todos.rowDescription}
                     rowAssigned={todos.rowAssigned}
                     deleteTodo = {props.deleteTodo}/>
                ))}
            </tbody>
          
        </table>
    )
}

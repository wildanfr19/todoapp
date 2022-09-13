import React, { useState } from "react";
import Paper from '../components/paper/Paper'; 
import Header from '../components/header/Header'; 
import TodoForm from '../components/todoform/TodoForm';
import Todos from '../components/todos/Todos';



const TodoList = () => {
    const [ todos, setTodos ] = useState([
    ]);
    const [showAdd, setShowAdd] = useState(false);
    const addTodo = value => {
        if(todos.length <10) {
          const addedTodo = [...todos, { text: value, isCompleted:false }];
          setTodos(addedTodo); 
       } else {
          alert("Maaf, Hanya 10 Daftar Yang Dapat Disimpan");
       }

               
        
    };

    const completeTodo = (index) => {
        const addedTodo = [...todos];
        setTodos(addedTodo);
    }

 
   
    const clearTodos = () => !showAdd && setTodos([]);
    const showAddToggle = () =>  setShowAdd(!showAdd);
  

    console.log("todos", todos)

    return (
        <Paper>
               <Header showAddToggle= { showAddToggle } 
               showAdd= { showAdd } 
               clearTodos = { clearTodos} />
               <TodoForm addTodo= { addTodo } showAdd={showAdd} /> 
                <Todos todos={ todos } completeTodo = {completeTodo} />
              
        </Paper>
      );
}
  


export default TodoList;

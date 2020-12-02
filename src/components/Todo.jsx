import React from "react";
import PropTypes from 'prop-types';

const Todo = ({text, completeTodo,index, isCompleted}) => {

    /* < style= {{ textDecoration: isCompleted ? 
         'line-through': 'initial'}}> = merupakan style css di dalam react,
         textDecoration = utk memodifikasi text,
         'line-through' = utk memberikan garis coret
         'initial' = untuk tampilan normal seperti semula 
         
          {{ isCompleted ? 
         'line-through': 'initial' }} => merupakan ternary operator*/
    return (
    <div className="todo" onClick={ () => completeTodo(index)}>
        <span className="todo-text" style= {{ textDecoration: isCompleted ? 
         'line-through': 'initial'}}>
         { text }
         </span>
    </div>
    )
}

Todo.propTypes = {
    text: PropTypes.string.isRequired,
    completeTodo: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
    isCompleted: PropTypes.bool.isRequired
}

export default Todo;
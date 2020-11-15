import React from 'react';

import Todo from './Todo'; 
import { arrayExpression } from '@babel/types';

const Todos = () => {

   const todos = [
    {
        text: "Learn React"
    },
    {
        text: "Belajar Props"
    },
    {
        text: "Belajar Props"
    },
    {
        text: "Study React"
    },
    {
        text: "Todo"
    },
    {
        text: "Learn React"
    },
    {
        text: "Belajar Props"
    },
    {
        text: "Belajar Props"
    }
   ]

   {/* menggunakan array.map() untuk membuat proses iterasi / perulanagan
    (lebih lengkap cek di w3schools.com) */}  

   return(
    <section className="todos">
       {todos.map(todo => {
           return <Todo text = {todo.text}></Todo>
       })}
    </section>
    );
}

export default Todos;
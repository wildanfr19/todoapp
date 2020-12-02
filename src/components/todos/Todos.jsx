import React from 'react';
import PropTypes from 'prop-types';

import Todo from '../todo/Todo'; 
import { arrayExpression } from '@babel/types';

import styles from './todos.module.css';

const Todos = ({ todos, completeTodo }) => {

    /* Const Todos akan menerima parsing data const Todos, set Todos yang ada di
    dalam file TodoList.jsx */
  

   /* menggunakan array.map() untuk membuat proses iterasi / perulanagan
    (lebih lengkap cek di w3schools.com) */
    
     /*todos hanya bertugas untuk menampilkan / merender data todos */
     /* map meminta unique key kepada masing-masing children yang dia looping 
    atau dia return, indexnya 1 maka keynya juga adalah 1*/

   return(
    <section className="todos">
        {/* Jika Jumlah Data Todo Lebih dari 0 (ada), maka tampilkan data todolistnya 
        (menggunakan conditional renderring)*/}
        {todos.length > 0 &&  
            todos.map((todo, index) => {
                return (<Todo 
                key={index} 
                text = {todo.text}
                isCompleted = {todo.isCompleted} 
                completeTodo = {completeTodo}
                index = {index}
                />
                );
            })};

         {/* Jika Jumlah Data Todo 0 (koosng), maka tampilkan panduan placeholder cara menam
        bahkan data (menggunakan conditional renderring)*/}
       {todos.length === 0 && (
            <div className={styles.todoPlaceholderText}>
                Tambah Data List Todo Dengan Cara Klik Tombol
                <span className={styles.addButtonPlaceholderText}> Tambah </span> 
                Pada Pojok Kiri Atas
            </div>
       )};
       

    </section>
    );
};

/* apabila data tersebut (yang berada di file TodoList.jsx) bersifat array,
  maka gunakan arrayOf(PropTypes.shape({})) */

Todos.propTypes = {

    todos: PropTypes.arrayOf(
        PropTypes.shape({
        text: PropTypes.string
    })
    ),

    completeTodo: PropTypes.func.isRequired
};

export default Todos;
import React, { useState } from "react";

import Paper from '../components/paper/Paper'; /* mengambil / mengimport file Paper.jsx yang berada
                                                di folder components */
/* Tag <Paper> didapat dari nama import file Paper yang telah didefinisikan 
    sebelumnya, agar bisa digunakan berulang-ulang (reusable) untuk memudahkan didalam membuat
    tamplan   </Paper> */
import Header from '../components/header/Header'; /*../ = artinya apabila dari file TodoList.jsx mau 
                                                ke file Header.jsx, maka naik 1 tingkat (direktori) ke folder components
                                                kemudian turun 1 tingkat (lebih deep) ke file Header.jsx */
import TodoForm from '../components/todoform/TodoForm';
import Todos from '../components/todos/Todos';


/* TodoList merupakan minimum viable product */
const TodoList = () => {

    /* const todos, setTodos menampung array of object, agar lebih unified (data berada
        ada di pusat), const todos merupakan array yang berisi sebuah objek */
    /* keynya adalah text dan valuenya adalah "Study React" */ 
    
     /* setTodos berfungsi untuk mengupdate data tsb entah data itu dihapus atau
     ditambahkan */ 

    const [ todos, setTodos ] = useState([
        // { text: "Study React", isCompleted: false},
        // { text: "Styling React In CSS", isCompleted: false},
        // { text: "Kuy Lahh", isCompleted: false}
    ]);

    /*const (variabel) showAdd bernilai awal false (didapatkan dari useState(false)) */
    /* showAdd berfungsi untuk menampilkan form tambah ketika tombol tambah yang diatas diklik */
    const [showAdd, setShowAdd] = useState(false);

    /* const addTodo akan mentriggger sebuah constant berupa array, dmana valuenya adalah
    value terbaru dari todos ditambah dengan objek terbaru, setelah itu maka addedTodo
    kita taruh disetTodos sehingga addTodo akan mengupdate.
    addTodo ada di data list todo */ 

    /*Two Ways Data Binding kita mengupdate data, maka data akan mengupdate view atau 
    apa yang ter -render */
    
    const addTodo = value => {

    /*apabu\ila data todo nya kurang dari 10, maka masih bisa ditambahkan datanya */
        if(todos.length <10) {

        const addedTodo = [...todos, { text: value, isCompleted:false }];

        setTodos(addedTodo); 
       } else {

        alert("Maaf, Hanya 10 Daftar Yang Dapat Disimpan");
       }

               
        
    };

    const completeTodo = (index) => {

        const addedTodo = [...todos];
        /* !addedTodo diambil dari const addedTodo yang ada di line ke 53 */
        addedTodo[index].isCompleted = !addedTodo[index].isCompleted ; /**  list todo yang berupa array*/

        setTodos(addedTodo);
    }

    /*clearTodos merupakan suatu function berisi (nilai) setTodos yang bernilai array kosong. 
    function clearTodos berfungsi untuk merefresh daftar list todo yang sebelumnya datanya masih ada,
    menjadi kosong
    
    jika function showAdd bernilai false (ketika sudah klik selesai
        pada proses penambahan data todo), maka jalankan perintah clearTodos
    (untuk menghapus data data todo). setTodos merupakan sebuah array kosong
    */
    const clearTodos = () => !showAdd && setTodos([]);

    /* Toggle adalah sebuah button ketika ditekan pertama dia akan on
    maka ketikd ditekan lagi dia akan off (untuk tombol button tambah yang ada
        di atas / header)  */
    const showAddToggle = () =>  setShowAdd(!showAdd);
    /* property index akan menjadi acuan, mana properti (data) yang akan menjadi bernilai true
    (listnya cicoret), index = 0,1,2,3*/
   

    console.log("todos", todos);


     /* consolo.log hanya dipakai pada saat debugging atau 
     proses development*/
    /* Todoform = form yang digunakan untuk menambah data list todo */
    /* Todos = daftar data todo yang telah ditambahkan */

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

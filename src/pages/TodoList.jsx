import React from "react";

import Paper from '../components/Paper'; /* mengambil / mengimport file Paper.jsx yang berada
                                                di folder components */
/* Tag <Paper> didapat dari nama import file Paper yang telah didefinisikan 
    sebelumnya, agar bisa digunakan berulang-ulang (reusable) untuk memudahkan didalam membuat
    tamplan   </Paper> */
import Header from '../components/Header'; /*../ = artinya apabila dari file TodoList.jsx mau 
                                                ke file Header.jsx, maka naik 1 tingkat (direktori) ke folder components
                                                kemudian turun 1 tingkat (lebih deep) ke file Header.jsx */
import TodoForm from '../components/TodoForm';
import Todos from '../components/Todos';


const TodoList = () => {
    return (
        <Paper>
               <Header>
               </Header>
    
               <TodoForm>
               </TodoForm>
                
                <Todos>
                </Todos>
              
        </Paper>
      );
}
  


export default TodoList;

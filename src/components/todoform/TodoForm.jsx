import React, { useState } from 'react'; /* useState berfungsi untuk melakukan penyimpanan database
                                            secara sementara baik dari dirinya sendiri maupun dari luar 
                                        useState("") mendefinisikan bahwa nilai valu berisi string kosong*/
import PropTypes from 'prop-types';

import styles from './todoform.module.css';

/* React hanya bertugas mengcompile code yang dari const, sampai ke
codingan yang return html */

{ /*( { addTodo } ) merupakan props, sehingga bisa dideklarasikan requirementnya pada proptypes */ }
const TodoForm = ( { addTodo, showAdd } ) => {  
    const [ value, setValue ] = useState("");

    const handleFormSubmit = e => {
        e.preventDefault(); /* untuk menghindari refreshing page */

        if (!value) {
            
        alert ("Tidak ada pesan yang harus dilakukan");
        return; {/* apapun perintah yang dibawah if condition, tidak akan dijalankan */}
        } 


        /* Jika Panjang Karakter Di Todoform Lebih dari 35 Karakter, maka tidak bisa menyimpan
        datanya */
        if(value.length >35){

            alert("Jumlah Karakter Maks Untuk Menambahkan List Sebanyak 35 Karakter");
            setValue("");
            return;
        }

        { /* memberikan deklarasi props addTodo  */ }
        addTodo(value);

        setValue(""); {/* menampilkan string kosong di input text ketika setelah pesan alert dimunculkan */}
    };

    /*Conditional Renderring */
    if(showAdd){

        {/*  onSubmit={ handleFormSubmit } = menjalankan function handleFormSubmit ketika tombol disubmit*/}
    return (
        <section className={styles.add}>
            <form className={styles.addForm} onSubmit={ handleFormSubmit }>
                <input type="text" className={styles.addInput} value = { value } onChange = { e => setValue(e.target.value)}  /> {/* setValue akan menerima value dari input */}
                <button className={styles.addBtn}>Tambah</button>
            </form>
        </section>
    );
    } else {

        return null;
    }

    // console.log("value", value);

   
};

{ /* memberikan requirement  props addTodo (dengan cara nama props.PropTypes)  */ }
TodoForm.propTypes = {
    
    addTodo: PropTypes.func.isRequired,
    showAdd: PropTypes.bool.isRequired,
}

export default TodoForm;
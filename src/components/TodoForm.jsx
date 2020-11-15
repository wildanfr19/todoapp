import React, { useState } from 'react'; {/* useState berfungsi untuk melakukan penyimpanan database
                                            secara sementara baik dari dirinya sendiri maupun dari luar 
                                        useState("") mendefinisikan bahwa nilai valu berisi string kosong*/}
import PropTypes from 'prop-types';

const TodoForm = ( { addTodo } ) => {
    const [ value, setValue ] = useState("");

    const handleFormSubmit = e => {
        e.preventDefault();

        if (!value) {
            
        alert ("Tidak ada pesan yang harus dilakukan");
        return; {/* apapun perintah yang dibawah if condition, tidak akan dijalankan */}
        } 


        addTodo(value);

        alert(value); {/* akan menampilkan data yang sesuai dengan yang diinput di pesan alert */}
        setValue(""); {/* menampilkan string kosong di input text ketika setelah pesan alert dimunculkan */}
    };

    console.log("value", value);

    {/*  onSubmit={ handleFormSubmit } = menjalankan function handleFormSubmit ketika tombol disubmit*/}
    return (
        <section classNameName="add">
            <form className="add-form" onSubmit={ handleFormSubmit }>
                <input type="text" className="add-input" value = { value } onChange = { e => setValue(e.target.value)}  /> {/* setValue akan menerima value dari input */}
                <button className="add-btn main-black-color">Tambah</button>
            </form>
        </section>
    );
};

TodoForm.propTypes = {
    
    addTodo: PropTypes.func.isRequired
}

export default TodoForm;
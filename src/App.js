import './App.css';
import './Styles.css';
import './Homemadeapplefont.css';
import './Bungeefont.css';

function App() {
  return (
    <div className="container">
        <div className="frame">
            <section className="header">
                    <button className="header-btn main-black-color">Tambah</button>
                    <h1 className="header-title">Todo list</h1>
                   
                    <button className="header-btn main-red-color">Hapus</button> 

            </section>

            <section classNameName="add">
                <form className="add-form">
                    <input type="text" className="add-input"/>
                    <button className="add-btn main-black-color">Tambah</button>
                </form>
            </section>

            <section className="todos">
                <div className="todo">
                    <span className="todo-text">Belajar React</span>
                </div>
                <div className="todo">
                    <span className="todo-text">Belajar React</span>
                </div>
                <div className="todo">
                    <span className="todo-text">Belajar React</span>
                </div>
                <div className="todo">
                    <span className="todo-text">Belajar React</span>
                </div>
                <div className="todo">
                    <span className="todo-text">Belajar React</span>
                </div>
                <div className="todo">
                    <span className="todo-text">Belajar React</span>
                </div>
            </section>
        </div>
    </div>
  );
}

export default App;

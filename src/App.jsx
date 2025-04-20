
import Input from './component/learn/Input'
import ToDoList from './component/learn/ToDoList'
import './component/todo/todo.css'
import Image from './assets/react.svg';
function App() {

  //code here
  const hoiDanit = "Eric";
  const age = 25;
  const data = {
    address: "Germany",
    phone: "0123456789"
  }

  const addNewTo = (name) => {
    alert(`Add new ToDo ${name}`)
  }

  return (
    <div className="todo-container">
      <h1 className="todo-title">ToDo List</h1>
      <Input
        addNewTo={addNewTo}
      />
      <ToDoList
        name={hoiDanit}
        age={age}
        data={data}
      />
      <div className='todo-img'>
        <img src={Image} />
      </div>
    </div>
  )
}
export default App

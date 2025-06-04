
import ParentComponent from './component/learn/ParentComponent';
import './component/todo/todo.css'
import React from 'react';
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
    <div >

      <ParentComponent />
    </div>
  )
}
export default App

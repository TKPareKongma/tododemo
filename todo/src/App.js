import React, {useState} from 'react'

function App() {

  const [todoList, setTodoList] = useState(["task 1"])
  const [text, setText] = useState("")

  const onTextChange = ({target: {value}}) =>{

      console.log(value);



      setText(value)
  }
  
  const AddTask =() => {

    setTodoList([
      ...todoList,
      text



    ])

  }


  return (
    <div>

      <input type="text" value={text} onChange={ onTextChange }/>
      <button onClick={AddTask}>Add task</button>
    

      <div className="todo">
        { 2 + 1 }
      </div>

      <div className="todo">
        task 2
      </div>

    </div>
  )
}

export default App;

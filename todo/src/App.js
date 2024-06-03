import React, {useState} from 'react'

function App() {

  const [todoList, settodoList] = useState(["task 1"])
  const [text, setText] = useState("")

  const onTextChange = ({target: {value}}) => {

    console.log(value);


    setText(value)

  }

  const addTask = () => {

    settodoList([
      ...todoList,
      text
    ])


  }

  return (
    <div>

      <div>
        <input type="text" value={text} onChange={ onTextChange } />
        <button onClick={addTask} >Add Task</button>
      </div>

      <div>
        {

         todoList.map((todo, index) => {
          return (
            <div className="todo" key={index} >
              {todo}
            </div>


          )
          })   
        }

      </div>


      <div className="todo">
        task 2
      </div>

    </div>
  )
}
export default App;
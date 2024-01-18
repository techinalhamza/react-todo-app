import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [addList, setAddList] = useState('')
  const [items, setItems] = useState([])

  const handleChange = (e) => {
    setAddList(e.target.value)

  }
  const add = () => {
    setItems((oldVal) => {
      return [...oldVal,addList]  
    })
    setAddList('')
  }

  return (
    <>
      <div className='w-1/4 bg-slate-300  py-4 m-auto my-20 flex flex-col justify-center items-center' >
        <div className='w-full bg-purple-300 px-6'>
          <h1 className='text-center  font-bold'>to do app</h1>
        </div>
        <div className=' w-1/ ml-16   mt-8 '>
          <input
            type="text"
            placeholder='add a task'
            value={addList}
            onChange={handleChange}
            className='w-1/ px-4 py-2  m-auto mt-4 bg-transparent border-b-4 border-red-400 outline-none '
          />
          <button className='' onClick={add}>+</button>
        </div>

        <ol id='list' className='mt-8 py-5 '>
          {items.map((val) => {
            return <li>{val}</li>;
          })}
        </ol>
      </div>

    </>
  )
}

export default App

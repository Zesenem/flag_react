import { useState } from "react"

export default function FuncComp() {

    const [name, setName] = useState('') // useState is a hook that allows you to add state to functional components


    const handleChange = (e) => {
        setName(e.target.value) // setName is a function that updates the state
    }

  return (
    <div>
    <h1>Function</h1>
      <p>My name is: {name}</p>
      <input type="text" value={name} onChange={handleChange}/>
    </div>
  )
}

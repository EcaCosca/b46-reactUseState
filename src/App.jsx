import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import Form from './components/Form'
import FruitList from './components/FruitList'

function App() {
  const [user, setUser] = useState({
      firstName: "Enrique",
      lastName: "Coscarelli",
      email: "ecosca@wbs.com",
      age: 35
  })

  return (
    <>
      <h1>Intro to React</h1>

      <h2>Counter</h2>
      <Counter />

      <h2>Fruit List</h2>
      <FruitList />

      <h2>User Form</h2>
      <Form user={user} setUser={setUser}/>

    </>
  )
}

export default App

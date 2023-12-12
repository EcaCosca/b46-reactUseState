import { useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import Form from './components/Form'
import FruitList from './components/FruitList'

function App() {

  return (
    <>
      <h1>Intro to React</h1>

      {/* <h2>Counter</h2>
      <Counter /> */}

      <h2>Fruit list</h2>
      <FruitList />

      {/* <h2>Form</h2>
      <Form /> */}

    </>
  )
}

export default App

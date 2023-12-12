import React, {useState} from 'react'

const FruitList = () => {
    const [fruits, setFruits] = useState([
        "Banana",
        "Apple",
        "Orange"
    ])

    const [newFruit, setNewFruit] = useState("")

    const handleChange = (event) => {
        console.log(event.target.value)
        setNewFruit(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(newFruit)
        // setFruits([newFruit, ...fruits])
        setFruits(prevState => [newFruit, ...prevState])
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Add a fruit" onChange={handleChange} />
        </form>

        <ul>
            {fruits.map((fruit, index) => (
                <li key={index}>{fruit}</li>
            ))}
        </ul>
    </div>
  )
}

export default FruitList
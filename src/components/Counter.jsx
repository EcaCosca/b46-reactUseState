// Make sure I import useState from react before I can use it
import React, {useState} from 'react'

const Counter = () => {
    // If I want to declare a variable that will use the useState features I need to:
    // 1. Declare a const variable
    // 2. give it an array with the name of the variable, in this case "count"
    // 3. and in the second index in that array the setter function that will allow to change the value late on, in this case "serCount"
    // 4. set it equal to the useState function and pass an initial value as a parameter inside of the parenthesis
    const [count, setCount] = useState(0)

  return (
    <>
        {/* whenever we call on a "count" we can check the value of that state */}
        <h1>{count}</h1>
        {/* whenever we invoque on setCount, we will pass some parameter that will change the value of "count"  */}
        <button onClick={() => setCount(count - 1)}>
        -
        </button>
        {/* https://legacy.reactjs.org/docs/hooks-reference.html#usestate */}
        <button onClick={() => setCount((prevState) => prevState + 1)}>
        +
        </button>
        <br/>
        <button onClick={() => setCount(0)}>
        0
        </button>
    </>
  )
}

export default Counter
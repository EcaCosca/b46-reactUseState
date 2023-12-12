import React, {useState} from 'react'

const Form = ({user, setUser}) => {

    const handleChange = (e) => {
        const key = e.target.name
        const value = e.target.value

        setUser((prevState) => {
            return {
                ...prevState,
                [key]: value
            }
        })
    }


  return (
    <div>
        <form >
            <input onChange={handleChange} name="firstName" type="text" placeholder="First Name"/><br/>
            <input onChange={handleChange} name="lastName" type="text" placeholder="Last Name"/><br/>
            <input onChange={handleChange} name="email" type="text" placeholder="Email"/><br/>
            <input onChange={handleChange} name="age" type="number" placeholder="age"/><br/>
            <input type="submit" value="Submit"/>
        </form>
        <h3>Hello {user.firstName} {user.lastName}</h3>
        <p>According to our records you are {user.age} and your email is {user.email}</p>
    </div>
  )
}

export default Form
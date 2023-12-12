import React, {useState} from 'react'

const Form = ({user, setUser}) => {
    const [underAge, setUnderAge] = useState(user.age < 18)

    const handleChange = (e) => {
        const key = e.target.name
        const value = e.target.value

        if (key === "age") {
            value < 18 ? setUnderAge(true) : setUnderAge(false)
        }

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
            <input onChange={handleChange} name="age" type="number" placeholder="Age"/><br/>
            <input type="submit" value="Submit"/>
        </form>
        <div className={underAge ? 'user-card under-age' : 'user-card'}>
            <h3>Hello {user.firstName} {user.lastName}!</h3>
            <p>According to our records you are <em>{user.age}</em> and your email is <em>{user.email}</em></p>
        </div>
    </div>
  )
}

export default Form
import { useState } from "react";

const userObject = {
    name: '',
    email: '',
    password: ''}

const LocalForm = () => {

    //const [values, setValues] = useState(userObject)
    const [name, setName] = useState(userObject.name)
    const [email, setEmail] = useState(userObject.email)
    const [password, setPassword] = useState(userObject.password)

    //const onSetValues = (e) => setValues({...values, [e.target.name]: e.target.value})
    const onSetName = e => setName(e.target.value)
    const onSetEmail = e => setEmail(e.target.value)
    const onSetPassword = e => setPassword(e.target.value)

    const onHandleSubmit = (e) =>{
        e.preventDefault();
        console.log(`${name} : ${email} : ${password}`);
        setName('')
        setEmail('')
        setPassword('')
    }
    

  return (
    <div>
        <form onSubmit={onHandleSubmit}>
            <input
            type="text"
            name="name"
            value={name}
            onChange={onSetName}
            />
            <input
            type="email"
            name="email"
            value={email}
            onChange={onSetEmail}
            />
            <input
            type="password"
            name="password"
            value={password}
            onChange={onSetPassword}
            />
        <p>
            <button type="submit">Submit</button>
        </p>
        </form>
    </div>
  )
}
export default LocalForm
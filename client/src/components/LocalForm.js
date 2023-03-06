import { useState } from "react"

const userObject = {
    name: '',
    email: '',
    password: ''}

const LocalForm = () => {

    const [values, setValues] = useState(userObject)

    const onSetValues = (e) => setValues({...values, [e.target.name]: e.target.value})

    const onHandleSubmit = (e) =>{
        e.preventDefault();
        console.log(`${values.name} : ${values.email} : ${values.password}`);
    }
    

  return (
    <div>
        <form onSubmit={onHandleSubmit}>
            <input
            type="text"
            name="name"
            value={values.name}
            onChange={onSetValues}
            />
            <input
            type="email"
            name="email"
            value={values.email}
            onChange={onSetValues}
            />
            <input
            type="password"
            name="password"
            value={values.password}
            onChange={onSetValues}
            />
        <p>
            <button type="submit">Submit</button>
        </p>
        </form>
    </div>
  )
}
export default LocalForm
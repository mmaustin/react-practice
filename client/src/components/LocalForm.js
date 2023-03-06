import { useState } from "react"

const userObject = {
    name: '',
    email: '',
    password: ''}

const LocalForm = () => {

    const [values, setValues] = useState(userObject)

    const onSetValues = (e) => setValues({[e.target.name]: [e.target.value]})

    const onHandleSubmit = (e) =>{
        e.preventDefault();
        console.log(userObject);
    }
    console.log(values);

  return (
    <div>
        <form onSubmit={onHandleSubmit}>
            <input
            type="text"
            name={userObject.name}
            value={userObject.name}
            onChange={onSetValues}
            />
        </form>
    </div>
  )
}
export default LocalForm
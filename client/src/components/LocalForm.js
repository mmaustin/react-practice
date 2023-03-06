import { useState } from "react"

const userObject = {
    name: '',
    email: '',
    password: ''}

const LocalForm = () => {

    const [values, setValues] = useState(userObject)
    console.log(values);
  return (
    <div>LocalForm</div>
  )
}
export default LocalForm
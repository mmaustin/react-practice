import { useEffect } from "react";
import axios from 'axios';

const Manifest = () => {

    const fetchManifest = async() => {
        try {
            const {response} = await axios.get('https://espn.com', {mode: 'no-cors'})
            console.log(response);
            //const data = await response.json()
            // const {data} = response
            // console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchManifest();
    }, [])

  return (
    <div>Manifest</div>
  )
}
export default Manifest
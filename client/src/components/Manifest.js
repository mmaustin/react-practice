import { useEffect } from "react";

const Manifest = () => {

    const fetchManifest = async() => {
        try {
            const response = await fetch('https://espn.com', {mode: 'no-cors'})
            console.log(response);
            const data = await response.json()
            console.log(data)
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
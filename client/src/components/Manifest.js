import { useEffect } from "react";

const Manifest = () => {

    const fetchManifest = async() => {
        try {
            const response = await fetch('https://digitalcollections.nyhistory.org/islandora/object/islandora%3A139196#page/1/mode/1up', {mode: 'no-cors'})
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
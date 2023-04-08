import { useEffect } from "react";
import axios from 'axios';


const Manifest = () => {

    const fetchManifest = async() => {
        try {
            const {data} = await axios.get('https://ids.si.edu/ids/manifest/NMAAHC-2013_46_6_001')
            //console.log(response);
            //const data = await response.json()
            const {metadata} = data;
            console.log(metadata)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchManifest();
    }, [])

  return (
    <div>
      <img src="https://digitalcollections.nyhistory.org/iiif/2/islandora%3A139297~JP2~b6e8d076055a2676a2096410641702dfb5d9e5e0245ae63daba1b402c646b023/full/pct:50/0/default.jpg" alt="death boat" />
    </div>
  )
}
export default Manifest
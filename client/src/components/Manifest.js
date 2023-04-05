import { useEffect } from "react";
import {log} from 'console';


const Manifest = () => {

    const fetchManifest = async() => {
        try {
            const response = await fetch('https://ids.si.edu/ids/manifest/NMAAHC-2013_46_6_001');
            const data = await response.json();
            log(data)
        } catch (error) {
            log(error)
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
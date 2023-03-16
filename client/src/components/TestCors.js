import { useEffect } from "react"


const TestCors = () => {

    const grabJson = async () => {
        try {
            const response = await fetch('http://localhost:5001');
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
      grabJson();
    }, [])
    
    

  return (
    <div>TestCors</div>
  )
}
export default TestCors
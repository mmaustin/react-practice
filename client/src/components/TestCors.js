import { useEffect } from "react"


const TestCors = () => {

    const grabJson = async () => {
        try {
            const response = await fetch('/');
            console.log(response);
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
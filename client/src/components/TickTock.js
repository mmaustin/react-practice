import {useEffect, useState} from 'react';
import Clock from 'react-live-clock'

const TickTock = () => {

    // const [value, setValue] = useState(new Date());
    // useEffect(() => {
    //     const interval = setInterval(() => setValue(new Date()), 1000);
    
    //     return () => {
    //       clearInterval(interval);
    //     };
    //   }, []);    

  return (
    <div>
      <p>Current time:</p>
      <Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Eastern'}/>
    </div>
  )
}
export default TickTock
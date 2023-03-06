import Clock from 'react-live-clock'

const TickTock = () => {    

  return (
    <div>
      <p>Current time:</p>
      <Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Eastern'}/>
    </div>
  )
}
export default TickTock
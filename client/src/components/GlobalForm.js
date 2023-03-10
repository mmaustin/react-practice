//import { useEffect, useState } from "react";
import { useAppContext } from "../context/appContext";

const GlobalForm = () => {

    const {team, player, handleChange} = useAppContext();
    //const [playa, setPlaya] = useState(player);

    // useEffect(() => {
    //   setPlaya(player)
    // }, [player])
    

    const handleSubmit = e => {
        e.preventDefault();
        console.log(`${player} plays for the ${team}.`);
    }

    const handleInput = e => {
        const name = e.target.name;
        const value = e.target.value;
        handleChange({name, value});
    }

    console.log(team);
    console.log(player);

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name='team'
                value={team}
                onChange={handleInput}
            />
            <input
                type="text"
                name='player'
                value={player}
                onChange={handleInput}
            />
            <button type="submit">Click Me</button>
        </form>
        {team && player ? <p>{`${player} plays for ${team}`}</p> : <p>Give us a team and player!</p>}
    </div>
  )
}
export default GlobalForm
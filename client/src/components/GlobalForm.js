import { useAppContext } from "../context/appContext";

const GlobalForm = () => {

    const {team, player, handleChange} = useAppContext();

    const handleSubmit = e => {
        e.preventDefault();
        console.log(`${player} plays for the ${team}.`);
    }

    const handleInput = e => {
        const name = e.target.name;
        const value = e.target.value;
        handleChange({name, value});
    }

  return (
    <div>GlobalForm</div>
  )
}
export default GlobalForm
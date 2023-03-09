import {
    ADD_FRUIT,
    HANDLE_CHANGE,
} from './actions';

//import { initialState } from './appContext';

const reducer = (state, action) => {
    if(action.type === ADD_FRUIT){
        return{
            ...state,
            fruits: [ ...state.fruits, action.payload.fruit]
        }
    }

    if(action.type === HANDLE_CHANGE){
        return {
            ...state,
            [action.payload.name]: action.payload.value
        }
    }
}
export default reducer;
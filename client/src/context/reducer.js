import {
    ADD_FRUIT
} from './actions';

//import { initialState } from './appContext';

const reducer = (state, action) => {
    if(action.type === ADD_FRUIT){
        return{
            ...state,
            fruits: action.payload.fruit
        }
    }
}
export default reducer;
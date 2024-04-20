import totalmoney from './total'
import totalItem from './item'
import monthSave from './save'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
        totalmoney,
        totalItem,
        monthSave,

});
export default rootReducer;
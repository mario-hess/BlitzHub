import { combineReducers } from 'redux'
import setUserReducer from './setUser'
import toggleNavbarReducer from './toggleNavbar'

const rootReducers = combineReducers({
    user: setUserReducer,
    isNavbarToggled: toggleNavbarReducer,
})

export default rootReducers

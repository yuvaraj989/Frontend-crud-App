import { configureStore } from '@reduxjs/toolkit'
import tasksReducer from './Slices/tasksSlice'
import authReducer from './Slices/authSlice'

const store = configureStore({ 

    reducer :{ 
        auth: authReducer, 
        tasks:tasksReducer,
        
    }
 })
export default store;
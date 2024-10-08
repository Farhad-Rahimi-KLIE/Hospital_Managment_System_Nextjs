import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios'
const initialState = {
Appoinment_jan : [],
}

export const addAppoinment = createAsyncThunk("Apoinment/addAppoinment", async (payload)=>{
    const result = await axios.post("http://localhost:8000/addprop", payload);
    return result.data.addproperty;
})

export const getAppoinment = createAsyncThunk("Apoinment/getAppoinment", async ()=>{
    const result = await axios.get("http://localhost:8000/getprop");
    return result.data.getAllProperty;
})

export const deleteAppoinment = createAsyncThunk("Apoinment/deleteAppoinment", async (payload)=>{
    const result = await axios.delete(`http://localhost:8000/deleteprop/${payload}`);
    return result.data.propertyDelete;
})

export const AppoinmentSlice = createSlice({
    name : "appoinment",
    initialState,
    extraReducers : (builder)=> {
        builder.addCase(getAppoinment.fulfilled, (state, action)=>{
            state.Appoinment_jan = action.payload
        })
        builder.addCase(deleteAppoinment.fulfilled, (state, action)=>{
            state.Appoinment_jan = action.payload
        })
    }
})
export default AppoinmentSlice.reducer;
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios'
const initialState = {
doctor_jan : [],
}

export const adddoctor = createAsyncThunk("doctor/adddoctor", async (payload)=>{
    const result = await axios.post("http://localhost:8000/adddoctor", payload);
    return result.data.addproperty;
})

export const getdoctor = createAsyncThunk("doctor/getdoctor", async ()=>{
    const result = await axios.get("http://localhost:8000/getdoctor");
    return result.data.getAllProperty;
})

export const deletedoctor = createAsyncThunk("doctor/deletedoctor", async (payload)=>{
    const result = await axios.delete(`http://localhost:8000/deletedoctor/${payload}`);
    return result.data.propertyDelete;
})

export const DoctorSlice = createSlice({
    name : "doctor",
    initialState,
    extraReducers : (builder)=> {
        // builder.addCase(addProperty.fulfilled, (state, action)=>{
        //     state.property = action.payload
        // })
        builder.addCase(getdoctor.fulfilled, (state, action)=>{
            state.doctor_jan = action.payload
        })
        builder.addCase(deletedoctor.fulfilled, (state, action)=>{
            state.doctor_jan = action.payload
        })
    }
})
export default DoctorSlice.reducer;
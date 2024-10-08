import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios'
const initialState = {
patient_jan : [],
}

export const addpaient = createAsyncThunk("patient/addpaient", async (payload)=>{
    const result = await axios.post("http://localhost:8000/addpatient", payload);
    return result.data.addproperty;
})

export const getpatient = createAsyncThunk("patient/getpatient", async ()=>{
    const result = await axios.get("http://localhost:8000/getpatient");
    return result.data.getAllProperty;
})

export const deletepatient = createAsyncThunk("patient/deletepatient", async (payload)=>{
    const result = await axios.delete(`http://localhost:8000/deletepatient/${payload}`);
    return result.data.propertyDelete;
})

export const PatientSlice = createSlice({
    name : "patient",
    initialState,
    extraReducers : (builder)=> {
        // builder.addCase(addProperty.fulfilled, (state, action)=>{
        //     state.property = action.payload
        // })
        builder.addCase(getpatient.fulfilled, (state, action)=>{
            state.patient_jan = action.payload
        })
        builder.addCase(deletepatient.fulfilled, (state, action)=>{
            state.patient_jan = action.payload
        })
    }
})
export default PatientSlice.reducer;
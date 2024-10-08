import { configureStore } from '@reduxjs/toolkit'
import appoinmentSlice from './features/Appoinment/appoinmentSlice'
import doctorSlice from './features/Doctor/doctorSlice'
import patientSlice from './features/Patient/patientSlice'
export const makeStore = () => {
  return configureStore({
    reducer: {
      appoinment : appoinmentSlice,
      doctor : doctorSlice,
      patient : patientSlice 
    },
  })
}
"use client"
import { useDispatch, useSelector } from 'react-redux'
import { addpaient, getpatient, deletepatient } from '../../lib/features/Patient/patientSlice'
import { useEffect, useState } from 'react';
const PatientPage = () => {
  const dispatch = useDispatch()
  const patient = useSelector(state => state.patient.patient_jan);

  const [input, setInput] = useState({
    name: "",
    age: "",
    gender: "",
  })

  const HandlePatient = (e) => {
    e.preventDefault();
    dispatch(addpaient(input))
  }

  useEffect(() => {
    dispatch(getpatient());
  }, [])
  return (
    <>
      <h1 className='font-bold'>Add New Patient</h1>
      <div className="container">
        <form>
          <div className="form-control">
            <label htmlFor="title">Patient Name :</label>
            <input type="text" id="title" autocomplete="off"
              name='name'
              value={input.name}
              onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
            />
          </div>
          <div className="form-control">
            <label htmlFor="desc">Patient Age :</label>
            <input type="number" id="description" autocomplete="off"
              name='age'
              value={input.age}
              onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
            />
          </div>
          <div className="form-control">
            <label htmlFor="desc">Patient Gender :</label>
            <input type="text" id="description" autocomplete="off"
              name='gender'
              value={input.gender}
              onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
            />
          </div>
          <button className="submit" onClick={HandlePatient}>Add Patient</button>
        </form>
      </div>
      <div className='flex'>
        <h1 className='font-bold mt-7 ml-8'>Patients {patient.length}</h1>
        {
          patient.map((curElem) => {
            return (
              <>
                <div className='w-[16rem] h-[9rem] border mt-[5rem] ml-1'>
                  <h2 className='font-bold ml-4'>Name : {curElem.name}</h2>
                  <h5 className='font-bold ml-4 mt-3'>Age : {curElem.age}</h5>
                  <h5 className='font-bold ml-4 mt-3'>Gender : {curElem.gender}</h5>
                  <button className='font-bold ml-[14rem] mt-6' onClick={()=> dispatch(deletepatient(curElem._id))}>🗑</button>
                </div>
              </>
            )
          })
        }
      </div>
    </>
  )
}

export default PatientPage

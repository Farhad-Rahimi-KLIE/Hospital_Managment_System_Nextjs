"use client"
import {useEffect, useState} from 'react'
import { addAppoinment, getAppoinment, deleteAppoinment} from '../../lib/features/Appoinment/appoinmentSlice'
import {useSelector, useDispatch} from 'react-redux'
const ApoinmentPage = () => {
  const dispatch = useDispatch()
  const appoinment = useSelector(state => state.appoinment.Appoinment_jan)

  const [input, setInput] = useState({
    patient : "",
    doctor : "",
  })

  const HandleAppoinment = (e)=>{
    e.preventDefault();
    dispatch(addAppoinment(input))
  }

  useEffect(()=>{
    dispatch(getAppoinment())
  },[])
  return (
    <>
       <h1 className='font-bold'>Add New Appoinment</h1>
      <div className="container">
        <form>
          <div className="form-control">
            <label htmlFor="title">Patient Name :</label>
            <input type="text" id="title" 
            name='patient'
            value={input.patient}
            onChange={(e)=> setInput({...input, [e.target.name] : e.target.value})}
            />
          </div>
          <div className="form-control">
            <label htmlFor="desc">Doctor Name :</label>
            <input type="text" id="description" 
            name='doctor'
            value={input.doctor}
            onChange={(e)=> setInput({...input, [e.target.name] : e.target.value})}
             />
          </div>
          <button className="submit" onClick={HandleAppoinment}>Add Appoinment</button>
        </form>
      </div>
      <div className='flex'>
        <h1 className='font-bold mt-7 ml-8'>Appoinment {appoinment.length}</h1>
        {appoinment.map((item)=>{
          return (
            <div className='w-[20rem] h-[9rem] border mt-[5rem] ml-1'>
          <h2 className='font-bold ml-4'>Patient Name : {item.patient}</h2>
          <h5 className='font-bold ml-4 mt-3'>Doctor Name : {item.doctor}</h5>
          <h5 className='font-bold ml-4 mt-3'>Date : {item.createdAt}</h5>
          <button className='font-bold ml-[18rem] mt-4' onClick={()=> dispatch(deleteAppoinment(item._id))}>🗑</button>
        </div>
         )
        })}
      </div>
    </>
  )
}

export default ApoinmentPage

"use client";
import { useEffect, useState } from 'react';
import { adddoctor, getdoctor, deletedoctor} from '../../lib/features/Doctor/doctorSlice'
import {useSelector, useDispatch} from 'react-redux'

const Doctor = () => {
  const dispatch = useDispatch()
  const doctor = useSelector(state => state.doctor.doctor_jan)


  const [input, setInput] = useState({
    name : "",
    specality : "",
  })

  const HandleDoctor = (e)=>{
    e.preventDefault();
    dispatch(adddoctor(input))
  }

  useEffect(()=>{
    dispatch(getdoctor())
  },[])
  return (
    <>
         <h1 className='font-bold'>Add New Doctor</h1>
      <div className="container">
        <form>
          <div className="form-control">
            <label htmlFor="title">Doctor Name :</label>
            <input type="text" id="title" autocomplete="off"
             name='name'
             value={input.name}
             onChange={(e)=> setInput({...input, [e.target.name] : e.target.value})}
            />
          </div>
          <div className="form-control">
            <label htmlFor="desc">Speciality :</label>
            <input type="text" id="description" autocomplete="off"
             name='specality'
             value={input.specality}
             onChange={(e)=> setInput({...input, [e.target.name] : e.target.value})}
            />
          </div>
          <button className="submit" onClick={HandleDoctor}>Add Doctor</button>
        </form>
      </div>
      <div className='flex'>
        <h1 className='font-bold mt-7 ml-8'>Doctors {doctor.length}</h1>
        {doctor.map((item)=>{
          return (
      <div className='w-[16rem] h-[9rem] border mt-[5rem] ml-1'>
        <h2 className='font-bold ml-4'>Name : {item.name}</h2>
        <h5 className='font-bold ml-4 mt-3'>Speciality : {item.specality}</h5>
        <button className='font-bold ml-[14rem] mt-11' onClick={()=> dispatch(deletedoctor(item._id))}>🗑</button>
      </div>
       )
      })}
      </div>
    </>
  )
}

export default Doctor

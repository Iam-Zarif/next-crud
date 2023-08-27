"use client"
import React from 'react'
import {FaTrashAlt} from "react-icons/fa"
import Swal from 'sweetalert2'
const RemoveBtn = ({id}) => {
  const removeTopic = async () => {
    const confirmed = confirm("Are you sure you want to remove");

    if(confirmed){
      await fetch(`http://localhost:3000/api/topics${id}`,{
        method: "DELETE",
      })
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Deleted Topic',
        showConfirmButton: false,
        timer: 1500
      })
    }
  }
  return (
    <div>
        <button onClick={removeTopic}>
            <FaTrashAlt size={24} className='hover:text-blue-900 '/>
        </button>
    </div>
  )
}

export default RemoveBtn
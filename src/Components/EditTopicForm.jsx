"use client"
import React from 'react'

const EditTopicForm = () => {
  return (
    <form className="flex flex-col gap-3">
      <input
        type="text"
        className=" border rounded-full px-5 py-3"
        name=""
        placeholder="Topic title"
        id=""
      />
      <input
        type="text"
        className=" border rounded-full px-5 py-3"
        name=""
        placeholder="Topic Description"
        id=""
      />
      <button className="btn bg-slate-300 rounded-full py-1 border w-1/2 mx-auto"> Update Topic</button  >
    </form>
  )
}

export default EditTopicForm
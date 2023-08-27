/* eslint-disable react/jsx-key */

import React from 'react'
import RemoveBtn from './RemoveBtn'
import Link from 'next/link'
import { HiPencilSquare } from 'react-icons/hi2';
const getTopics = async()  =>{
try {
 const res= await fetch('http://localhost:3000/api/topics',{
    cache:"no-cache",
  });
  if(!res.ok){
    throw new Error("Couldn't");
  }
  return res.json();
} catch (error) {
  console.log("error")
}
}
const TopicsList = async () => {
  const {topics} = await getTopics();
  return (
    <>
    {topics.map((topic) =>{

    
 return <div className='p-8 zarif-bg rounded-full  border-4 border-slate-300 my-3 flex justify-between'>
   
        <div>
        <h2 className='font-bold text-2xl'>{topic.title}</h2>
        <div>{topic.description}</div>
        </div>
        <div className='flex gap-4'>
            <RemoveBtn id={topic._id} className="" />
            <Link   href ={`/editTopic/${topic._id}`}>
<HiPencilSquare className="hover:text-blue-900 " size={30}/>
            </Link>
        
    </div>
</div>})}
    </>
  )
}

export default TopicsList
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SingleData = () => {
const [singledata, setSingleData]= useState([])

    let {id}= useParams()
    useEffect(()=>{
    async function Data(){

        try{
            const response= await fetch(`http://localhost:9000/datahome/${id}`)
            const results= await response.json()
            setSingleData(results)
        }catch(error){
            console.log("failed")
        }
    }
    Data()



  },[])
  
  
    return (
    <div>SingleData

   <p>{singledata.title}</p>
   <p> {singledata.description}</p>
    <p>{singledata.price}</p>
    <p>{singledata.seller}</p>
   <p>{singledata.location}</p>

    </div>
    


  )
}

export default SingleData
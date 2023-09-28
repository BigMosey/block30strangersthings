 
 import React, { useEffect, useState } from 'react'
 import { useNavigate } from 'react-router-dom'
 
 const Home = () => {
    const [items, setItems] = useState([])
    const [firstName, setFirstName]= useState("")
    const [newdata, setNewData] = useState("")
    const navigate= useNavigate()
  useEffect(()=> {
    async function Data(){
        try{
            const response= await fetch("http://localhost:9000/datahome")
            const data= await response.json()
            setItems(data)


        }catch(error){

        }


    }
    Data()

  },[]) 

    


    //items is the [] of objects
    function handleSubmit(e){
        e.preventDefault()
                            //call the array use the find method
                            //loop through the array and check the result = each individual object
                            //if the individual object.seller == state aka what the user types, then return that object
        const foundItem = items.find((item)=>{
           return item.seller == firstName
        })
        //set the state with that returned object from the arrya 
    
        if(foundItem.title){
            setNewData(foundItem)
            console.log("success")
        }else{
            console.log("false")
        }

       
    }



    function handleChangeFirstName(e){
        setFirstName(e.target.value)
        console.log({firstName})
    }


    return (
     <div>
        <form onSubmit={handleSubmit}>
        <label>
        Name: 
            <input type= "text" onChange={handleChangeFirstName}/>
            <button>Submit</button>
        </label>
       


        </form>
        {newdata.title}
        {newdata.description}
        {newdata.price}
        {newdata.seller}
        {newdata.location}
     {
        items.map((info)=>{
            return (
            <div>
            <p key={info.title}>{info.title}</p>
            <button onClick={()=>navigate(`/${info.id}`)}>click</button>
            </div>
            )

        })

    }
     </div>
   )
 }
 
 export default Home
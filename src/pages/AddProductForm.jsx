import React from 'react'
import { useNavigate } from 'react-router-dom'


function AddProductForm(props) {
    const navigate=useNavigate()

    function  submitHandler  (e){
       e.preventDefault()
       //save information in const
       const english_name =  e.target.english_name.value 
       const sanskrit_name = e.target.sanskrit_name.value 

       // add input from user to the object array
       props.setAllProducts(i=> [obj, ...i])
       navigate ("/asanasCollection")
    //    e.target.english_name.value = ""

const obj={}
        obj.english_name= english_name
        obj.sanskrit_name= sanskrit_name
        obj.id=Math.floor(Math.random ()*122222)

    }
  return (
    <div> 
        <form  className='flex justify-center  hero min-h-screen' onSubmit={submitHandler}>
            <input className='border-solid border-black-600 p-10 m-3 btn btn-outline btn-info' type="text"  placeholder='Add english name' name='english_name' />
            <input className='border-solid border-gray-600 p-10 m-3 btn btn-outline btn-info' type="text"  placeholder='Add sanscrit name' name='sanskrit_name' />

            <button  className='btn btn-secondary m-6' type="submit"  name=''> Add Product  </button>

        </form>


    </div>
  )
}

export default AddProductForm
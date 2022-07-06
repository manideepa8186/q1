import React from 'react'
 import Input from '../Input/Input'

function InputContainer() {
    const inputList=[
        {
         type:"text",
         label:"Enter your username",
         placeholder:"your Username",
         datasetid:'username'
       },
       {
        type:"email",
        label:"Enter your email",
        placeholder:"your Email",
        datasetid:'email'
      },
      {
        type:"password",
        label:"Enter your password",
        placeholder:"your Password",
        datasetid:'password'
      }
    
    ]
  return (
    <>
    {
    inputList.map((element)=>
        
            <Input type={element.type} label={element.label} placeholder={element.placeholder} datasetid={element.datasetid} />
    )}
    </>
  )
}

export default InputContainer;
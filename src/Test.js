import React from 'react'

export default function Test(props){
  console.log(props.obj)
  return(
      <div>
        {props.obj.myName}
      </div>
  )
}
import React from 'react'
import { useParams } from 'react-router-dom'
export default function SignleMoviePage() {
    const {id} = useParams();

    console.log("From Single Page=> "+id)
  return (
    <div>
        <h1>SignleMoviePage</h1>
    </div>
  )
}

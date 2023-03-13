import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface Props{
  email: string,
  password: string
}



export default function ResultComponent({email, password}:Props){
  const navigate = useNavigate()
  return(
    <div>
      <p>Email: {email}</p>
      <p>Password: {password}</p>
      <button onClick={() => navigate("/")}>Go to Home</button>
    </div>
  )
}
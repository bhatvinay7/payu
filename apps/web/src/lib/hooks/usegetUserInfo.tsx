import React from 'react'
import {useDispatch} from 'react-redux'
import {getUser_details} from "../redux/featuresSlice/userDetails"
export default function useProfile():boolean{
    const disPatch=useDispatch()
    const user=disPatch(getUser_details() as any)
  return  user
}

"use client"
import { useUser } from '@/stores/useUser'
import { useEffect } from 'react'

export default function Init() {

    const{initialize} = useUser()
    useEffect(()=>{
        initialize()
    },[]  
    )
  return (
    <div>Init</div>
  )
}

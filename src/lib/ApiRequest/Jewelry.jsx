import React from 'react'

export default async function JewelryApiRequest() {

    const res=await fetch("https://fakestoreapi.com/products")
    const ResJson=await res.json()
       
  return ResJson
}
export  async function JewelryApiRequestId(id) {

    const res=await fetch(`https://fakestoreapi.com/products/${id}`)
    const ResJson=await res.json()
       
  return ResJson
}
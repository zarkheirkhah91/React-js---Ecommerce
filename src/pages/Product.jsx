import React from 'react'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import Breadcrum from '../components/Breadcrum/Breadcrum'


const Product = () => {
  const {all_product} = useContext(ShopContext)
  const {productId} = useParams();
  const product = all_product.find((e)=>e.id === productId)
  return (
    <div>
      <Breadcrum product={product}/>
    </div>
  )
}

export default Product

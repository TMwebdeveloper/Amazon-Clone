import React, { useEffect, useState } from 'react'
import axios from "axios"
import ProductCard from './ProductCard'
import Classes from "./ProductCard.module.css"
import Loader from '../Loader/Loader'

const Product = () => {
    const[products, setProducts] = useState()
    const [isLoading, setIsLoading] = useState(false)

    useEffect(()=>{
      setIsLoading(true);
    axios.get("https://fakestoreapi.com/products")
    .then((res)=>{
        setProducts(res.data)
        setIsLoading(false)
    }).catch((err)=>{
        console.log(err)
        setIsLoading(false)
    })
    }, [])

    return (
      <>
        {isLoading ? (
          <Loader />
        ) : (
          <section className={Classes.products__container}>
            {products?.map((singleProduct) => (
              <ProductCard
                key={singleProduct.id}
                product={singleProduct}
                renderAdd={true}
              />
            ))}
          </section>
        )}
      </>
    );
  }

export default Product

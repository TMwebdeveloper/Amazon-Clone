import React, { useContext, useState,useEffect } from 'react'
import LayOut from '../../Components/LayOut/LayOut'
import Classes from "./Orders.module.css"
import { db } from '../../Utility/Firebase'
import { DataContext } from '../../Components/DtaProvider/DtaProvider'
import { data } from 'react-router-dom'
import ProductCard from '../../Components/Product/ProductCard'


const Orders = () => {
  const [{user}, dispatch] = useContext(DataContext)
const  [orders, setOrders] =useState([])
  useEffect(()=>{
    if (user) {
      db.collection("users").doc(user.uid).collection("orders").orderBy("created","desc").onSnapshot((snapshot)=>{
        console.log(snapshot)
        setOrders(
          snapshot.docs.map((doc) =>({
            id:doc.id,
            data:doc.data()
          }))
        )
      });
    }else{
      setOrders([])
    }
  }, [])

  return (
    <LayOut>
      <section className={Classes.container}>
        <div className={Classes.orders__container}>
          <h2>Your Orders</h2>
          {orders?.length == 0 && <div style={{ padding:"20px"}}>
            you dont have orders yet.
          </div>

          }
          {/* ordered items */}
          <div>
            {
              orders?.map((eachOrder, i)=>{

                return ( 
                    <div key={i}>
                      <hr />
                      <p>Order ID: {eachOrder?.id}</p>
                      {
                        eachOrder?.data?.basket?.map(order=>{
                          return (
                            <ProductCard
                              flex={true}
                              product={order}
                              key={order.id}
                            />
                          );
                        

                        })
                      }
                    </div>
                )
              })
            }

          </div>
        </div>
      </section>
</LayOut>
  )
}

export default Orders

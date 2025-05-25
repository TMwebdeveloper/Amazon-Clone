import React from 'react'
import { categoryInfos } from './CategoryFullInfos'
import CategoryCard from './CategoryCard'
import classes from "./category.module.css"
const Category = () => {
  return (
      <section className={classes.category__container}>
        {
        categoryInfos.map((infos, index)=>{
          return <CategoryCard key={index} data={infos} />;
        })
        }
      </section>
  );
}

export default Category

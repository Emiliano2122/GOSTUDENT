import React from 'react'
import dataProducst from '../Api/Api';
import Card from '../Components/Card';

const logo = "https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557291375.3948_Dy2yZu_n.jpg";
export const Products = ({state, setState}) => {
  console.log(state)
  return (
    <div>
        <div>
          {dataProducst.map((el, index) =>(
          <Card
            setState={setState}
            state={state}
            id={el.id}
            key={el.id} 
            imagen={el.image} 
            logo={logo} 
            price={el.price} 
            description={el.description} 
            name={el.name} 
            stock={el.stock}/>))}
        </div>
    </div>
  )
}

export default Products;
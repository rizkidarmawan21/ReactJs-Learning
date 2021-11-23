/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { CheckDiscount, TambahCart } from ".";
import '../../App.css';



function ProdukInfo({ category, title, price, isDiscount }) {
    const benefit = ["Tidak kusut terkena air", "Bahan mulus", "Bahan awet"];
    const listBenefits = benefit.map((itemBenefits) =>
      <li>{itemBenefits}</li>
    );
    return (
      <div className="Deskripsi">
        <p className="Cate">{category}</p>
        <h1 className="Title"> {title}</h1>
        <p className="Price">IDR {price}</p>
        <CheckDiscount isDiscount={isDiscount} />
        <p className="Info" align="justify">
        Some days you have big plans. Others, just an empty schedule and a spirit of adventure. Either way? These juniors' adidas Stan Smith Shoes are a good match. Crisp, classic and always comfortable, they keep your style fresh with every single step you take. And that's not all. Take a peek at the sockliner, and you'll see that your favourite Disney characters are along for the ride. With you, Stan and a big dose of Disney magic? Anything is possible. This product is made with Primegreen, a series of high-performance recycled materials. 50% of the upper is recycled content. No virgin polyester. It's also made with vegan alternatives to animal-derived ingredients or materials.
        </p>
        <ul >
          {listBenefits}
        </ul>
        <a onClick={(e) => TambahCart(title, e)} href="#" >Add To Cart</a>
      </div>
    );
  }


  export default ProdukInfo;
  
  
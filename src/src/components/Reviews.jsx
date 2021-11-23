import React from "react";
import '../../App.css';


function Reviews() {
    const users = [
      {
        "id": 1,
        "name": "Rizki",
        "review": "Kualitas bagus ",
        "img_profile":"https://images.pexels.com/photos/10253051/pexels-photo-10253051.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      },
      {
        "id": 2,
        "name": "Darmawan",
        "review": "Harga murah kualitas bukan kaleng-kaleng",
        "img_profile":"https://images.pexels.com/photos/1499327/pexels-photo-1499327.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      },
      {
        "id": 3,
        "name": "Arin",
        "review": "Harga yang terjangkau barang bagus",
        "img_profile":"https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      }
    ];
  
    const listReview = users.map((itemReview) =>
      <div className="Item">
        <img src={itemReview.img_profile} alt="" />
        <div className="User">
          <h3> {itemReview.name} </h3>
          <p> {itemReview.review} </p>
        </div>
      </div>
    );
  
    return (
      <div className="Review-box">
        <h2>Reviews</h2>
          {listReview}
      </div>
    );
  
  
  
  }
  

  export default Reviews
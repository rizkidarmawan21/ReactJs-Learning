import './App.css';

function App() {
  return (
    <div className="Parentbox">
      <Fotoproduk />
      <ProdukInfo isDiscount="yes" category="SPORT" title="STAN SMITH SHOES" price="100000" />
      <Reviews />
    </div>
  );
}

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

function Fotoproduk() {
  return (
    <div className="Foto">
      <img src="https://www.adidas.co.id/media/catalog/product/g/y/gy3533_sl_ecom.jpg" alt="" />
    </div>
  );
}


function CheckDiscount(props) {
  const { isDiscount } = props;
  if (isDiscount == "yes") {
    return (
      <p>Diskon 50% Off</p>
    );
  } else if (isDiscount == "comming") {
    return (
      <p>Akan ada diskon</p>
    );
  } else {
    return (
      <p>Belum Ada Discount</p>
    );
  }
}

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


function TambahCart(e) {
  console.log("Membeli " + e)
}

export default App;

